import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compareBySlug, allCompareSlugs } from "@/data/compare";
import { CompareTemplate } from "@/components/templates/compare-template";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return allCompareSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = compareBySlug(slug);
  if (!page) return {};
  const isCanonical = page.slug === slug;
  return {
    ...pageMeta({ title: page.metaTitle, description: page.metaDescription, path: `/compare/${page.slug}` }),
    // Aliases canonicalize to the primary slug.
    ...(isCanonical ? {} : { alternates: { canonical: `https://itechsmart.dev/compare/${page.slug}` } }),
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = compareBySlug(slug);
  if (!page) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Compare", path: "/compare" },
            { name: page.competitor, path: `/compare/${page.slug}` },
          ]),
        )}
      />
      <CompareTemplate page={page} />
    </>
  );
}
