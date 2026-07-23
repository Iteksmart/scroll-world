import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { CtaBanner } from "@/components/ui/cta-banner";
import { entities } from "@/data/company";

export const dynamicParams = false;

export function generateStaticParams() {
  return entities.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entity = entities.find((e) => e.slug === slug);
  if (!entity) return {};
  return pageMeta({
    title: `${entity.name} — Definition & Details | iTechSmart`,
    description: entity.definition,
    path: `/entities/${entity.slug}`,
  });
}

export default async function EntityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entity = entities.find((e) => e.slug === slug);
  if (!entity) notFound();
  const others = entities.filter((e) => e.slug !== entity.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: entity.name, path: `/entities/${entity.slug}` },
          ]),
        )}
      />
      <PageHero eyebrow="Glossary" title={entity.name} lede={entity.definition} />
      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <ul className="space-y-4">
              {entity.details.map((d, i) => (
                <li key={i} className="flex items-start gap-3 leading-relaxed text-mist/90">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-proof" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-wrap gap-2">
              {others.map((e) => (
                <Link
                  key={e.slug}
                  href={`/entities/${e.slug}`}
                  className="rounded-full border hairline bg-card/60 px-4 py-2 font-mono text-xs text-fog transition-colors hover:border-proof/40 hover:text-proof"
                >
                  {e.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
