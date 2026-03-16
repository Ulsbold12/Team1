import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(["/"]);
const isAdminOnly = createRouteMatcher(["/admin"]);
export default clerkMiddleware(async (auth, req, next) => {
  const { isAuthenticated } = await auth();
  if (!isAuthenticated) {
    console.log("Sign in/up to get authenticatad")
  }
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
  const { userId, orgId } = await auth();
  if (isAdminOnly(req)) {
    const { adminId } = await req.body as any
    if (!adminId) {
      await auth.protect();
    }

    // 👇 Later you can add role check here too
    // e.g. if (sessionClaims?.metadata?.role !== "admin") { redirect }

  }

  const requestHeaders = new Headers(req.headers);
  if (userId) {
    requestHeaders.set("clerkId", userId);
  }
  if (orgId) {
    requestHeaders.set("orgId", orgId);
  }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});
//what I need to do here is:
//once new patron is registered, it has to attach userId and orgnanizationId to every sigle request it sends to database.
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
