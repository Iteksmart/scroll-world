import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Adds the hover lift + border-glow treatment. */
  interactive?: boolean;
};

export function Card({ children, className, interactive }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border hairline bg-card/70 p-6 shadow-card sm:p-8",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-proof/30 hover:bg-raise/80 hover:shadow-glow-proof",
        className,
      )}
    >
      {children}
    </div>
  );
}
