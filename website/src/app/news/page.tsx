import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { news } from "@/data/company";

export const metadata: Metadata = pageMeta({
  title: "News & Press | iTechSmart",
  description:
    "Company news, executive bios, and the UAIO one-pager — press resources for covering the Unified Autonomous IT Operations category.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & press"
        title="The paper trail, minus the paper."
        lede="Company overview, executive bios, and the UAIO one-pager — everything a journalist or analyst needs, receipts included."
      />
      <Section>
        <Container>
          <Stagger className="grid gap-5 lg:grid-cols-3">
            {news.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border hairline bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-proof/30 hover:bg-card"
                >
                  <span className="font-mono text-xs text-dim">{item.date}</span>
                  <h2 className="mt-3 font-display text-xl font-medium text-bright group-hover:text-proof">{item.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{item.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-dim transition-colors group-hover:text-proof">
                    Read
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-12 text-sm text-dim">
            Press inquiries:{" "}
            <a href="mailto:sales@itechsmart.dev" className="text-pulse hover:text-proof">sales@itechsmart.dev</a> · Media
            assets on the <Link href="/media-kit" className="text-pulse hover:text-proof">media kit page</Link>.
          </p>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
