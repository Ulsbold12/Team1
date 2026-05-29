import { Router } from "express";
import { requireAuth } from "../../middleware/requireAuth";
import { getMarketingStrategy, saveMarketingStrategy } from ".";
const router = Router();
router.use(requireAuth);

router.get('/', getMarketingStrategy);
router.post('/', saveMarketingStrategy);

export default router;
