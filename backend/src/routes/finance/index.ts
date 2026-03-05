import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";

export const getFinance: RequestHandler = async (req, res) => {
  const orgId = req.clerkUserId!;
  try {
    const finance = await prisma.finance.findMany({
      where: { orgId },
      orderBy: { month: "desc" },
      take: 6,
    });
    return res.json({ success: true, data: finance });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};

export const createFinance: RequestHandler = async (req, res) => {
  const orgId = req.clerkUserId!;
  const { month, balance, revenue, expense, netProfit, margin } = req.body;
  try {
    const record = await prisma.finance.create({
      data: {
        orgId,
        month: new Date(month),
        balance,
        revenue,
        expense,
        netProfit,
        margin,
      },
    });
    return res.status(201).json({ success: true, data: record });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};
