import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/ui/cta-banner";
import { roadmap } from "@/data/company";

export const metadata: Metadata = pageMeta({
  title: "Roadmap — Where the Loop Goes Next | iTechSmart",
  description:
    "The public iTechSmart roadmap: shipped, building, and planned — from A2A orchestration to deeper air-gap autonomy, with receipts marking every milestone.",
  path: "/roadmap",
});

const statusTone = { shipped: "proof", building: "pulse", planned: "neutral" } as const;
const statusLabel = { shipped: "Shipped", building: "Building", planned: "Planned" } as const;

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="Where the loop goes next."
        lede="Public by design. When something ships, the ledger says so — which keeps our roadmap more honest than most."
      />
      <Section>
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roadmap.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border hairline bg-card/50 p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-dim">{item.quarter}</span>
                    <Badge tone={statusTone[item.status]} dot={item.status === "building"}>
                      {statusLabel[item.status]}
                    </Badge>
                  </div>
                  <h2 className="mt-4 font-display text-lg font-medium text-bright">{item.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{item.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
