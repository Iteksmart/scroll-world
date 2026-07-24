import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { ShieldCheck, Link2, Bitcoin, Search } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Sealed at the moment of action",
    copy: "Receipts are hashed and signed the instant a fix completes — before anyone could edit the story.",
  },
  {
    icon: Link2,
    title: "Hash-chained history",
    copy: "Each receipt references the previous one. Remove or alter any link and the whole chain screams.",
  },
  {
    icon: Bitcoin,
    title: "Anchored to Bitcoin",
    copy: "OpenTimestamps commits the chain to the most tamper-resistant ledger on Earth. Not even we can rewrite it.",
  },
  {
    icon: Search,
    title: "Verifiable by strangers",
    copy: "No account, no NDA, no trust required. Paste a receipt ID and check the math yourself.",
  },
];

export function VerifySection() {
  return (
    <Section divider>
      <Container>
        <SectionHeading
          eyebrow="Don't trust us"
          title="Verify us."
          lede="Marketing says everyone's AI is amazing. Ours signs its work. The proof ledger is public — audit it right now, mid-scroll."
          align="center"
        />
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <Card interactive className="h-full">
                <pillar.icon className="size-6 text-proof" aria-hidden />
                <h3 className="mt-5 font-display text-lg font-medium text-bright">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{pillar.copy}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button href={site.subdomains.verify} arrow external>
            Open the public verifier
          </Button>
          <Button href="/credibility" variant="secondary">
            Check our credibility page
          </Button>
        </div>
      </Container>
    </Section>
  );
}
