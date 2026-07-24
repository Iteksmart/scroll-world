import { cn } from "@/lib/cn";
import { Badge } from "./badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowTone?: "proof" | "pulse" | "ember" | "neutral";
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

/** Eyebrow + display title + lede, with masked reveal. */
export function SectionHeading({
  eyebrow,
  eyebrowTone = "proof",
  title,
  lede,
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Badge tone={eyebrowTone} dot className="mb-5">
            {eyebrow}
          </Badge>
        </Reveal>
      )}
      <TextReveal
        as={as}
        text={title}
        className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-bright sm:text-5xl lg:text-6xl"
      />
      {lede && (
        <Reveal delay={0.15}>
          <p className={cn("mt-6 text-lg leading-relaxed text-fog sm:text-xl", align === "center" && "mx-auto")}>
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
