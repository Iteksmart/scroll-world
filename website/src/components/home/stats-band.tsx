import { Container, Section } from "@/components/ui/container";
import { NumberTicker } from "@/components/motion/number-ticker";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { LiveReceiptsStat } from "./live-receipts-stat";

const stats = [
  { value: 86, suffix: "%", label: "MTTR reduction", note: "4.2 hours → 36 minutes avg" },
  { value: 90, suffix: "%", label: "Alert volume cut", note: "autonomous deduplication" },
  { value: 66, suffix: "", label: "MCP tools live", note: "for any AI agent" },
];

export function StatsBand() {
  return (
    <Section divider>
      <Container>
        <SectionHeading
          eyebrow="Verified in production"
          title="The numbers don't lie. And now they can't."
          lede="Every receipt sealed, every fix verified, every second logged — anchored to Bitcoin where nobody, including us, can rewrite them."
        />
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-line/60 lg:grid-cols-4">
          <Reveal className="bg-panel">
            <LiveReceiptsStat />
          </Reveal>
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i + 1) * 0.08} className="bg-panel">
              <div className="p-8 sm:p-10">
                <p className="font-display text-4xl font-medium tracking-tight text-bright sm:text-5xl">
                  <NumberTicker value={stat.value} suffix={stat.suffix} className="tabular-nums" />
                </p>
                <p className="mt-3 text-sm font-medium text-mist">{stat.label}</p>
                <p className="mt-1 text-xs text-dim">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
