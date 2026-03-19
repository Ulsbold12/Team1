import express from "express";
import cors from "cors";
import "dotenv/config";
import {
  clerkMiddleware,

} from "@clerk/express";
import { requireAuth } from "./middleware/requireAuth";
import {
  registerPatron,
  registerMember,
  getCodeForMember,
} from "./routes/client";

import {
  getFinance,
  createFinance,
  saveAnalysis,
  getAnalyses,
} from "./routes/finance";
import { getPosts, createPost } from "./routes/posts";
import { Chat } from "./routes/ai/chat";
import { getCompanyData, getUsersData, adminAccess } from "./routes/admin";
import { AdminAuth } from "./middleware/adminAuth";
import { registerOrganization } from "./routes/client/regitserOrganization";

import { getCompany, updateCompany } from "./routes/company/updateOrganization";
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.post("/api/chat", Chat);

app.use(clerkMiddleware());

app.post("/api/onboarding", requireAuth, registerPatron);
app.post("/api/onboarding/member", requireAuth, registerMember);
app.get("/api/onboarding/getcode", requireAuth, getCodeForMember);
app.post("/api/onboarding/org", requireAuth, registerOrganization);

app.get("/api/finance", requireAuth, getFinance);
app.post("/api/finance", requireAuth, createFinance);
app.get("/api/finance/analysis", requireAuth, getAnalyses);
app.post("/api/finance/analysis", requireAuth, saveAnalysis);
app.get("/api/posts", requireAuth, getPosts);
app.post("/api/posts", requireAuth, createPost);
app.get("/api/company", requireAuth, getCompany);
app.put("/api/company", requireAuth, updateCompany);

app.post("/api/admin", adminAccess);
app.get("/api/admin/companies", AdminAuth, getCompanyData);
app.get("/api/admin/clients", AdminAuth, getUsersData);

const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
