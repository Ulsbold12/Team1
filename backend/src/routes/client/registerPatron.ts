import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";
import type { PrismaClient } from "@prisma/client";
import { clerkClient } from "../../lib/clerkClient";

export const registerPatron: RequestHandler = async (req, res) => {
  try {
    const clerkId = req.clerkUserId;
    const clerkUser = await clerkClient.users.getUser(clerkId as string);
    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = req.body;

    const existingUser = await prisma.client.findUnique({
      where: { id: clerkId },
    });
    if (existingUser) {
      return res.status(403).json({ message: "user already registered" });
    }

    const result = await prisma.$transaction(async (tx) => {
      const organization = await tx.organization.create({
        data: {
          id: clerkId,
          name: data.name,
          industry: data.industry,
          patronage: "BASIC",
          address: data.address ?? "",
          description: data.description ?? "",
          emailAddress: data.emailAddress ?? "",
          phoneNumber: data.phoneNumber ?? "",
        },
      });

      const newClient = await tx.client.create({
        data: {
          id: clerkId,
          orgId: organization.id,
          role: data.role ?? "EXECUTIVE",
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          profilePic: clerkUser.imageUrl ?? "",
        },
      });

      //audit log recorder
      await prisma.auditLog.createMany({
        data: [
          {
            clientId: clerkId,
            action: "CREATE",
            target: "ORGANIZATION",
            details: `${organization.name} with the ID ${organization.id}`,
          },
          {
            clientId: `${organization.id}`,
            action: "JOIN",
            target: "PATRONAGE",
            details: `${organization.patronage} at ${organization.createdAt}`,
          },
        ],
      });

      return { organization, newClient };
    });

    // Clerk metadata-д onboarding дууссан гэж тэмдэглэнэ
    await clerkClient.users.updateUser(clerkId, {
      publicMetadata: { onboardingComplete: true },
    });

    return res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Registration failed", success: false });
  }
};
