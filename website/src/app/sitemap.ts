import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/data/products";
import { landings } from "@/data/landings";
import { solutions } from "@/data/solutions";
import { comparePages } from "@/data/compare";
import { integrations } from "@/data/integrations";
import { posts } from "@/data/blog";
import { news, entities } from "@/data/company";

const staticPaths = [
  "",
  "/about",
  "/pricing",
  "/contact",
  "/faq",
  "/credibility",
  "/start",
  "/suite",
  "/solutions",
  "/compare",
  "/integrations",
  "/blog",
  "/proof",
  "/mcp",
  "/roi",
  "/changelog",
  "/roadmap",
  "/news",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/pricing" || path === "/start" ? 0.9 : 0.7,
  }));

  for (const p of products) {
    entries.push({ url: `${site.url}/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const l of landings) {
    entries.push({ url: `${site.url}/${l.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const s of solutions) {
    entries.push({
      url: `${site.url}/${s.kind}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const c of comparePages) {
    entries.push({ url: `${site.url}/compare/${c.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  }
  for (const i of integrations) {
    entries.push({ url: `${site.url}/integrations/${i.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const post of posts) {
    entries.push({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }
  for (const n of news) {
    entries.push({ url: `${site.url}/news/${n.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.4 });
  }
  for (const e of entities) {
    entries.push({ url: `${site.url}/entities/${e.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.4 });
  }

  // De-dupe (a slug can exist both as a static path and a landing entry).
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
