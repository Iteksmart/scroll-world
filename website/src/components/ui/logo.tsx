import Link from "next/link";
import { cn } from "@/lib/cn";

/** The iTechSmart 8-point star brand mark (from the official press kit). */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden focusable="false">
      <path
        d="M32.00,4.00 L25.69,16.76 L12.20,12.20 L16.76,25.69 L4.00,32.00 L16.76,38.31 L12.20,51.80 L25.69,47.24 L32.00,60.00 L38.31,47.24 L51.80,51.80 L47.24,38.31 L60.00,32.00 L47.24,25.69 L51.80,12.20 L38.31,16.76 Z"
        fill="none"
        stroke="url(#star-grad)"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="star-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#6334c0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** iTechSmart lockup: purple star + wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="iTechSmart home">
      <StarMark className="size-7 transition-transform duration-500 group-hover:rotate-45" />
      <span className="font-display text-xl font-semibold tracking-tight text-bright">iTechSmart</span>
    </Link>
  );
}
