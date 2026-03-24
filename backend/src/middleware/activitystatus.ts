import type { RequestHandler } from "express";
import prisma from "../lib/prisma";
import { getAuth } from "@clerk/express";

export const ActivityStatus: RequestHandler = async (req, res, next) => {
  const { userId } = getAuth(req);

  try {
    if (!userId) {
      ("no client id can be found");
    }
    console.log("iurbwf", userId);
    await prisma.client.update({
      where: { id: userId as any },
      data: { lastSeenAt: new Date(new Date().toISOString()) },
    });
  } catch (e) {
    console.error(e);
  }
  if (userId === undefined) {
    next();
  }
  next();
};
