import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { NumberTicker } from "@/components/motion/number-ticker";
import type { Solution } from "@/data/solutions";
import type { Block } from "@/data/landings";
import { LandingBlocks } from "./landing-blocks";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export function SolutionTemplate({ solution }: { solution: Solution }) {
  const faqBlocks = solution.blocks.filter((b): b is Extract<Block, { type: "faq" }> => b.type === "faq");
  return (
    <>
      {faqBlocks.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqBlocks.flatMap((b) => b.items)))}
        />
      )}
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        lede={solution.lede}
        actions={[
          { label: "Get started free", href: "/start" },
          { label: "Book a 20-min demo", href: "https://calendly.com/djuane-itechsmart/new-meeting", variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="The pain" title="Sound familiar?" />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-3">
            {solution.pains.map((p) => (
              <StaggerItem key={p.title}>
                <Card interactive className="h-full">
                  <h3 className="font-display text-lg font-medium text-bright">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{p.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="The outcomes" title="What changes with the loop running." />
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-line/60 lg:grid-cols-4">
            {solution.outcomes.map((s) => {
              const numeric = parseFloat(s.value.replace(/[^0-9.]/g, ""));
              const prefix = s.value.match(/^[^0-9]*/)?.[0] ?? "";
              const suffix = s.value.replace(/^[^0-9]*[\d,.]+/, "");
              const isNumeric = Number.isFinite(numeric) && /\d/.test(s.value);
              return (
                <div key={s.label} className="bg-panel p-8">
                  <p className="font-display text-3xl font-medium text-proof sm:text-4xl">
                    {isNumeric ? <NumberTicker value={numeric} prefix={prefix} suffix={suffix} className="tabular-nums" /> : s.value}
                  </p>
                  <p className="mt-2 text-sm text-fog">{s.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <LandingBlocks blocks={solution.blocks} />

      <CtaBanner title={solution.ctaTitle} />
    </>
  );
}
