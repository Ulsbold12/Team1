import { Router } from "express";
import { requireAuth } from "../../middleware/requireAuth";
import { createCheckout, createPortal, getBillingStatus } from ".";

const router = Router();
router.use(requireAuth);

router.get('/status', getBillingStatus);
router.post('/checkout', createCheckout);
router.post('/portal', createPortal);

export default router;