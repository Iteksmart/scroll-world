import { cn } from "@/lib/cn";

/** Faint blueprint grid backdrop, fading toward the bottom. */
export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 grid-fade", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(76,195,247,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(76,195,247,0.05) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
  );
}

/** Radial glow blobs for hero/CTA backdrops. */
export function Glow({ className, tone = "proof" }: { className?: string; tone?: "proof" | "pulse" | "violet" }) {
  const colors = {
    proof: "rgba(60,232,164,0.13)",
    pulse: "rgba(76,195,247,0.13)",
    violet: "rgba(167,139,250,0.12)",
  };
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-[120px]", className)}
      style={{ background: colors[tone] }}
    />
  );
}
