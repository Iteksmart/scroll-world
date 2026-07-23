import type { Metadata } from "next";
import { Phone, Mail, MapPin, CalendarClock } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact — Book a Live UAIO Demo | iTechSmart",
  description:
    "Talk to an autonomous IT expert. Book a live UAIO demo, request a proof of concept, or reach sales and support — response within 1 business day.",
  path: "/contact",
});

const channels = [
  { icon: Phone, label: "Call us", value: "(877) 516-4537", href: "tel:+18775164537" },
  { icon: Mail, label: "Sales", value: "sales@itechsmart.dev", href: "mailto:sales@itechsmart.dev" },
  { icon: Mail, label: "Support", value: "support@itechsmart.dev", href: "mailto:support@itechsmart.dev" },
  { icon: CalendarClock, label: "Book direct", value: "20-min demo on Calendly", href: site.calendly },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="SDVOSB · Newark, DE · Response within 1 business day"
        title="Talk to an autonomous IT expert."
        lede="We'd love to hear from you — a live demo, a proof of concept, or a hard question about the receipts. We'll get back to you within one business day."
      />
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>
            <div className="space-y-5">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <a href={c.href} className="block" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    <Card interactive className="flex items-center gap-4 !p-5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-raise text-proof">
                        <c.icon className="size-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">{c.label}</span>
                        <span className="block text-sm font-medium text-bright">{c.value}</span>
                      </span>
                    </Card>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <Card className="!p-5">
                  <span className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-raise text-pulse">
                      <MapPin className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Headquarters</span>
                      <span className="block text-sm font-medium text-bright">1130 Ogletown Rd Ste #2</span>
                      <span className="block text-sm text-fog">Newark, DE 19711</span>
                    </span>
                  </span>
                </Card>
              </Reveal>
              <Reveal delay={0.36}>
                <p className="px-1 font-mono text-xs leading-relaxed text-dim">
                  Prefer evidence before a conversation? Verify a live receipt at{" "}
                  <a href={site.subdomains.verify} className="text-pulse hover:text-proof" target="_blank" rel="noopener noreferrer">
                    verify.itechsmart.dev
                  </a>{" "}
                  — no account required.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
