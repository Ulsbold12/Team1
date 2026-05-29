import Router from "express";
import { requireAuth } from "../../middleware/requireAuth";
import { registerPatron } from "./registerPatron";
import { getCodeForMember, registerMember } from "./registerMember";
import { registerOrganization } from "./regitserOrganization";

const router = Router();

router.use(requireAuth);
//onboarding routes
router.post("/", registerPatron);
router.post("/member", registerMember);
router.post("/org", registerOrganization);
router.get("/getcode", getCodeForMember);

export default router;