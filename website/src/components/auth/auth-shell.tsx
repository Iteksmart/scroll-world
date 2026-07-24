import Link from "next/link";
import { StarMark } from "@/components/ui/logo";
import { GridPattern, Glow } from "@/components/ui/grid-pattern";

/** Shared centered layout for the /auth pages. */
export function AuthShell({ children, footnote }: { children: React.ReactNode; footnote?: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28">
      <GridPattern />
      <Glow tone="violet" className="left-1/2 top-10 h-80 w-80 -translate-x-1/2" />
      <div className="relative flex w-full max-w-md flex-col items-center">
        <StarMark className="size-10" />
        {children}
        {footnote && <div className="mt-6 text-center text-xs text-dim">{footnote}</div>}
        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
          Every session governed · every action receipted
        </p>
      </div>
    </div>
  );
}

/**
 * Rendered when Clerk keys aren't configured in this environment — links out
 * to the hosted accounts portal so the flow still works end-to-end.
 */
export function AuthFallback({ mode }: { mode: "sign-in" | "sign-up" }) {
  const label = mode === "sign-in" ? "Sign in" : "Create your account";
  return (
    <div className="mt-8 w-full rounded-2xl border hairline bg-card/70 p-8 text-center shadow-card">
      <h1 className="font-display text-2xl font-medium text-bright">{label}</h1>
      <p className="mt-3 text-sm leading-relaxed text-fog">
        Continue with your Google or Microsoft account via the iTechSmart accounts portal.
      </p>
      <div className="mt-6 space-y-3">
        <a
          href="https://accounts.itechsmart.dev"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-line-bright bg-panel text-sm font-medium text-bright transition-colors hover:border-proof/50"
        >
          <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
            <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l3.7 2.9c2.3-2.1 3.7-5.1 3.7-8.6z"/>
            <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.9-5.1L1.2 17.2C3.2 21.2 7.3 24 12 24z"/>
            <path fill="#FBBC05" d="M5.1 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3L1.2 6.8C.4 8.4 0 10.1 0 12s.4 3.6 1.2 5.2l3.9-2.9z"/>
            <path fill="#EA4335" d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.4-3.3C17.9 1 15.2 0 12 0 7.3 0 3.2 2.8 1.2 6.8l3.9 2.9c1-3 3.7-5 6.9-5z"/>
          </svg>
          Continue with Google
        </a>
        <a
          href="https://accounts.itechsmart.dev"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-line-bright bg-panel text-sm font-medium text-bright transition-colors hover:border-proof/50"
        >
          <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
            <path fill="#F25022" d="M1 1h10v10H1z"/>
            <path fill="#7FBA00" d="M13 1h10v10H13z"/>
            <path fill="#00A4EF" d="M1 13h10v10H1z"/>
            <path fill="#FFB900" d="M13 13h10v10H13z"/>
          </svg>
          Continue with Microsoft
        </a>
      </div>
      <p className="mt-6 text-xs text-dim">
        {mode === "sign-in" ? (
          <>New here? <Link href="/auth/sign-up" className="text-pulse hover:text-proof">Create an account</Link></>
        ) : (
          <>Already have an account? <Link href="/auth/sign-in" className="text-pulse hover:text-proof">Sign in</Link></>
        )}
      </p>
    </div>
  );
}

/** Shared Clerk appearance matching the site's design tokens. */
export const clerkAppearance = {
  variables: {
    colorPrimary: "#3ce8a4",
    colorBackground: "#0e1524",
    colorText: "#f6f9fc",
    colorTextSecondary: "#8ea0ba",
    colorInputBackground: "#0a101b",
    colorInputText: "#f6f9fc",
    colorDanger: "#ff6b81",
    borderRadius: "0.9rem",
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
  },
  elements: {
    card: "shadow-none border border-[#1b2740] bg-[#0e1524]",
    formButtonPrimary: "text-[#05070d] font-semibold hover:opacity-90",
    socialButtonsBlockButton: "border border-[#2b3a5c] bg-[#0a101b] text-[#f6f9fc] hover:border-[#3ce8a4]/50",
    footerActionLink: "text-[#4cc3f7] hover:text-[#3ce8a4]",
  },
} as const;
