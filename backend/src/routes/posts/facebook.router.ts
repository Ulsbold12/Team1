import Router from "express";
import { getPendingPosts, markPublished, requireApiKey } from ".";

const router = Router();

router.use(requireApiKey);

router.get("/pending-posts", getPendingPosts);
router.post("/posts/:id/publish", markPublished);

export default router;
