import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";
import { customAlphabet, nanoid } from "nanoid";
export const getCodeForMember: RequestHandler = async (req, res) => {
  try {
    const clerkId = req.clerkUserId;
    if (!clerkId) {
      return res.status(404).json({ message: "ID issue" });
    }

    const isAuthorized = await prisma.client.findFirst({
      where: { id: clerkId, role: "EXECUTIVE" },
    });

    if (!isAuthorized) {
      return res
        .status(404)
        .json({
          message: `UNathourized error, clientIDz: ${clerkId}`,
          success: false,
        });
    }
    console.log("authorization in work");
    const newCode = customAlphabet("1234567890", 6);
    const codeToSend = newCode();
    return res.status(200).json({ codeToSend });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "seomthign wenrt wrong" });
  }
};
export const registerMember: RequestHandler = async (req, res) => {
  const { orgId } = req.body;
  const { codeToSend } = req.body;
  const data = req.body;
  if (!orgId) {
    return res.status(500).json({ message: "organizationId not found" });
  }
  try {
    const clerkId = req.clerkUserId;
    const orgExists = await prisma.organization.findUnique({
      where: { id: orgId as string },
    });
    if (!orgExists) {
      return res.status(404).json({
        message: "Client doesn't belong to any organization",
        success: false,
      });
    }
    const newMember = await prisma.client.create({
      data: {
        id: clerkId as string,
        orgId: orgExists.id as string,
        role: data.role,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
      },
    });
    if (!newMember) {
      return res
        .status(500)
        .json({ message: "failed to registser member", success: false });
    }
    return res.status(200).json({ success: true, data: newMember });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "failed to register a member [registermember.ts]",
      success: false,
    });
  }
};
