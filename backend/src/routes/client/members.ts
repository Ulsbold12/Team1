import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";

export const getMembersInfo: RequestHandler = async (req, res) => {
  const clerkId = req.clerkUserId!;
  try {
    const client = await prisma.client.findUnique({ where: { id: clerkId } });
    if (!client?.orgId) return res.status(404).json({ success: false });
    const members = await prisma.client.findMany({ where: { orgId: client.orgId } });
    return res.json({ success: true, data: members });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};

export const DeleteMember: RequestHandler = async (req, res) => {
  const clerkId = req.clerkUserId!;
  const { memberId } = req.body;
  try {
    const exec = await prisma.client.findUnique({ where: { id: clerkId } });
    if (exec?.role !== "EXECUTIVE") return res.status(403).json({ success: false });
    await prisma.client.delete({ where: { id: memberId } });
    return res.json({ success: true });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};

export const UpdateMember: RequestHandler = async (req, res) => {
  const clerkId = req.clerkUserId!;
  const { memberId, role } = req.body;
  try {
    const exec = await prisma.client.findUnique({ where: { id: clerkId } });
    if (exec?.role !== "EXECUTIVE") return res.status(403).json({ success: false });
    const updated = await prisma.client.update({ where: { id: memberId }, data: { role } });
    return res.json({ success: true, data: updated });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};
