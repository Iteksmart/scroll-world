/**
 * SEO landing pages served at top-level slugs (e.g. /autonomous-it-operations).
 * Each page is a hero + a sequence of typed content blocks rendered by
 * `LandingTemplate` — constrained enough to stay on-brand, expressive enough
 * to make every page feel authored.
 */

export type Block =
  | { type: "intro"; eyebrow?: string; title: string; copy: string }
  | { type: "features"; eyebrow?: string; title: string; lede?: string; items: { title: string; copy: string }[] }
  | { type: "checklist"; eyebrow?: string; title: string; lede?: string; good: string[]; bad?: string[] }
  | { type: "stats"; eyebrow?: string; title: string; items: { value: string; label: string; note?: string }[] }
  | { type: "steps"; eyebrow?: string; title: string; lede?: string; items: { title: string; copy: string }[] }
  | { type: "faq"; eyebrow?: string; title: string; items: { q: string; a: string }[] }
  | { type: "quote"; text: string; attribution: string }
  | { type: "receipt" };

export type LandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  eyebrow?: string;
  title: string;
  lede?: string;
  actions?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  blocks: Block[];
  ctaTitle?: string;
  ctaLede?: string;
};

import { landingsCore } from "./landings-core";
import { landingsCompliance } from "./landings-compliance";
import { landingsCompany } from "./landings-company";
import { landingsExtra } from "./landings-extra";
import { landingsPillars } from "./landings-pillars";

export const landings: LandingPage[] = [...landingsCore, ...landingsCompliance, ...landingsCompany, ...landingsExtra, ...landingsPillars];

export const landingBySlug = (slug: string) => landings.find((l) => l.slug === slug);

