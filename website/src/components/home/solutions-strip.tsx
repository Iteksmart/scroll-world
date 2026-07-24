import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const solutions = [
  {
    href: "/solutions/msp",
    title: "MSPs",
    stat: "1 engineer, 100 tenants",
    copy: "Multi-tenant autonomy with per-client receipts your customers can verify themselves.",
  },
  {
    href: "/solutions/enterprise",
    title: "Enterprise IT",
    stat: "Autonomy with governance",
    copy: "Full-auto where policy allows, human gates where it matters, evidence everywhere.",
  },
  {
    href: "/industries/healthcare",
    title: "Healthcare",
    stat: "HL7 fixed in 20s",
    copy: "Clinical interfaces that heal themselves, with HIPAA evidence sealed as a byproduct.",
  },
  {
    href: "/industries/government",
    title: "Government",
    stat: "FedRAMP ConMon, continuous",
    copy: "Cryptographic receipts as continuous-monitoring evidence for FedRAMP and CMMC.",
  },
  {
    href: "/solutions/soc",
    title: "Security / SOC",
    stat: "SIEM loop, closed",
    copy: "Wazuh findings become governed, receipt-sealed remediations — not another queue.",
  },
  {
    href: "/eu-ai-act",
    title: "EU AI Act",
    stat: "Article 12, solved",
    copy: "Automatic, tamper-evident logging for high-risk AI systems — by construction.",
  },
];

export function SolutionsStrip() {
  return (
    <Section divider>
      <Container>
        <SectionHeading
          eyebrow="Built for your 3am"
          title="Who sleeps better with the loop running?"
          lede="If it goes down at 3am, who fixes it? Teams that answer 'the platform — and here's the receipt' come from these worlds."
        />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border hairline bg-line/60 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <StaggerItem key={s.href}>
              <Link href={s.href} className="group flex h-full flex-col bg-panel p-8 transition-colors duration-300 hover:bg-card">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-proof">{s.stat}</p>
                <h3 className="mt-3 font-display text-xl font-medium text-bright">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{s.copy}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-dim transition-colors group-hover:text-proof">
                  See the playbook
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
