import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { integrations } from "@/data/integrations";

export const metadata: Metadata = pageMeta({
  title: "Integrations — ServiceNow, Datadog, Wazuh, PagerDuty & More | iTechSmart",
  description:
    "Connect iTechSmart UAIO to the tools you already run: ServiceNow, Jira, Datadog, Splunk, Wazuh, PagerDuty. Alerts flow in; verified fixes and receipts flow back.",
  path: "/integrations",
});

export default function IntegrationsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        eyebrowTone="pulse"
        title="Keep your stack. Close its loop."
        lede="Your monitoring, ticketing, and SIEM keep doing what they're good at — detection and record-keeping. The loop adds what they never had: verified fixes and cryptographic receipts."
      />
      <Section>
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <StaggerItem key={i.slug}>
                <Link
                  href={`/integrations/${i.slug}`}
                  className="group flex h-full flex-col rounded-2xl border hairline bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pulse/30 hover:bg-card"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-dim">{i.category}</p>
                  <h2 className="mt-2 font-display text-xl font-medium text-bright group-hover:text-pulse">{i.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{i.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-dim transition-colors group-hover:text-pulse">
                    How it connects
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
