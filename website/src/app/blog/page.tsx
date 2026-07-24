import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/ui/cta-banner";
import { sortedPosts } from "@/data/blog";

export const metadata: Metadata = pageMeta({
  title: "Blog — Field Notes from Autonomous IT Operations | iTechSmart",
  description:
    "UAIO explainers, ProofLink deep-dives, MTTR math, compliance automation, and field notes from running autonomous IT operations in production.",
  path: "/blog",
});

function fmtDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndex() {
  const posts = sortedPosts();
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="The blog"
        title="Field notes from the loop."
        lede="What we learn running autonomous operations in production — the math, the receipts, the occasional 3am story that no longer involves a human."
      />
      <Section>
        <Container>
          {lead && (
            <Link
              href={`/blog/${lead.slug}`}
              className="group block rounded-2xl border hairline bg-card/60 p-8 transition-all duration-300 hover:border-proof/30 hover:bg-card sm:p-12"
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="proof">Featured</Badge>
                <span className="font-mono text-xs text-dim">{fmtDate(lead.date)} · {lead.readMinutes} min</span>
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-tight text-bright group-hover:text-proof sm:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-fog">{lead.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-pulse">
                Read it
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          )}

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border hairline bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pulse/30 hover:bg-card"
                >
                  <span className="font-mono text-xs text-dim">{fmtDate(post.date)} · {post.readMinutes} min</span>
                  <h2 className="mt-3 font-display text-lg font-medium leading-snug text-bright group-hover:text-pulse">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog line-clamp-3">{post.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((t) => (
                      <Badge key={t} className="text-[9px]">{t}</Badge>
                    ))}
                  </div>
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
