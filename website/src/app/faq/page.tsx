import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, faqJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { faqCategories, allFaqs } from "@/data/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQ — UAIO Platform, Pricing & Compliance | iTechSmart",
  description:
    "Straight answers about the iTechSmart UAIO platform: the autonomic loop, ProofLink receipts, OctoAI, Arbiter governance, compliance, pricing, and getting started.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(allFaqs))} />
      <PageHero
        eyebrow="FAQ"
        title="Straight answers. Verifiable claims."
        lede="Everything you need to know about the iTechSmart UAIO platform, from architecture to pricing. When an answer includes a number, there's usually a receipt behind it."
      />
      <Section>
        <Container>
          {/* Anchor nav */}
          <nav aria-label="FAQ categories" className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border hairline bg-card/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-fog transition-colors hover:border-proof/40 hover:text-proof"
              >
                {cat.label}
              </a>
            ))}
          </nav>

          <div className="mt-16 space-y-16">
            {faqCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-28">
                <Reveal>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-bright sm:text-3xl">{cat.label}</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <Accordion items={cat.items} className="mt-6 max-w-4xl" />
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-16 text-sm text-dim">
              Still curious? Check the{" "}
              <Link href="/credibility" className="text-pulse hover:text-proof">credibility page</Link> — or skip the
              reading and{" "}
              <a href={site.subdomains.verify} target="_blank" rel="noopener noreferrer" className="text-pulse hover:text-proof">
                verify a live receipt
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>
      <CtaBanner
        title="Still have questions?"
        lede="Our team will walk you through the platform or set up a proof-of-concept deployment."
        primary={{ label: "Book a discovery call", href: site.calendly }}
        secondary={{ label: "Try Pulse free", href: "/pulse" }}
        note="Response within 1 business day"
      />
    </>
  );
}
