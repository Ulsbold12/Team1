import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";
import { clerkClient } from "../../lib/clerkClient";
//check if admin token valid
//check if admin id matches.
export const getUsersData: RequestHandler = async (req, res) => {
  try {
    const usersData = await prisma.client.findMany({
      include: { ofOrg: true },
    });
    if (!usersData) {
      return res.status(404).json({ message: "no data to be found" });
    }
    return res.status(200).json({ success: true, usersData });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "something went wrong [admin router]" });
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    const { clientId } = req.params;
    if (!clientId) {
      return res
        .status(404)
        .json({ message: "orgId not found", success: false });
    }
    const existing = await prisma.client.findUnique({
      where: { id: clientId as string },
    });
    if (!existing) {
      return res.status(404).json({ message: "user not found", success: false });
    }

    try {
      await clerkClient.users.deleteUser(clientId as string);
    } catch (clerkError) {
      // best-effort — proceed to remove the local record even if the
      // Clerk-side user is already gone or fails to delete
      console.error("Clerk user delete failed:", clerkError);
    }

    await prisma.client.delete({ where: { id: clientId as string } });

    return res.status(200).json({
      success: true,
      message: `deleted, ${clientId} successfully`,
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "seomthign wehfguibw", success: false });
  }
};

const EDITABLE_ROLES = ["EXECUTIVE", "MANAGEMENT", "MEMBER"] as const;

export const updateUserByAdmin: RequestHandler = async (req, res) => {
  try {
    const { clientId } = req.params;
    if (!clientId) {
      return res
        .status(404)
        .json({ message: "clientId not found", success: false });
    }
    const existing = await prisma.client.findUnique({ where: { id: clientId as string } });
    if (!existing) {
      return res.status(404).json({ message: "user not found", success: false });
    }

    const { firstname, lastname, email, phoneNumber, role } = req.body as {
      firstname?: string;
      lastname?: string;
      email?: string;
      phoneNumber?: string;
      role?: string;
    };

    if (role && !EDITABLE_ROLES.includes(role as (typeof EDITABLE_ROLES)[number])) {
      return res.status(400).json({ message: "invalid role", success: false });
    }

    const updated = await prisma.client.update({
      where: { id: clientId as string },
      data: {
        ...(firstname !== undefined ? { firstname } : {}),
        ...(lastname !== undefined ? { lastname } : {}),
        ...(email !== undefined ? { email } : {}),
        ...(phoneNumber !== undefined ? { phoneNumber } : {}),
        ...(role !== undefined ? { role: role as (typeof EDITABLE_ROLES)[number] } : {}),
      },
    });

    return res.status(200).json({ success: true, updated });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "failed to update user", success: false });
  }
};

export const getUsersofOrgbyId: RequestHandler = async (req, res) => {
  try {
    const { orgId } = req.params;
    if (!orgId) {
      return res
        .status(404)
        .json({ message: "couldnt parse orgId", success: false });
    }
    const usersToReturn = await prisma.client.findMany({
      where: {
        orgId: orgId as string,
      },
      include: {
        ofOrg: true,
      },
    });
    return res.status(200).json({ success: true, usersToReturn });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "theres been error", success: false });
  }
};
