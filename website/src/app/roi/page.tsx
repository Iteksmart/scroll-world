import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RoiCalculator } from "@/components/roi/roi-calculator";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "ROI Calculator — What Is UAIO Worth to You? | iTechSmart",
  description:
    "Model your IT operations costs and see real-time savings from autonomous operations: MTTR reduction, engineer hours recovered, and downtime cost eliminated.",
  path: "/roi",
});

const industry = [
  { value: "$4.88M", label: "Avg cost of a data breach", source: "IBM Cost of a Data Breach 2024" },
  { value: "277 days", label: "Avg time to identify & contain a breach", source: "IBM 2024" },
  { value: "$1.76M", label: "Savings with AI-driven automation", source: "IBM 2024" },
  { value: "94%", label: "UAIO classification accuracy", source: "iTechSmart internal benchmarks" },
];

export default function RoiPage() {
  return (
    <>
      <PageHero
        eyebrow="ROI calculator"
        title="What is UAIO worth to your organization?"
        lede="Adjust the sliders to model your current IT operations costs and see real-time savings from deploying autonomous operations."
      />
      <Section>
        <Container>
          <RoiCalculator />
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="The cost of doing nothing"
            title="Every minute of unresolved downtime compounds."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industry.map((s) => (
              <StaggerItem key={s.label}>
                <Card className="h-full">
                  <p className="font-display text-3xl font-medium text-bright">{s.value}</p>
                  <p className="mt-3 text-sm text-mist">{s.label}</p>
                  <p className="mt-2 font-mono text-[11px] text-dim">{s.source}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBanner
        title="Want a custom ROI analysis?"
        lede="We'll model your exact environment — ticketing volume, infrastructure topology, compliance requirements — and deliver a detailed savings report within 48 hours."
        primary={{ label: "Schedule custom ROI analysis", href: site.calendly }}
        secondary={{ label: "Run a free Pulse scan", href: "/pulse" }}
        note="Savings report within 48 hours · Free scan in 60 seconds"
      />
    </>
  );
}
