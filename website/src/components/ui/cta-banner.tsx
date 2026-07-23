import { Container } from "./container";
import { Button } from "./button";
import { Glow, GridPattern } from "./grid-pattern";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { cta } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  lede?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: string;
};

/** Conversion banner used at the bottom of nearly every page. */
export function CtaBanner({
  title = "Ready to close the loop?",
  lede = "Start free. Every autonomous action sealed with a Bitcoin-anchored receipt — verifiable by anyone, including your auditors.",
  primary = cta.primary,
  secondary = cta.demo,
  note = "No credit card · Free Pulse scan in 60 seconds · Cancel anytime",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden border-t hairline">
      <GridPattern />
      <Glow tone="proof" className="left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2" />
      <Container className="relative py-24 text-center sm:py-32">
        <TextReveal
          as="h2"
          text={title}
          className="mx-auto max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-bright sm:text-5xl lg:text-6xl"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-fog sm:text-xl">{lede}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={primary.href} size="lg" arrow>
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="secondary" size="lg">
              {secondary.label}
            </Button>
          </div>
          {note && <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-dim">{note}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
