import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI crawlers explicitly welcomed — structured context lives at /llms.txt,
// /llms-full.txt, and /ai-context.md.
const aiBots = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Google-Extended",
  "PerplexityBot",
  "Meta-ExternalAgent",
  "CCBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: ["/", "/llms.txt", "/llms-full.txt", "/ai-context.md"],
        disallow: ["/api/", "/_next/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
