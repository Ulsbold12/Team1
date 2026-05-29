import { Router } from "express";
import { AdminAuth } from "../../middleware/adminAuth";
import { adminAccess } from "./adminAccess";
import {
  getCompanyData,
  createCompany,
  deleteCompany,
  readCompanydataById,
} from "./getCompanies";
import { deleteUser, getUsersofOrgbyId, getUsersData } from "./getUsers";
import { updateOrgPlan } from "../company/updateOrganization";

const router = Router();

router.post("/", adminAccess);

router.use(AdminAuth);

router.get("/companies", getCompanyData);
router.get("/companies/:orgId", readCompanydataById);
router.post("/companies", createCompany);
router.delete("/companies/:orgId", deleteCompany);
router.put("/companies/:orgId/plan", updateOrgPlan);
router.get("/companies/:orgId/members", getUsersofOrgbyId);
router.delete("/clients/:clientId", deleteUser);
router.get("/clients", getUsersData);

export default router;
