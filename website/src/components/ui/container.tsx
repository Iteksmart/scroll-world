import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Renders the subtle top hairline divider. */
  divider?: boolean;
};

export function Section({ children, className, id, divider }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28 lg:py-36", divider && "border-t hairline", className)}>
      {children}
    </section>
  );
}
