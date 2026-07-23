import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions, solutionBySlug } from "@/data/solutions";
import { SolutionTemplate } from "@/components/templates/solution-template";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.filter((s) => s.kind === "industries").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionBySlug(slug, "industries");
  if (!solution) return {};
  return pageMeta({
    title: solution.metaTitle,
    description: solution.metaDescription,
    path: `/industries/${solution.slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionBySlug(slug, "industries");
  if (!solution) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/solutions" },
            { name: solution.name, path: `/industries/${solution.slug}` },
          ]),
        )}
      />
      <SolutionTemplate solution={solution} />
    </>
  );
}
