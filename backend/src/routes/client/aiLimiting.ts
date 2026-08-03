import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";

export const BASIC_PLAN_MONTHLY_AI_LIMIT = 5;

export const aiLimiting: RequestHandler = async (req, res, next) => {
  try {
    const clientId = req.clerkUserId;
    if (!clientId) {
      return res
        .status(401)
        .json({ message: "invalid request", success: false });
    }
    const client = await prisma.client.findUnique({ where: { id: clientId } });
    const orgId = client?.orgId;
    if (!client || !orgId) {
      return res.status(404).json({ message: "org not found" });
    }

    const targetCompany = await prisma.organization.findUnique({
      where: { id: orgId },
    });
    if (!targetCompany) {
      return res.status(404).json({ message: "org not found" });
    }
    if (targetCompany.patronage === "BASIC") {
      const usageThisMonth = await prisma.aiUsage.count({
        where: {
          orgId: orgId,
          date: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        },
      });

      if (usageThisMonth >= BASIC_PLAN_MONTHLY_AI_LIMIT) {
        return res
          .status(429)
          .json({ success: false, message: "Limit reached" });
      }
    }

    await prisma.aiUsage.create({
      data: { clientId: client.id, orgId: orgId },
    });

    next();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ success: false, message: "ai tracking" });
  }
};
