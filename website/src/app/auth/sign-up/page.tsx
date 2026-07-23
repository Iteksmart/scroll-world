import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";
import { AuthShell, AuthFallback, clerkAppearance } from "@/components/auth/auth-shell";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Create your account | iTechSmart",
  description: "Create an iTechSmart account with Google, Microsoft, or email — free tier, no credit card.",
  path: "/auth/sign-up",
  noIndex: true,
});

export default function SignUpPage() {
  const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return (
    <AuthShell
      footnote={
        <>
          Free tier, no credit card. Google &amp; Microsoft single sign-on via Clerk.
        </>
      }
    >
      {clerkEnabled ? (
        <div className="mt-8">
          <SignUp routing="hash" appearance={clerkAppearance} signInUrl="/auth/sign-in" />
        </div>
      ) : (
        <AuthFallback mode="sign-up" />
      )}
    </AuthShell>
  );
}
