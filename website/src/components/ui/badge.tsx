import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "proof" | "pulse" | "ember" | "neutral";
  className?: string;
  /** Renders the little pulsing dot. */
  dot?: boolean;
};

const tones = {
  proof: "border-proof/30 bg-proof/10 text-proof",
  pulse: "border-pulse/30 bg-pulse/10 text-pulse",
  ember: "border-ember/30 bg-ember/10 text-ember",
  neutral: "border-line-bright bg-card text-fog",
};

export function Badge({ children, tone = "neutral", className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {dot && <span className="size-1.5 animate-pulse-soft rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  );
}
