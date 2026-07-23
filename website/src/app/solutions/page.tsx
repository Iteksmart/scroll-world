import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = pageMeta({
  title: "Solutions — Autonomous IT Operations for Every Team | iTechSmart",
  description:
    "UAIO playbooks for MSPs, enterprise IT, DevOps, SOC teams, healthcare, government, finance, and legal — autonomous remediation with cryptographic proof.",
  path: "/solutions",
});

export default function SolutionsIndex() {
  const teams = solutions.filter((s) => s.kind === "solutions");
  const industries = solutions.filter((s) => s.kind === "industries");

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Same loop. Your 3am."
        lede="Every team meets the loop at a different pain point — the alert flood, the audit, the burnout, the budget. Pick yours."
      />
      <Section>
        <Container>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-dim">By team</h2>
          <Stagger className="mt-8 grid gap-px overflow-hidden rounded-2xl border hairline bg-line/60 sm:grid-cols-2">
            {teams.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="group flex h-full flex-col bg-panel p-8 transition-colors hover:bg-card">
                  <h3 className="font-display text-2xl font-medium text-bright group-hover:text-proof">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{s.lede}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-dim transition-colors group-hover:text-proof">
                    See the playbook
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {industries.length > 0 && (
            <>
              <h2 className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-dim">By industry</h2>
              <Stagger className="mt-8 grid gap-px overflow-hidden rounded-2xl border hairline bg-line/60 sm:grid-cols-2">
                {industries.map((s) => (
                  <StaggerItem key={s.slug}>
                    <Link href={`/industries/${s.slug}`} className="group flex h-full flex-col bg-panel p-8 transition-colors hover:bg-card">
                      <h3 className="font-display text-2xl font-medium text-bright group-hover:text-proof">{s.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{s.lede}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-dim transition-colors group-hover:text-proof">
                        See the playbook
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </>
          )}
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
