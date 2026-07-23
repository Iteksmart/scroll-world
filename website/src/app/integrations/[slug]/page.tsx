import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { integrations, integrationBySlug } from "@/data/integrations";
import { IntegrationTemplate } from "@/components/templates/integration-template";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const integration = integrationBySlug(slug);
  if (!integration) return {};
  return pageMeta({
    title: integration.metaTitle,
    description: integration.metaDescription,
    path: `/integrations/${integration.slug}`,
  });
}

export default async function IntegrationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const integration = integrationBySlug(slug);
  if (!integration) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Integrations", path: "/integrations" },
            { name: integration.name, path: `/integrations/${integration.slug}` },
          ]),
        )}
      />
      <IntegrationTemplate integration={integration} />
    </>
  );
}
