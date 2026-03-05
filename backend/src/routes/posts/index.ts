import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";

export const getPosts: RequestHandler = async (req, res) => {
  const orgId = req.clerkUserId!;
  try {
    const posts = await prisma.post.findMany({
      where: { orgId },
      orderBy: { publishedAt: "desc" },
      take: 10,
    });
    return res.json({ success: true, data: posts });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};

export const createPost: RequestHandler = async (req, res) => {
  const orgId = req.clerkUserId!;
  const { title, platform, reach } = req.body;
  try {
    const post = await prisma.post.create({
      data: { orgId, title, platform, reach },
    });
    return res.status(201).json({ success: true, data: post });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};
