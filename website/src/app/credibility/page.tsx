import type { Metadata } from "next";
import { Bitcoin, Cpu, FileCheck, Building2, ExternalLink } from "lucide-react";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Credibility — SDVOSB, NVIDIA Inception, F6S #6 | iTechSmart",
  description:
    "Verify every claim: legal registration, SDVOSB status, OTS-attested receipts, NVIDIA NeMo guardrails, and a public API — due-diligence artifacts, not marketing.",
  path: "/credibility",
});

const registry = [
  { k: "Legal name", v: "ITECHSMART INC." },
  { k: "Registration", v: "2025-001805176 (Delaware)" },
  { k: "Status", v: "SDVOSB · Veteran-owned" },
  { k: "CAGE / UEI", v: "172W2 · ZCPFX4N86G36" },
  { k: "Address", v: "1130 Ogletown Rd Ste #2, Newark, DE 19711" },
  { k: "Contact", v: "support@itechsmart.dev · (877) 516-4537" },
];

const otsStats = [
  { value: "90,000+", label: "Receipts anchored" },
  { value: "4", label: "OTS calendar servers" },
  { value: "6h", label: "BTC confirmation window" },
  { value: "0", label: "Tamper events detected" },
];

const guardrails = [
  { title: "Input safety", copy: "Blocks destructive requests before they reach the reasoning layer." },
  { title: "Execution bounds", copy: "Confidence threshold (70% floor) plus blast-radius ceiling on every action." },
  { title: "Output fact-check", copy: "Post-generation validation against retrieved evidence." },
  { title: "Retrieval integrity", copy: "Hash-validates the RAG context so nobody can poison the ledger memory." },
];

export default function CredibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Credibility", path: "/credibility" },
          ]),
        )}
      />
      <PageHero
        eyebrow="Trust & verification"
        title="Due diligence, pre-packaged."
        lede="Verifiable company information, compliance documents, cryptographic attestations, and a public API. Everything on this page is checkable without talking to us."
        actions={[
          { label: "Verify a live receipt", href: site.subdomains.verify },
          { label: "View the proof ledger", href: "/proof", variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Legally registered"
                title="We publish our paperwork."
                lede="Customers and partners can verify our existence, registration, and federal contracting identifiers directly."
              />
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge tone="proof">SDVOSB</Badge>
                  <Badge tone="pulse">NVIDIA Inception</Badge>
                  <Badge tone="ember">F6S #6 of 2M+</Badge>
                  <Badge>NIST CSF 96/100*</Badge>
                  <Badge>HIPAA 100/100*</Badge>
                </div>
                <p className="mt-3 font-mono text-[11px] text-dim">* self-assessed; control states backed by ProofLink receipts</p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border hairline bg-panel font-mono text-sm">
                <div className="flex items-center gap-2 border-b hairline px-5 py-3">
                  <Building2 className="size-4 text-proof" aria-hidden />
                  <span className="text-xs uppercase tracking-[0.16em] text-dim">Company registry</span>
                </div>
                <dl className="divide-y divide-line/50">
                  {registry.map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between gap-6 px-5 py-3.5">
                      <dt className="shrink-0 text-dim">{row.k}</dt>
                      <dd className="text-right text-mist">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="OTS-attested proof"
            title="Trust distributed across anchors we don't control."
            lede="Every automated action generates a SHA-256 receipt submitted to four independent OpenTimestamps calendar servers within six hours. Verification works through OpenTimestamps — independent of our infrastructure."
          />
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-line/60 lg:grid-cols-4">
            {otsStats.map((s) => (
              <div key={s.label} className="bg-panel p-8">
                <p className="font-display text-3xl font-medium text-proof">{s.value}</p>
                <p className="mt-2 text-sm text-fog">{s.label}</p>
              </div>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="https://opentimestamps.org" variant="secondary" external>
                <Bitcoin className="size-4" aria-hidden /> Verify OTS attestation
              </Button>
              <Button href="/proof" variant="secondary">
                View proof ledger
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="NVIDIA NeMo RAG + Guardrails"
                title="The AI learns from its own production history — inside four rails."
                lede="Every OctoAI incident classification retrieves five similar past incidents from the ProofLink ledger (1024-dim vectors via NVIDIA NeMo Retriever) before selecting a remediation. NeMo Guardrails v0.21.0 gates every autonomous action."
              />
            </div>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {guardrails.map((g) => (
                <StaggerItem key={g.title}>
                  <Card className="h-full">
                    <Cpu className="size-5 text-pulse" aria-hidden />
                    <h3 className="mt-3 font-display text-base font-medium text-bright">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{g.copy}</p>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="Public API v1"
            title="Don't take the website's word for it. curl it."
            lede="api.itechsmart.dev — Swagger docs, free tier with no API key, and a ProofLink receipt on every call."
          />
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border hairline bg-panel font-mono text-sm">
              <div className="border-b hairline px-5 py-3 text-xs uppercase tracking-[0.16em] text-dim"># public endpoints</div>
              <div className="space-y-2.5 px-6 py-5">
                <p><span className="text-ember">POST</span> <span className="text-mist">/v1/classify</span> <span className="text-dim">— RAG classification (Super 49B + NeMo)</span></p>
                <p><span className="text-ember">POST</span> <span className="text-mist">/v1/validate</span> <span className="text-dim">— Guardrails validation, 4 rails</span></p>
                <p><span className="text-proof">GET</span> <span className="text-mist">/v1/ledger</span> <span className="text-dim">— ProofLink receipts</span></p>
                <p><span className="text-proof">GET</span> <span className="text-mist">/v1/health</span> <span className="text-dim">— platform status</span></p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="https://api.itechsmart.dev/docs" external arrow>
                Swagger docs
              </Button>
              <Button href="https://api.itechsmart.dev/v1/health" variant="secondary" external>
                <ExternalLink className="size-4" aria-hidden /> Live health check
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="Compliance documents"
            title="Documentation for your due-diligence process."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Security Overview", copy: "Infrastructure hardening and platform security posture." },
              { title: "Privacy & DPA", copy: "Privacy statement and data-processing agreement." },
              { title: "Incident Response", copy: "Incident response policy summary." },
            ].map((doc) => (
              <StaggerItem key={doc.title}>
                <Card interactive className="h-full">
                  <FileCheck className="size-5 text-proof" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-medium text-bright">{doc.title}</h3>
                  <p className="mt-2 text-sm text-fog">{doc.copy}</p>
                  <p className="mt-4 font-mono text-xs text-dim">Request via support@itechsmart.dev</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBanner
        title="Verified enough? Let's talk."
        lede="Or keep digging — the ledger is public and the API is free. We'll be here when the math checks out."
      />
    </>
  );
}
