import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import type { Integration } from "@/data/integrations";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export function IntegrationTemplate({ integration }: { integration: Integration }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(integration.faq))} />
      <PageHero
        eyebrow={`Integration · ${integration.category}`}
        eyebrowTone="pulse"
        title={`iTechSmart + ${integration.name}: ${integration.tagline}.`}
        lede={integration.lede}
        actions={[
          { label: "Get started free", href: "/start" },
          { label: "All integrations", href: "/integrations", variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full border-pulse/20">
                <ArrowDownToLine className="size-6 text-pulse" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-medium text-bright">What flows in</h3>
                <p className="mt-3 leading-relaxed text-fog">{integration.loop.inbound}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full border-proof/20">
                <ArrowUpFromLine className="size-6 text-proof" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-medium text-bright">What flows back</h3>
                <p className="mt-3 leading-relaxed text-fog">{integration.loop.outbound}</p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="Capabilities" title={`What the ${integration.name} integration does.`} />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {integration.capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <Card interactive className="h-full">
                  <h3 className="font-display text-lg font-medium text-bright">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{c.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="Setup" title="Live in an afternoon." />
          <div className="mt-12 space-y-4">
            {integration.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="flex gap-6 rounded-2xl border hairline bg-card/50 p-6 sm:p-8">
                  <span className="font-mono text-sm text-proof">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-bright">{step.title}</h3>
                    <p className="mt-2 max-w-3xl leading-relaxed text-fog">{step.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="Questions" title="Before you connect." />
          <Reveal delay={0.1}>
            <Accordion items={integration.faq} className="mt-12 max-w-3xl" />
          </Reveal>
        </Container>
      </Section>

      <CtaBanner title={`Close the loop on ${integration.name}.`} />
    </>
  );
}
