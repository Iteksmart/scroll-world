import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, postBySlug } from "@/data/blog";
import { pageMeta, articleJsonLd, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/motion/reveal";
import { GridPattern } from "@/components/ui/grid-pattern";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogType: "article",
    keywords: post.tags,
  });
}

function fmtDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          articleJsonLd({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.date,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ])}
      />
      <article className="relative overflow-hidden pt-16">
        <GridPattern />
        <Container className="relative max-w-3xl py-16 sm:py-24">
          <Link href="/blog" className="group inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-bright">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
            All posts
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {post.tags.map((t) => (
              <Badge key={t} tone="proof">{t}</Badge>
            ))}
            <span className="font-mono text-xs text-dim">
              {fmtDate(post.date)} · {post.readMinutes} min read
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-bright sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-fog">{post.excerpt}</p>

          <div className="mt-14 space-y-10">
            {post.sections.map((section, i) => (
              <Reveal key={i} y={16}>
                <section>
                  {section.h2 && (
                    <h2 className="mb-5 font-display text-2xl font-medium tracking-tight text-bright sm:text-3xl">
                      {section.h2}
                    </h2>
                  )}
                  <div className="space-y-5">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="leading-relaxed text-mist/90">{p}</p>
                    ))}
                    {section.list && (
                      <ul className="space-y-3 pl-1">
                        {section.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 leading-relaxed text-mist/90">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-proof" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </article>
      <CtaBanner
        title="See the loop this post describes."
        lede="Free Pulse scan in 60 seconds — watch a real incident go from alert to Bitcoin-anchored receipt."
      />
    </>
  );
}
