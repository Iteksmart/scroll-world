import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { AuthShell, AuthFallback, clerkAppearance } from "@/components/auth/auth-shell";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sign in | iTechSmart",
  description: "Sign in to the iTechSmart UAIO platform with Google, Microsoft, or email.",
  path: "/auth/sign-in",
  noIndex: true,
});

export default function SignInPage() {
  const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  return (
    <AuthShell
      footnote={
        <>
          Google &amp; Microsoft single sign-on via Clerk. Trouble signing in?{" "}
          <a href="mailto:support@itechsmart.dev" className="text-pulse hover:text-proof">
            support@itechsmart.dev
          </a>
        </>
      }
    >
      {clerkEnabled ? (
        <div className="mt-8">
          <SignIn routing="hash" appearance={clerkAppearance} signUpUrl="/auth/sign-up" />
        </div>
      ) : (
        <AuthFallback mode="sign-in" />
      )}
    </AuthShell>
  );
}
