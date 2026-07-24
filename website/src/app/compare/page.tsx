import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { comparePages } from "@/data/compare";

export const metadata: Metadata = pageMeta({
  title: "Compare iTechSmart — vs Datadog, ServiceNow, PagerDuty & More",
  description:
    "Honest, capability-by-capability comparisons of iTechSmart UAIO against Datadog, Dynatrace, ServiceNow, PagerDuty, Splunk, Moogsoft, and the AIOps category.",
  path: "/compare",
});

export default function CompareIndex() {
  return (
    <>
      <PageHero
        eyebrow="Comparisons"
        eyebrowTone="pulse"
        title="We publish the table stakes. Including where we lose."
        lede="Every comparison below includes the honest cases where the other tool is the right call. Evidence over adjectives — it's kind of our whole thing."
      />
      <Section>
        <Container>
          <Stagger className="grid gap-px overflow-hidden rounded-2xl border hairline bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
            {comparePages.map((c) => (
              <StaggerItem key={c.slug}>
                <Link href={`/compare/${c.slug}`} className="group flex h-full flex-col bg-panel p-8 transition-colors hover:bg-card">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-dim">iTechSmart vs</p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-bright group-hover:text-proof">{c.competitor}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog line-clamp-3">{c.lede}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-dim transition-colors group-hover:text-proof">
                    Read the comparison
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBanner
        title="The only comparison that matters runs in your stack."
        lede="Free tier, real incidents, sealed receipts. Bring the results to your next vendor review."
      />
    </>
  );
}
