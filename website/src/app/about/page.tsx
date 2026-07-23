import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Badge } from "@/components/ui/badge";
import { NumberTicker } from "@/components/motion/number-ticker";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About — Veteran-Owned Autonomous IT Ops | iTechSmart",
  description:
    "iTechSmart Inc. is the veteran-owned (SDVOSB) company behind UAIO — founded 2021 by operators from healthcare, government, and defense IT who got tired of fixes disappearing into logs nobody reads.",
  path: "/about",
});

const team = [
  {
    name: "DJuane Jackson",
    role: "Founder & CEO",
    creds: "U.S. Army Veteran · 24 yrs ops",
    photo: "/team/djuane-jackson.jpg",
    bio: "Built and deployed enterprise IT infrastructure for healthcare, government, and defense before building the platform to automate it. Operator first, founder second.",
  },
  {
    name: "Hamda Awan",
    role: "Co-Founder & CMO",
    creds: "10+ yrs · Healthcare & Federal",
    photo: "/team/hamda-awan.jpg",
    bio: "Translates complex infrastructure capability into language decision-makers actually understand — across technology, healthcare, and federal programs.",
  },
  {
    name: "Fawad Zulfiqar",
    role: "Chief Technology Officer",
    creds: "15+ yrs · IRS-scale federal projects",
    photo: "/team/fawad-zulfiqar.jpg",
    bio: "Former IRS Deputy Director of QA Engineering; PMP, CSM, MBA. The engineering mind behind UAIO's 42-module platform.",
  },
  {
    name: "Morris Lionel",
    role: "Chief Security Officer",
    creds: "26 yrs U.S. Army · Active clearance",
    photo: "/team/morris-lionel.jpg",
    bio: "26 years across U.S. Army tactical, security, and operational domains. Security isn't a feature here — it's the foundation, and every layer withstands scrutiny.",
  },
];

const principles = [
  {
    icon: "🔐",
    title: "Proof over promises",
    copy: "Every claim we make has a cryptographic receipt behind it — verifiable at verify.itechsmart.dev.",
  },
  {
    icon: "⚔️",
    title: "Built for high stakes",
    copy: "We built for healthcare networks, government ops, and MSPs where downtime has real consequences.",
  },
  {
    icon: "📐",
    title: "Honest positioning",
    copy: "We don't oversell. We show you exactly what UAIO would have automated last month — before you commit.",
  },
  {
    icon: "🤖",
    title: "Autonomy as the outcome",
    copy: "The goal isn't a better dashboard. It's infrastructure that detects, fixes, and receipts — without you in the loop.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Founded in the field",
    copy: "LLC formed while managing live IT for healthcare systems and government networks. Veteran-owned from day one.",
  },
  {
    year: "2024",
    title: "First autonomous receipts sealed",
    copy: "Autonomous remediation reached production; the first cryptographic ProofLink receipts were generated and independently verified. Private beta launched with enterprise IT teams.",
  },
  {
    year: "Aug 2025",
    title: "Public launch · F6S #6 globally",
    copy: "Public launch at Big Brand Ventures LIVE in Nashville. Ranked #6 globally among 2M+ AI startups on F6S. SDVOSB certification secured; C-Corp incorporated.",
  },
  {
    year: "2025",
    title: "First enterprise deployments",
    copy: "MSPs and healthcare systems in production. First client crossed 1,000 autonomously-resolved incidents.",
  },
  {
    year: "2026",
    title: "The ledger compounds",
    copy: "Past 121,400 receipts sealed, 90,000+ publicly verifiable — with an 87% autonomous-resolution target across the fleet.",
  },
];

const numbers = [
  { value: 86, suffix: "%", label: "MTTR reduction", note: "4.2 hours → 36 minutes average" },
  { value: 121400, suffix: "+", label: "Receipts sealed", note: "independently verifiable" },
  { value: 42, suffix: "", label: "Platform modules", note: "one autonomous loop" },
  { value: 144, suffix: "", label: "SSL-secured subdomains", note: "run by the platform itself" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <PageHero
        eyebrow="Founded 2021 · Incorporated 2025 · SDVOSB"
        title="We built this because we lived the problem."
        lede="Healthcare systems. Government networks. MSPs holding legacy stacks together with late nights and duct tape. We kept asking: why does every fix disappear into a log nobody reads? The answer became iTechSmart."
        actions={[
          { label: "Book a conversation", href: "/contact" },
          { label: "Verify a live receipt", href: site.subdomains.verify, variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal>
              <Card className="h-full border-proof/20">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-proof">Mission</p>
                <p className="mt-4 font-display text-xl font-medium leading-snug text-bright">
                  Make every fix provable. Make infrastructure fix itself.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-pulse">Method</p>
                <p className="mt-4 font-display text-xl font-medium leading-snug text-bright">
                  Deterministic detection + staged remediation + immutable receipts.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.16}>
              <Card className="h-full">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ember">Outcome</p>
                <p className="mt-4 font-display text-xl font-medium leading-snug text-bright">
                  Lower MTTR, fewer tickets, stronger governance.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="What we actually built"
            title="A category, not another dashboard."
            lede="iTechSmart is classified as a Unified Autonomous IT Operations (UAIO) platform — a category we created. It is not a monitoring tool, a ticketing system, or a compliance checklist. It's all three, connected and automated, with cryptographic proof as the output."
          />
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-line/60 lg:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label} className="bg-panel p-8">
                <p className="font-display text-3xl font-medium text-bright sm:text-4xl">
                  <NumberTicker value={n.value} suffix={n.suffix} className="tabular-nums" />
                </p>
                <p className="mt-2 text-sm text-mist">{n.label}</p>
                <p className="mt-1 text-xs text-dim">{n.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="The operators behind the platform"
            title="Former operators who got tired of infrastructure that couldn't prove what it did."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <StaggerItem key={person.name}>
                <Card interactive className="h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.photo}
                    alt={`${person.name}, ${person.role}`}
                    className="size-16 rounded-full border border-line-bright object-cover"
                    width={64}
                    height={64}
                  />
                  <h3 className="mt-5 font-display text-xl font-medium text-bright">{person.name}</h3>
                  <p className="mt-1 text-sm text-proof">{person.role}</p>
                  <Badge className="mt-3">{person.creds}</Badge>
                  <p className="mt-4 text-sm leading-relaxed text-fog">{person.bio}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="What we stand for" title="The principles behind the platform." />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <Card interactive className="h-full">
                  <span className="text-2xl" aria-hidden>{p.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-medium text-bright">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{p.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="The journey" title="Achievements & milestones." />
          <div className="relative mt-14 space-y-0 before:absolute before:left-[7.5rem] before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-line sm:before:block">
            {milestones.map((m, i) => (
              <Reveal key={m.year + m.title} delay={i * 0.05}>
                <div className="grid gap-2 py-6 sm:grid-cols-[6rem_3rem_1fr] sm:gap-6">
                  <p className="font-mono text-sm text-proof sm:text-right">{m.year}</p>
                  <div className="relative hidden sm:block">
                    <span className="absolute left-[1.4rem] top-1.5 size-2.5 rounded-full border-2 border-proof bg-ink" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-bright">{m.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">{m.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="We'll show you what UAIO would have fixed last month. Free."
        lede="Run Pulse on one environment — 60 seconds. You get a live infrastructure health report, a ProofLink receipt, and a view of exactly what UAIO would have automated. No sales deck. No commitment."
        primary={{ label: "Run a free Pulse scan", href: "/pulse" }}
        secondary={{ label: "Book a technical demo", href: "/contact" }}
        note="No sales deck · No commitment · Receipt included"
      />
    </>
  );
}
