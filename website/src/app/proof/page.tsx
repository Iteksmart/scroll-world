import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LedgerFeed } from "@/components/proof/ledger-feed";
import { ReceiptCard } from "@/components/ui/receipt-card";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Proof Ledger — Live Cryptographic Receipts | iTechSmart",
  description:
    "The live public ledger of autonomous actions: every one SHA-256 hashed, chain-linked, OTS-anchored to Bitcoin, and verifiable by anyone — no account required.",
  path: "/proof",
});

export default function ProofPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Proof Ledger", path: "/proof" },
          ]),
        )}
      />
      <PageHero
        eyebrow="ProofLink ledger · live autonomous action ledger"
        title="Cryptographic proof of every action."
        lede="Every autonomous action this platform takes is SHA-256 hashed, chain-linked, and publicly verifiable. This page is the receipt drawer — permanently open."
        actions={[
          { label: "Verify a receipt yourself", href: `${site.subdomains.verify}/76a7d0bee971496c` },
          { label: "Ledger API", href: "https://api.itechsmart.dev/v1/ledger", variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <Reveal>
              <LedgerFeed />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="How to read it"
                title="Each row is a link in a chain nobody can quietly edit."
                lede="Receipts reference their predecessors. Remove or alter one, and every subsequent hash stops matching — the chain itself is the alarm."
              />
              <Parallax offset={24} className="mt-10">
                <ReceiptCard />
              </Parallax>
            </div>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="No account. No NDA. No trust."
            title="Audit us right now, mid-scroll."
            lede="Paste any receipt ID into the public verifier. If the math doesn't check out, tell everyone."
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={site.subdomains.verify} size="lg" arrow external>
              Open the verifier
            </Button>
            <Button href="/credibility" variant="secondary" size="lg">
              More verification paths
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Imagine your auditor's face."
        lede="Every incident closed with evidence anchored to Bitcoin. Start free and seal your first receipt tonight."
      />
    </>
  );
}
