import type { Metadata } from "next";
import { pageMeta, softwareJsonLd, howToJsonLd, jsonLdScript } from "@/lib/seo";
import { loopSteps } from "@/data/loop";
import { Hero } from "@/components/home/hero";
import { LoopScroller, LoopSeoFallback } from "@/components/home/loop-scroller";
import { StatsBand } from "@/components/home/stats-band";
import { ReceiptsNotLogs } from "@/components/home/receipts-not-logs";
import { ProductsBento } from "@/components/home/products-bento";
import { SolutionsStrip } from "@/components/home/solutions-strip";
import { McpSection } from "@/components/home/mcp-section";
import { VerifySection } from "@/components/home/verify-section";
import { CtaBanner } from "@/components/ui/cta-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = pageMeta({
  title: "iTechSmart — Autonomous IT Operations with Cryptographic Proof",
  description:
    "iTechSmart UAIO detects, fixes, and cryptographically proves every autonomous IT action — SHA-256 ProofLink receipts, Bitcoin-anchored and verifiable by anyone.",
  path: "/",
  keywords: [
    "UAIO",
    "autonomous IT operations",
    "self-healing infrastructure",
    "AIOps alternative",
    "cryptographic proof",
    "ProofLink receipts",
    "MTTR reduction",
  ],
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          softwareJsonLd({
            name: "iTechSmart UAIO Platform",
            description:
              "Unified Autonomous IT Operations platform with cryptographic ProofLink receipts anchored to Bitcoin.",
            path: "/",
            freeTier: true,
            featureList: loopSteps.map((s) => s.title),
          }),
          howToJsonLd({
            name: "The UAIO Loop — how autonomous IT operations works",
            description:
              "The 10-step Unified Autonomous IT Operations loop: every incident is detected, ticketed, routed, simulated, fixed, verified, cryptographically sealed, documented, learned from, and synced — without human hands.",
            path: "/",
            steps: loopSteps.map((s) => ({ name: s.title, text: s.copy })),
          }),
        ])}
      />
      <Hero />

      <div id="loop" className="border-t hairline">
        <Container className="pt-20 sm:pt-28">
          <SectionHeading
            eyebrow="Follow the loop"
            title="Ten steps. No cuts. One continuous flight from alert to proof."
            lede="Scroll to fly through the UAIO loop the way an incident does — detected, simulated, fixed, verified, sealed, learned."
          />
        </Container>
        <LoopSeoFallback />
        <LoopScroller />
      </div>

      <StatsBand />
      <ReceiptsNotLogs />
      <ProductsBento />
      <SolutionsStrip />
      <McpSection />
      <VerifySection />
      <CtaBanner />
    </>
  );
}
