import type { RequestHandler } from "express";

import prisma from "../../lib/prisma";
export async function Auditlog(
  clientId: string,
  action: string,
  target: string,
  details?: object,
) {
  await prisma.auditLog.create({ data: { clientId, target, action, details } });
}

export const getAuditLog: RequestHandler = async (req, res) => {
  try {
    const log = await prisma.auditLog.findMany({});
    if (!log) {
      return res
        .status(404)
        .json({ success: false, message: "bi eron yaj c code bicij sursi" });
    }
    return res.status(201).json(log);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "auditlog fetch ajsgdi" });
  }
};
