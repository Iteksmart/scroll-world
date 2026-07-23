import { X, Check } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ReceiptCard } from "@/components/ui/receipt-card";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { Button } from "@/components/ui/button";

const logs = [
  "Logs can be edited after the fact",
  "Logs prove a command ran — not that it worked",
  "Logs live in the vendor's database, on the vendor's word",
  "Auditors sample logs and hope",
];

const receipts = [
  "SHA-256 sealed, Ed25519 signed — tamper-evident by construction",
  "Independent verification that the fix actually worked",
  "Anchored to Bitcoin via OpenTimestamps — no one can rewrite history",
  "Anyone can verify any receipt at verify.itechsmart.dev",
];

export function ReceiptsNotLogs() {
  return (
    <Section divider>
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Receipts, not logs"
              title="Logs say it happened. Receipts prove it."
              lede="Every autonomous action produces a ProofLink receipt — a cryptographic artifact your auditor, your customer, or a total stranger can verify without trusting us."
            />
            <div className="mt-10 space-y-3">
              {logs.map((line, i) => (
                <Reveal key={line} delay={i * 0.06}>
                  <p className="flex items-start gap-3 text-fog">
                    <X className="mt-1 size-4 shrink-0 text-alert" aria-hidden />
                    {line}
                  </p>
                </Reveal>
              ))}
              <div className="h-3" />
              {receipts.map((line, i) => (
                <Reveal key={line} delay={0.2 + i * 0.06}>
                  <p className="flex items-start gap-3 text-mist">
                    <Check className="mt-1 size-4 shrink-0 text-proof" aria-hidden />
                    {line}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/prooflink" arrow>
                  How ProofLink works
                </Button>
                <Button href="/receipts-not-logs" variant="secondary">
                  Receipts vs logs
                </Button>
              </div>
            </Reveal>
          </div>
          <Parallax offset={40}>
            <ReceiptCard />
          </Parallax>
        </div>
      </Container>
    </Section>
  );
}
