import { Router } from "express";
import { requireAuth } from "../../middleware/requireAuth";
import { getMembersInfo } from "./getMembersInfo";
import { DeleteMember, UpdateMember } from "./updateMember";
import { getCompany, updateCompany } from "./updateOrganization";

const router = Router();
router.use(requireAuth);

router.get("/members", getMembersInfo);
router.delete("/members", DeleteMember);
router.post("/members", UpdateMember);

router.get('/', getCompany);
router.put('/', updateCompany);
export default router;
