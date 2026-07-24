import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/verify", destination: "https://verify.itechsmart.dev", permanent: false },
      { source: "/shield/welcome", destination: "/shield", permanent: true },
      { source: "/suite/core", destination: "/suite", permanent: true },
      { source: "/uaio-vs-aiops", destination: "/compare/uaio-vs-aiops", permanent: true },
      { source: "/prooflink/eu-ai-act-article-12", destination: "/prooflink-article-12", permanent: true },
      { source: "/media-kit/download", destination: "/media-kit", permanent: true },
      { source: "/case-studies/msp-uaio-transformation", destination: "/solutions/msp", permanent: true },
      { source: "/blog/5-requirements-uaio", destination: "/blog/what-is-uaio", permanent: true },
      { source: "/blog/how-to-go-viral-autonomous-it-2026", destination: "/blog", permanent: true },
      { source: "/news/itechsmart-defines-uaio-category", destination: "/news", permanent: true },
      { source: "/user-dashboard", destination: "https://accounts.itechsmart.dev", permanent: false },
    ];
  },
};

export default nextConfig;
