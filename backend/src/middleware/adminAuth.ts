import type { RequestHandler } from "express";
import prisma from "../lib/prisma";
import jwt from "jsonwebtoken";
export const AdminAuth: RequestHandler = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res
        .status(403)
        .json({ message: "bolquenaa shdbu", success: false });
    }
    const accessToken = authorization?.split(" ")[1] as string;
    if (!accessToken) {
      return res.status(404).json("yahara accessToken ni bdaggu c yum");
    }
    let decoded: { adminId: string; username: string };
    try {
      decoded = jwt.verify(accessToken, `${process.env.ACCESSTOKEN}`) as {
        adminId: string;
        username: string;
      };
    } catch (jwtError) {
      if (jwtError instanceof jwt.TokenExpiredError) {
        return res
          .status(401)
          .json({ success: false, message: "token expired" });
      }
      return res.status(401).json({ success: false, message: "token obso" });
    }

    const adminId = decoded?.adminId;
    const admin = await prisma.administrator.findUnique({
      where: { id: adminId },
    });
    if (!admin) {
      return res.status(404).json({ success: false, message: "admin obso" });
    }
    next();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "wibef9ubwub", success: false });
  }
};
