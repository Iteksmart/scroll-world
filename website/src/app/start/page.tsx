import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/ui/cta-banner";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Start Here — Your Fastest Path to Provable Autonomous IT | iTechSmart",
  description:
    "Three ways to start with iTechSmart UAIO: inspect the live proof ledger in 2 minutes, run a free Pulse scan in 60 seconds, or book a 30-minute walkthrough. No sales deck required.",
  path: "/start",
});

const doors = [
  {
    time: "2 minutes",
    icon: "🔍",
    title: "“I want proof first.”",
    copy: "Smart. Go inspect the live public ledger of real production incidents — then verify a receipt's hash chain yourself. No account, no email, no trust required.",
    cta: "View the proof ledger",
    href: "/proof",
    tone: "pulse" as const,
  },
  {
    time: "60 seconds",
    icon: "⚡",
    title: "“I want to try it.”",
    copy: "Download Pulse, scan your environment in 60 seconds, and get your first cryptographic receipt. Free forever, no credit card.",
    cta: "Run a free scan",
    href: "/pulse",
    tone: "proof" as const,
  },
  {
    time: "30 minutes",
    icon: "📞",
    title: "“I want a walkthrough.”",
    copy: "Book a private demo — no sales deck, just a live walkthrough of autonomous remediation running against a real environment.",
    cta: "Book a demo",
    href: "/contact",
    tone: "ember" as const,
  },
];

const audiences = [
  { icon: "🛠", label: "MSP", copy: "One autonomous layer for every client.", href: "/solutions/msp" },
  { icon: "🏢", label: "Enterprise", copy: "Replace three stacks with one that proves itself.", href: "/suite" },
  { icon: "🏛", label: "Government", copy: "SDVOSB. FISMA-aligned. Audit ready.", href: "/gov" },
  { icon: "🏥", label: "Healthcare", copy: "HIPAA-aware autonomy with HL7.", href: "/industries/healthcare" },
  { icon: "⚖", label: "Legal", copy: "Evidence-first infrastructure.", href: "/solutions/legal" },
  { icon: "🇪🇺", label: "EU AI Act", copy: "Compliance by architecture.", href: "/solutions/eu-ai-act" },
];

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Start here"
        title="Three doors. All of them open right now."
        lede={`You don't need a sales call to start. Pick the path that matches your speed — skeptic, hands-on, or ready-to-talk. 90,000+ cryptographic receipts are sealed on the live ledger; inspect any of them at ${site.subdomains.verify.replace("https://", "")}. No account required.`}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Pick your speed" title="From 60 seconds to 30 minutes." />
          <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
            {doors.map((door) => (
              <StaggerItem key={door.title}>
                <Link
                  href={door.href}
                  className="group flex h-full flex-col rounded-2xl border hairline bg-card/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-proof/30 hover:bg-card hover:shadow-glow-proof"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl" aria-hidden>{door.icon}</span>
                    <Badge tone={door.tone}>{door.time}</Badge>
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-medium text-bright">{door.title}</h2>
                  <p className="mt-4 flex-1 leading-relaxed text-fog">{door.copy}</p>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-proof">
                    {door.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading eyebrow="Know your world?" title="Jump straight to your path." />
          <Stagger className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-line/60 lg:grid-cols-3">
            {audiences.map((a) => (
              <StaggerItem key={a.label}>
                <Link href={a.href} className="group flex h-full flex-col bg-panel p-7 transition-colors hover:bg-card">
                  <span className="text-2xl" aria-hidden>{a.icon}</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-bright group-hover:text-proof">{a.label}</h3>
                  <p className="mt-2 flex-1 text-sm text-fog">{a.copy}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBanner
        title="The next outage is coming. Will you be able to prove what happened?"
        lede="No sales deck. Just a live walkthrough of your environment — or a free scan that ends in your first sealed receipt."
        primary={{ label: "Book a private demo", href: "/contact" }}
        secondary={{ label: "Download Pulse — free scan", href: "/pulse" }}
        note="90,000+ receipts on the public ledger · Verify any of them first"
      />
    </>
  );
}
