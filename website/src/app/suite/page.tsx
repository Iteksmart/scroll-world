import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMeta, softwareJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/ui/cta-banner";
import { products, type Product } from "@/data/products";

export const metadata: Metadata = pageMeta({
  title: "The iTechSmart Suite — One Autonomous Loop, One Receipt Chain",
  description:
    "Every product in the iTechSmart Suite feeds the same UAIO loop and seals the same ProofLink receipt chain: Pulse, OctoAI, ProofLink, Citadel, Hermes, ITSM, and more.",
  path: "/suite",
});

const categories: { key: Product["category"]; label: string; blurb: string }[] = [
  { key: "core", label: "Core platform", blurb: "The loop and the ledger — the two things everything else exists to feed." },
  { key: "intelligence", label: "Intelligence", blurb: "The brains: diagnosis, decision-making, learning, and evidence-grounded answers." },
  { key: "operations", label: "Operations", blurb: "Where detections become tickets, fixes, and closed incidents." },
  { key: "security", label: "Security & compliance", blurb: "Zero-trust enforcement and compliance evidence as a byproduct." },
  { key: "hardware", label: "Edge & hardware", blurb: "The loop, running where your racks actually live — including air-gapped." },
];

export default function SuitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          softwareJsonLd({
            name: "iTechSmart Suite",
            description: "One suite, one autonomous loop, one verifiable receipt chain.",
            path: "/suite",
            freeTier: true,
          }),
        )}
      />
      <PageHero
        eyebrow="The Suite"
        title={`${products.length} products. One loop. One receipt chain.`}
        lede="Nothing here is a point tool. Every product feeds the same autonomous loop, obeys the same governance gates, and seals the same Bitcoin-anchored chain of receipts."
        actions={[
          { label: "Get started free", href: "/start" },
          { label: "See the loop on the homepage", href: "/", variant: "secondary" },
        ]}
      />

      {categories.map((cat, ci) => {
        const items = products.filter((p) => p.category === cat.key);
        if (items.length === 0) return null;
        return (
          <Section key={cat.key} divider={ci > 0}>
            <Container>
              <SectionHeading eyebrow={cat.label} title={cat.blurb} />
              <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <StaggerItem key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="group relative flex h-full flex-col rounded-2xl border hairline bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-proof/30 hover:bg-card hover:shadow-glow-proof"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-medium text-bright group-hover:text-proof">{p.name}</h3>
                        {p.free && <Badge tone="proof">Free</Badge>}
                      </div>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-dim">{p.tagline}</p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">{p.summary}</p>
                      <ArrowUpRight
                        className="absolute right-6 top-7 size-4 text-dim opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-proof group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </Section>
        );
      })}

      <CtaBanner title="Start with one product or the whole suite." lede="Pulse is free forever. The loop grows with you — and every step of the way is sealed." />
    </>
  );
}
