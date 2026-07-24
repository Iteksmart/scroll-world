import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  /** Shows the arrow that nudges right on hover. */
  arrow?: boolean;
  external?: boolean;
};

const variants = {
  primary:
    "bg-proof text-ink font-semibold shadow-glow-proof hover:bg-[#5ff0b8] hover:shadow-[0_0_56px_-8px_rgba(60,232,164,0.6)]",
  secondary:
    "border border-line-bright bg-card/60 text-bright hover:border-proof/50 hover:bg-raise",
  ghost: "text-mist hover:text-bright hover:bg-card/70",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function Button({ href, children, variant = "primary", size = "md", className, arrow, external }: ButtonProps) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 will-change-transform active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.2}
          aria-hidden
        />
      )}
    </>
  );
  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
