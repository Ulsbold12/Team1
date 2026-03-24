import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";

export const aiLimiting: RequestHandler = async (req, res, next) => {
  try {
    const { clientId } = req.body;
    if (clientId) {
      return res
        .status(403)
        .json({ message: "invalid request", success: false });
    }
    const client = await prisma.client.findUnique({ where: { id: clientId } });
    const orgId = client?.orgId;

    const targetCompany = await prisma.organization.findUnique({
      where: { id: orgId as string },
    });
    if (!targetCompany) {
      return res.status(404).json({ message: "org not found" });
    }
    if (targetCompany?.patronage === "BASIC") {
      const usageThisMonth = await prisma.aiUsage.count({
        where: {
          id: orgId as string,

          date: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        },
      });

      if (usageThisMonth >= 5) {
        return res
          .status(429)
          .json({ success: false, message: "Limit reached" });
      }
    }

    await prisma.aiUsage.create({
      data: { clientId: client?.id as string, orgId: orgId as string },
    });

    next();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ success: false, message: "ai tracking" });
  }
};
