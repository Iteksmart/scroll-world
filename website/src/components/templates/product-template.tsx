import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { ReceiptCard } from "@/components/ui/receipt-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import type { Product } from "@/data/products";
import { products } from "@/data/products";

const categoryLabel: Record<Product["category"], string> = {
  core: "Core platform",
  intelligence: "Intelligence",
  security: "Security & compliance",
  operations: "Operations",
  hardware: "Edge & hardware",
};

export function ProductTemplate({ product }: { product: Product }) {
  const siblings = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${categoryLabel[product.category]}${product.free ? " · Free" : ""}`}
        eyebrowTone={product.free ? "proof" : "pulse"}
        title={`${product.name} — ${product.tagline}.`}
        lede={product.summary}
        actions={[
          { label: product.free ? "Run it free" : "Get started free", href: "/start" },
          { label: "Book a 20-min demo", href: "https://calendly.com/djuane-itechsmart/new-meeting", variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Capabilities" title={`What ${product.name} does all day.`} />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <StaggerItem key={f.title}>
                <Card interactive className="h-full">
                  <h3 className="font-display text-lg font-medium text-bright">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{f.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>

          {product.stats && (
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-line/60 sm:grid-cols-2 lg:max-w-xl">
              {product.stats.map((s) => (
                <div key={s.label} className="bg-panel p-8">
                  <p className="font-display text-3xl font-medium text-proof">{s.value}</p>
                  <p className="mt-2 text-sm text-fog">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section divider>
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Wired into the loop"
                title="No orphan tooling. Everything seals the same chain."
                lede={`${product.name} plugs into the UAIO loop like every other product in the suite: its actions are policy-routed, twin-simulated where they touch production, and sealed with ProofLink receipts anyone can verify.`}
              />
              <Reveal delay={0.2}>
                <Link
                  href="/suite"
                  className="group mt-8 inline-flex items-center gap-2 text-sm text-pulse transition-colors hover:text-proof"
                >
                  See how the suite fits together
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </Reveal>
            </div>
            <Parallax offset={30}>
              <ReceiptCard />
            </Parallax>
          </div>
        </Container>
      </Section>

      {siblings.length > 0 && (
        <Section divider>
          <Container>
            <SectionHeading eyebrow="Same shelf" title={`More from ${categoryLabel[product.category].toLowerCase()}.`} />
            <Stagger className="mt-12 grid gap-5 sm:grid-cols-3">
              {siblings.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border hairline bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pulse/30 hover:bg-card"
                  >
                    <h3 className="font-display text-lg font-medium text-bright group-hover:text-pulse">{p.name}</h3>
                    <p className="mt-1 text-xs text-dim">{p.tagline}</p>
                    <p className="mt-3 text-sm text-fog line-clamp-3">{p.summary}</p>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      )}

      <CtaBanner
        title={`Put ${product.name} to work tonight.`}
        lede="Free to start. A receipt for everything it does. Your auditors will think you're showing off."
      />
    </>
  );
}
