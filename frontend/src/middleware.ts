import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/onboarding(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();
  if (isPublicRoute(req)) return;
  // const path = req.nextUrl.pathname;
  if (!userId) {
    return (await auth()).redirectToSignIn();
  }
  // if (
  //   userId &&
  //   !sessionClaims?.metadata?.onboardingComplete &&
  //   path !== "/onboarding" // prevent infinite redirect loop!
  // ) {
  //   return NextResponse.redirect(new URL("/onboarding", req.url));
  // }

  // if (
  //   userId &&
  //   !sessionClaims?.metadata?.onboardingComplete &&
  //   path === "/onboarding"
  // ) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
