import Router from "express";
import { requireAuth } from "../../middleware/requireAuth";
import { createFinance, getAnalyses, getFinance, saveAnalysis } from ".";

const router = Router();
router.use(requireAuth);

router.post("/", createFinance);
router.get("/", getFinance);
router.post("/analysis", saveAnalysis);
router.get("/analysis", getAnalyses);

export default router;