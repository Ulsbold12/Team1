import type { RequestHandler } from "express";
import  prisma  from "../../lib/prisma";
import jwt from "jsonwebtoken";
import { hashPassword, verifyPassword } from "../../lib/adminPassword";

const ADMIN_TOKEN_EXPIRY = "12h";

export const adminAccess: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(403).json({ message: "VPODKAAA", success: false });
    }
    const admin = await prisma.administrator.findUnique({
      where: { username: username },
    });

    if (!admin) {
      return res.status(403).json({ success: false, message: "aibfiwbf" });
    }

    const { matches, needsRehash } = await verifyPassword(
      password,
      admin.password,
    );

    if (!matches) {
      return res.status(403).json({ success: false, message: "aibfiwbf" });
    }

    if (needsRehash) {
      await prisma.administrator.update({
        where: { id: admin.id },
        data: { password: await hashPassword(password) },
      });
    }

    const accessToken = jwt.sign(
      { adminId: admin.id, username: admin.username },
      `${process.env.ACCESSTOKEN}`,
      { expiresIn: ADMIN_TOKEN_EXPIRY },
    );

    return res.status(201).json({ success: true, res: accessToken });
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong duh" });
  }
};
//this one gives accessToken on signin/login for superadmin
