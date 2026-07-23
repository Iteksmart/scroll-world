import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Clerk activates only when keys are configured (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
// + CLERK_SECRET_KEY); without them the site builds and serves as a pure
// marketing site and /auth/* falls back to the hosted accounts portal links.
const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default clerkEnabled ? clerkMiddleware() : () => NextResponse.next();

export const config = {
  // Scope to auth routes only — the marketing pages stay fully static.
  matcher: ["/auth/(.*)"],
};
