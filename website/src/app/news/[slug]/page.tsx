import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { pageMeta, articleJsonLd, jsonLdScript } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { CtaBanner } from "@/components/ui/cta-banner";
import { news } from "@/data/company";

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return {};
  return pageMeta({ title: `${item.title} | iTechSmart`, description: item.summary, path: `/news/${item.slug}`, ogType: "article" });
}

export default async function NewsItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleJsonLd({ title: item.title, description: item.summary, path: `/news/${item.slug}`, datePublished: item.date }),
        )}
      />
      <article className="relative overflow-hidden pt-16">
        <GridPattern />
        <Container className="relative max-w-3xl py-16 sm:py-24">
          <Link href="/news" className="group inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-bright">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
            All news
          </Link>
          <p className="mt-8 font-mono text-xs text-dim">{item.date}</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-[1.08] tracking-tight text-bright sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-fog">{item.summary}</p>
          <div className="mt-10 space-y-5">
            {item.body.map((p, i) => (
              <p key={i} className="leading-relaxed text-mist/90">{p}</p>
            ))}
          </div>
        </Container>
      </article>
      <CtaBanner />
    </>
  );
}
