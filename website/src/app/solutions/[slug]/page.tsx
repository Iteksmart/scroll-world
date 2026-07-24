import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions, solutionBySlug } from "@/data/solutions";
import { SolutionTemplate } from "@/components/templates/solution-template";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.filter((s) => s.kind === "solutions").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionBySlug(slug, "solutions");
  if (!solution) return {};
  return pageMeta({
    title: solution.metaTitle,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionBySlug(slug, "solutions");
  if (!solution) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.name, path: `/solutions/${solution.slug}` },
          ]),
        )}
      />
      <SolutionTemplate solution={solution} />
    </>
  );
}
