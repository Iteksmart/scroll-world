import { Container } from "./container";
import { Badge } from "./badge";
import { Button } from "./button";
import { GridPattern, Glow } from "./grid-pattern";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

type PageHeroProps = {
  eyebrow?: string;
  eyebrowTone?: "proof" | "pulse" | "ember" | "neutral";
  title: string;
  lede?: string;
  actions?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  children?: React.ReactNode;
  /** Center-aligns the hero (default left). */
  center?: boolean;
};

/** Standard interior-page hero with grid backdrop and masked title reveal. */
export function PageHero({ eyebrow, eyebrowTone = "proof", title, lede, actions, children, center }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b hairline pt-16">
      <GridPattern />
      <Glow tone="pulse" className="-left-32 top-0 h-80 w-80" />
      <Glow tone="proof" className="-right-24 top-24 h-72 w-72" />
      <Container className={`relative py-20 sm:py-28 ${center ? "text-center" : ""}`}>
        {eyebrow && (
          <Reveal>
            <Badge tone={eyebrowTone} dot className="mb-6">
              {eyebrow}
            </Badge>
          </Reveal>
        )}
        <TextReveal
          as="h1"
          text={title}
          className={`font-display text-4xl font-medium leading-[1.05] tracking-tight text-bright sm:text-5xl lg:text-6xl ${center ? "mx-auto max-w-4xl" : "max-w-4xl"}`}
        />
        {lede && (
          <Reveal delay={0.15}>
            <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-fog sm:text-xl ${center ? "mx-auto" : ""}`}>{lede}</p>
          </Reveal>
        )}
        {actions && actions.length > 0 && (
          <Reveal delay={0.25}>
            <div className={`mt-9 flex flex-wrap gap-4 ${center ? "justify-center" : ""}`}>
              {actions.map((a) => (
                <Button key={a.label} href={a.href} variant={a.variant ?? "primary"} size="lg" arrow={a.variant !== "secondary"}>
                  {a.label}
                </Button>
              ))}
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </div>
  );
}
