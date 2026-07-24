import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { LandingBlocks } from "./landing-blocks";
import type { LandingPage, Block } from "@/data/landings";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export function LandingTemplate({ page }: { page: LandingPage }) {
  const faqBlocks = page.blocks.filter((b): b is Extract<Block, { type: "faq" }> => b.type === "faq");
  return (
    <>
      {faqBlocks.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqBlocks.flatMap((b) => b.items)))}
        />
      )}
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lede={page.lede}
        actions={page.actions ?? [{ label: "Get started free", href: "/start" }]}
      />
      <LandingBlocks blocks={page.blocks} />
      <CtaBanner title={page.ctaTitle} lede={page.ctaLede} />
    </>
  );
}
