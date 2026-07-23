import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { ReceiptCard } from "@/components/ui/receipt-card";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { NumberTicker } from "@/components/motion/number-ticker";
import { Check, X } from "lucide-react";
import type { Block } from "@/data/landings";

/** Renders a sequence of typed content blocks — shared by landing + solution templates. */
export function LandingBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </>
  );
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "intro":
      return (
        <Section>
          <Container>
            <SectionHeading eyebrow={block.eyebrow} title={block.title} />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-fog">{block.copy}</p>
            </Reveal>
          </Container>
        </Section>
      );

    case "features":
      return (
        <Section divider>
          <Container>
            <SectionHeading eyebrow={block.eyebrow} title={block.title} lede={block.lede} />
            <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {block.items.map((item) => (
                <StaggerItem key={item.title}>
                  <Card interactive className="h-full">
                    <h3 className="font-display text-lg font-medium text-bright">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fog">{item.copy}</p>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      );

    case "checklist":
      return (
        <Section divider>
          <Container>
            <SectionHeading eyebrow={block.eyebrow} title={block.title} lede={block.lede} />
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="space-y-3.5">
                {block.good.map((line, i) => (
                  <Reveal key={line} delay={i * 0.05}>
                    <p className="flex items-start gap-3 text-mist">
                      <Check className="mt-1 size-4 shrink-0 text-proof" aria-hidden />
                      {line}
                    </p>
                  </Reveal>
                ))}
              </div>
              {block.bad && (
                <div className="space-y-3.5">
                  {block.bad.map((line, i) => (
                    <Reveal key={line} delay={i * 0.05}>
                      <p className="flex items-start gap-3 text-fog">
                        <X className="mt-1 size-4 shrink-0 text-alert" aria-hidden />
                        {line}
                      </p>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </Section>
      );

    case "stats":
      return (
        <Section divider>
          <Container>
            <SectionHeading eyebrow={block.eyebrow} title={block.title} />
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-line/60 lg:grid-cols-4">
              {block.items.map((s) => {
                const numeric = parseFloat(s.value.replace(/[^0-9.]/g, ""));
                const prefix = s.value.match(/^[^0-9]*/)?.[0] ?? "";
                const suffix = s.value.replace(/^[^0-9]*[\d,.]+/, "");
                const isNumeric = Number.isFinite(numeric) && /\d/.test(s.value);
                return (
                  <div key={s.label} className="bg-panel p-8">
                    <p className="font-display text-3xl font-medium text-bright sm:text-4xl">
                      {isNumeric ? (
                        <NumberTicker value={numeric} prefix={prefix} suffix={suffix} className="tabular-nums" />
                      ) : (
                        s.value
                      )}
                    </p>
                    <p className="mt-2 text-sm text-mist">{s.label}</p>
                    {s.note && <p className="mt-1 text-xs text-dim">{s.note}</p>}
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      );

    case "steps":
      return (
        <Section divider>
          <Container>
            <SectionHeading eyebrow={block.eyebrow} title={block.title} lede={block.lede} />
            <div className="mt-14 space-y-4">
              {block.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="group flex gap-6 rounded-2xl border hairline bg-card/50 p-6 transition-colors hover:bg-card sm:p-8">
                    <span className="font-mono text-sm text-proof">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-bright">{item.title}</h3>
                      <p className="mt-2 max-w-3xl leading-relaxed text-fog">{item.copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      );

    case "faq":
      return (
        <Section divider>
          <Container>
            <SectionHeading eyebrow={block.eyebrow} title={block.title} />
            <Reveal delay={0.1}>
              <Accordion items={block.items} className="mt-12 max-w-3xl" />
            </Reveal>
          </Container>
        </Section>
      );

    case "quote":
      return (
        <Section divider>
          <Container>
            <Reveal>
              <blockquote className="mx-auto max-w-3xl text-center">
                <p className="font-display text-2xl font-medium leading-snug text-bright sm:text-3xl">“{block.text}”</p>
                <footer className="mt-6 font-mono text-sm text-fog">— {block.attribution}</footer>
              </blockquote>
            </Reveal>
          </Container>
        </Section>
      );

    case "receipt":
      return (
        <Section divider>
          <Container className="flex justify-center">
            <ReceiptCard className="w-full max-w-lg" />
          </Container>
        </Section>
      );
  }
}
