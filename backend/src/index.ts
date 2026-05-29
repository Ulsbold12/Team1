import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import { stripeWebhook } from "./routes/billing";
import adminRouter from "./routes/admin/admin.router";
import clientRouter from "./routes/client/client.router";
import companyRouter from "./routes/company/company.router";
import financeRouter from "./routes/finance/finance.router";
import postsRouter from "./routes/posts/posts.router";
import marketingRouter from "./routes/marketing/marketing.router";
import facebookRouter from "./routes/posts/facebook.router";
import { getAuditLog } from "./routes/admin/auditLog";
import billingRouter from "./routes/billing/billing.router";
import { Chat } from "./routes/ai/chat";
import { ActivityStatus } from "./middleware/activitystatus";
const app = express();
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  }),
);

// Stripe webhook needs raw body — register BEFORE express.json()
app.post(
  "/api/billing/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

app.use(express.json());
app.get("/health", (_req, res) => res.json({ ok: true }));
app.get("/", (_req, res) => res.json({ message: "Hello World", status: 200 }));
app.use(clerkMiddleware());
app.use(ActivityStatus);
//onboarding routes
app.use("/api/onboarding", clientRouter);
//org executive personnel routes
app.use("/api/company", companyRouter);
//finance routes
app.use("/api/finance", financeRouter);
//posts tracking
app.use("/api/posts", postsRouter);
//marketing strategy
app.use("/api/marketing/strategy", marketingRouter);
//automation-marketing
app.use("/api/facebook", facebookRouter);
//billing
app.use("/api/billing", billingRouter);
//admin routers
// app.use("/api/admin", adminRouter);
//activities log fetch request
app.get("/api/auditlog", getAuditLog);
//ai limiting
app.post("/api/chat", Chat);
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

export default app;
