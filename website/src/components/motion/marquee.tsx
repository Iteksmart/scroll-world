import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
  /** Fades the edges out. */
  fade?: boolean;
};

/** Infinite horizontal marquee. Children are duplicated for the seamless loop. */
export function Marquee({ children, className, slow, fade = true }: MarqueeProps) {
  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      style={
        fade
          ? { maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }
          : undefined
      }
    >
      <div
        className={cn(
          "flex w-max items-center gap-14 pr-14 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          slow ? "animate-marquee-slow" : "animate-marquee",
        )}
      >
        {children}
        <div aria-hidden className="flex items-center gap-14">
          {children}
        </div>
      </div>
    </div>
  );
}
