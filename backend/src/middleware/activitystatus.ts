import type { RequestHandler } from "express";
import prisma from "../lib/prisma";
import { getAuth } from "@clerk/express";

export const ActivityStatus: RequestHandler = async (req, _res, next) => {
  const { userId } = getAuth(req);

  if (userId) {
    prisma.client
      .update({
        where: { id: userId },
        data: { lastSeenAt: new Date() },
      })
      .catch(() => {});
  }

  next();
};
