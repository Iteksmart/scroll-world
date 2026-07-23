import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, productBySlug } from "@/data/products";
import { landings, landingBySlug } from "@/data/landings";
import { ProductTemplate } from "@/components/templates/product-template";
import { LandingTemplate } from "@/components/templates/landing-template";
import { pageMeta, softwareJsonLd, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...products.map((p) => ({ slug: p.slug })), ...landings.map((l) => ({ slug: l.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (product) {
    return pageMeta({
      title: `${product.name} — ${product.tagline} | iTechSmart`,
      description: product.summary,
      path: `/${product.slug}`,
      keywords: [product.name, "UAIO", "autonomous IT operations", product.tagline],
    });
  }
  const landing = landingBySlug(slug);
  if (landing) {
    return pageMeta({
      title: landing.metaTitle,
      description: landing.metaDescription,
      path: `/${landing.slug}`,
      keywords: landing.keywords,
    });
  }
  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = productBySlug(slug);
  if (product) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript([
            softwareJsonLd({ name: `iTechSmart ${product.name}`, description: product.summary, path: `/${product.slug}`, freeTier: product.free }),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Suite", path: "/suite" },
              { name: product.name, path: `/${product.slug}` },
            ]),
          ])}
        />
        <ProductTemplate product={product} />
      </>
    );
  }

  const landing = landingBySlug(slug);
  if (landing) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: landing.title, path: `/${landing.slug}` },
            ]),
          )}
        />
        <LandingTemplate page={landing} />
      </>
    );
  }

  notFound();
}
