import type { Metadata } from "next";
import { site } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
};

/** Builds consistent per-page metadata: canonical, OG, Twitter. */
export function pageMeta({ title, description, path, keywords, ogType = "website", noIndex }: PageMetaInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  // Authors write titles with or without the brand suffix; normalize so the
  // layout's "%s | iTechSmart" template never doubles it.
  const base = title.replace(/\s*\|\s*iTechSmart\s*$/i, "");
  const full = `${base} | iTechSmart`;
  const ogImage = { url: `${site.url}/opengraph-image`, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` };
  return {
    title: { absolute: full },
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: full,
      description,
      url,
      siteName: `${site.name} — UAIO`,
      type: ogType,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
      site: site.twitter,
      images: [ogImage.url],
    },
  };
}

/* ---------------- JSON-LD builders ---------------- */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo-dark.jpg`,
    description: site.description,
    foundingDate: "2021",
    slogan: "Stop Triaging. Start Executing.",
    areaServed: "US",
    founder: {
      "@type": "Person",
      name: "DJuane Jackson",
      jobTitle: "Founder & CEO",
      description: "24-year enterprise IT leader and U.S. Army veteran",
    },
    award: "F6S #6 Globally out of 2M+ AI startups",
    memberOf: { "@type": "Organization", name: "NVIDIA Inception Program" },
    identifier: [
      { "@type": "PropertyValue", name: "CAGE", value: "172W2" },
      { "@type": "PropertyValue", name: "UEI", value: "ZCPFX4N86G36" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1130 Ogletown Rd Ste #2",
      addressLocality: "Newark",
      addressRegion: "DE",
      postalCode: "19711",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@itechsmart.dev",
      telephone: "+1-877-516-4537",
      url: `${site.url}/contact`,
    },
    sameAs: [
      site.subdomains.verify,
      site.subdomains.mcp,
      "https://www.linkedin.com/company/itechsmart.dev",
      "https://x.com/itechsmartdev",
      "https://youtube.com/@itechsmart-inc",
      "https://www.instagram.com/itechsmartdev/",
      "https://www.facebook.com/p/Itechsmartdev-61578925821334/",
      "https://www.tiktok.com/@itechsmartdev",
      "https://www.crunchbase.com/organization/itechsmart-inc",
      "https://www.f6s.com/itechsmart-inc",
      "https://www.g2.com/products/itechsmart",
      "https://www.wikidata.org/wiki/Q139119831",
    ],
  };
}

export function softwareJsonLd(opts: { name: string; description: string; path: string; freeTier?: boolean }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Linux, Windows, Kubernetes",
    ...(opts.freeTier
      ? { offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available" } }
      : {}),
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(opts: { title: string; description: string; path: string; datePublished: string; dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, logo: { "@type": "ImageObject", url: `${site.url}/logo-dark.jpg` } },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

/** Serializes JSON-LD for a <script> tag. */
export function jsonLdScript(data: object | object[]) {
  return { __html: JSON.stringify(data) };
}
