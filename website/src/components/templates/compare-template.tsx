import { Check, Minus, X } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";
import type { ComparePage } from "@/data/compare";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export function CompareTemplate({ page }: { page: ComparePage }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(page.faq))} />
      <PageHero
        eyebrow={page.eyebrow ?? "Comparison"}
        eyebrowTone="pulse"
        title={page.title}
        lede={page.lede}
        actions={[
          { label: "Get started free", href: "/start" },
          { label: "Book a 20-min demo", href: "https://calendly.com/djuane-itechsmart/new-meeting", variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <Reveal>
            <div className="max-w-3xl rounded-2xl border border-proof/25 bg-proof/[0.05] p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-proof">The honest verdict</p>
              <p className="mt-4 text-lg leading-relaxed text-mist">{page.verdict}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="Capability by capability" title={`iTechSmart vs ${page.competitor}, side by side.`} />
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-2xl border hairline">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="border-b hairline bg-panel">
                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-[0.14em] text-dim">Capability</th>
                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-[0.14em] text-proof">iTechSmart</th>
                    <th className="px-6 py-4 text-left font-mono text-xs uppercase tracking-[0.14em] text-fog">{page.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.rows.map((row) => (
                    <tr key={row.capability} className="border-b hairline last:border-0 hover:bg-card/40">
                      <td className="px-6 py-5 font-medium text-bright">{row.capability}</td>
                      <td className={cn("px-6 py-5", row.advantage === "us" ? "text-mist" : "text-fog")}>
                        <span className="flex items-start gap-2.5">
                          {row.advantage === "us" ? (
                            <Check className="mt-0.5 size-4 shrink-0 text-proof" aria-hidden />
                          ) : (
                            <Minus className="mt-0.5 size-4 shrink-0 text-dim" aria-hidden />
                          )}
                          {row.us}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-fog">
                        <span className="flex items-start gap-2.5">
                          {row.advantage === "them" ? (
                            <Check className="mt-0.5 size-4 shrink-0 text-pulse" aria-hidden />
                          ) : row.advantage === "tie" ? (
                            <Minus className="mt-0.5 size-4 shrink-0 text-dim" aria-hidden />
                          ) : (
                            <X className="mt-0.5 size-4 shrink-0 text-alert/70" aria-hidden />
                          )}
                          {row.them}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="Fair is fair"
            title={`When ${page.competitor} is the right call.`}
            lede="We'd rather you pick correctly than pick us. These are the real cases where we'd point you elsewhere."
          />
          <div className="mt-10 max-w-3xl space-y-3.5">
            {page.whenThem.map((line, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="flex items-start gap-3 text-fog">
                  <Check className="mt-1 size-4 shrink-0 text-pulse" aria-hidden />
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="Common questions" title="Asked in every eval." />
          <Reveal delay={0.1}>
            <Accordion items={page.faq} className="mt-12 max-w-3xl" />
          </Reveal>
        </Container>
      </Section>

      <CtaBanner
        title={`Run iTechSmart next to ${page.competitor}. Keep the receipts.`}
        lede="The free tier seals real receipts on real incidents. Compare evidence, not brochures."
      />
    </>
  );
}
