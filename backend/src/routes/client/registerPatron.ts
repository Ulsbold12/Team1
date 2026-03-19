import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";
import { clerkClient } from "../../lib/clerkClient";
import { Auditlog } from "../admin/auditLog";
export const registerPatron: RequestHandler = async (req, res) => {
  try {
    const clerkId = req.clerkUserId;

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existingUser = await prisma.client.findUnique({
      where: { id: clerkId },
    });
    if (existingUser) {
      return res.status(403).json({ message: "user already registered" });
    }

    const clerkUser = await clerkClient.users.getUser(clerkId);
    console.log("userdata from clerk:", clerkUser);

    const result = await prisma.client.create({
      data: {
        id: clerkId,
        orgId: undefined,
        role: "MANAGEMENT",
        email: clerkUser.emailAddresses[0].emailAddress,
        firstname: clerkUser.firstName as string,
        lastname: clerkUser.lastName as string,
      },
    });
    await Auditlog(
      clerkUser.fullName as string,
      "was created",
      "on the database",
    );
    return res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Registration failed", success: false });
  }
};
