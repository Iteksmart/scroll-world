import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { cn } from "@/lib/cn";

/** Bento grid of the suite — featured products get the large tiles. */
export function ProductsBento() {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured).slice(0, 8);

  return (
    <Section divider>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The iTechSmart Suite"
            title={`${products.length} products. One loop. Zero unproven claims.`}
            lede="Every product in the suite feeds the same autonomous loop and seals the same receipt chain."
          />
          <Link
            href="/suite"
            className="group mb-2 inline-flex items-center gap-1 font-mono text-sm text-pulse transition-colors hover:text-proof"
          >
            Explore the suite
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <StaggerItem key={p.slug} className={cn(i < 2 ? "lg:col-span-2" : "lg:col-span-2", "sm:col-span-1")}>
              <Link
                href={`/${p.slug}`}
                className="group relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-2xl border hairline bg-card/70 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-proof/30 hover:shadow-glow-proof"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-bright group-hover:text-proof">{p.name}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-dim">{p.tagline}</p>
                  </div>
                  {p.free && <Badge tone="proof">Free</Badge>}
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">{p.summary}</p>
                {p.stats && (
                  <div className="mt-6 flex gap-8">
                    {p.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-xl font-medium text-proof">{s.value}</p>
                        <p className="text-xs text-dim">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <ArrowUpRight
                  className="absolute right-6 top-6 size-5 text-dim opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-proof group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </StaggerItem>
          ))}

          {rest.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border hairline bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pulse/30 hover:bg-card"
              >
                <h3 className="font-display text-lg font-medium text-bright group-hover:text-pulse">{p.name}</h3>
                <p className="mt-1 text-xs text-dim">{p.tagline}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
