import type { Metadata } from "next";
import { pageMeta, faqJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingTabs } from "@/components/pricing/pricing-tabs";
import { Card } from "@/components/ui/card";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Pricing — UAIO Plans, Products & Platform | iTechSmart",
  description:
    "Autonomous IT operations with cryptographic proof: free tier, Suite from $4,850/mo, MSP from $699/mo, federal Citadel, on-prem appliances, and API access from $485/mo.",
  path: "/pricing",
});

const pillars = [
  {
    title: "Provable ROI",
    copy: "ProofLink receipts + measured metrics — up to 86% MTTR reduction, and every claim maps to a verifiable receipt.",
  },
  {
    title: "Flexible adoption",
    copy: "Start manual, move to approval-gated, then fully autonomous — at your pace, with a kill switch at every step.",
  },
  {
    title: "Compliance-first",
    copy: "NIST, HIPAA, EU AI Act, FedRAMP pathway — evidence generated as a byproduct of operations, not a quarterly project.",
  },
  {
    title: "No hostage pricing",
    copy: "Free tier with real receipts, published prices, and a pilot that ends in evidence — not a locked-in contract.",
  },
];

const pricingFaqs = [
  {
    q: "Which plan should I start with?",
    a: "Most teams start free: run Pulse, get your first sealed receipt, and see what UAIO would have automated last month. MSPs typically enter at MSP Starter ($699/mo); enterprises at Suite Starter ($4,850/mo) or a 30-day pilot.",
  },
  {
    q: "Is annual billing required?",
    a: "Pricing shown is billed annually for best value; monthly options are available. The Free tier needs no credit card at all.",
  },
  {
    q: "Do you offer government or nonprofit discounts?",
    a: "Yes — structured for federal procurement including GSA Schedule and sole-source SDVOSB set-asides (CAGE 172W2, UEI ZCPFX4N86G36), plus discounts for education and registered nonprofits.",
  },
  {
    q: "What happens to my receipts if I leave?",
    a: "They stay verifiable forever. Receipts are anchored to Bitcoin via OpenTimestamps — they don't need us, or your subscription, to keep proving what happened.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(pricingFaqs))} />
      <PageHero
        eyebrow="Pricing"
        title="Autonomous IT operations with cryptographic proof."
        lede="Choose the plan that fits. Start resolving IT issues smarter, faster, and with verifiable proof — no credit card required for the Free tier."
        actions={[
          { label: "Start free", href: "/start" },
          { label: "Get a proposal", href: "/contact", variant: "secondary" },
        ]}
      />

      <Section className="pt-10 sm:pt-14 lg:pt-16">
        <Container>
          <PricingTabs />
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="Market context"
            title="Why this pricing aligns with market value."
            lede="Usage- and value-based pricing, comparable to ServiceNow ITOM, PagerDuty AIOps, or Moogsoft tiers — while delivering what none of them do: autonomous remediation and cryptographic proof."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
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
          <SectionHeading eyebrow="Pricing questions" title="Asked before every signature." />
          <Reveal delay={0.1}>
            <Accordion items={pricingFaqs} className="mt-12 max-w-3xl" />
          </Reveal>
        </Container>
      </Section>

      <CtaBanner
        title="Ready to transform your IT operations?"
        lede="121,400+ receipts sealed. Independently verifiable. No account required. Proposals and quotes typically answered within 24 hours."
        primary={{ label: "Book a demo", href: site.calendly }}
        secondary={{ label: "Start free", href: "/start" }}
        note="Or verify any receipt right now at verify.itechsmart.dev"
      />
    </>
  );
}
