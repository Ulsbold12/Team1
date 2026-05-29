import { Router } from "express";
import { requireAuth } from "../../middleware/requireAuth";
import {
  createPost,
  deleteAllPosts,
  deletePost,
  getPosts,
  publishNow,
  updatePost,
} from ".";
const router = Router();
router.use(requireAuth);

router.get("/", getPosts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/", deleteAllPosts);
router.delete("/:id", deletePost);
router.post("/:id/publish-now", publishNow);

export default router;
