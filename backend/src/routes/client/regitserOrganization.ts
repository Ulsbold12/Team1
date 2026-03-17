import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";
import { clerkClient } from "../../lib/clerkClient";
export const registerOrganization: RequestHandler = async (req, res) => {
  try {
    const clerkId = req.clerkUserId;
    if (!clerkId) {
      return res.status(403).json({ message: "Unathourized" });
    }
    const data = req.body;
    const newOrg = await prisma.organization.create({data: {
        
    }})
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Somethign went wrong" });
  }
};
