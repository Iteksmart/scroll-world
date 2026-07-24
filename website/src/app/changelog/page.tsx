import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/ui/cta-banner";
import { changelog } from "@/data/company";

export const metadata: Metadata = pageMeta({
  title: "Changelog — What Shipped, Receipt-Sealed | iTechSmart",
  description:
    "Platform release notes for iTechSmart UAIO: new MCP tools, Supreme engine upgrades, compliance packs, and loop improvements — every deploy sealed on the ledger.",
  path: "/changelog",
});

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title="What shipped. With receipts."
        lede="Release notes from a platform that seals its own deploys. The newest entries are below — the full history lives on the ledger."
      />
      <Section>
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {changelog.map((entry, i) => (
              <Reveal key={entry.version} delay={Math.min(i * 0.04, 0.3)}>
                <article className="relative rounded-2xl border hairline bg-card/50 p-7 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone={i === 0 ? "proof" : "neutral"} dot={i === 0}>
                      {entry.version}
                    </Badge>
                    <span className="font-mono text-xs text-dim">{entry.date}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-medium text-bright sm:text-2xl">{entry.title}</h2>
                  <ul className="mt-4 space-y-2.5">
                    {entry.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-fog">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-proof/60" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
