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
    ];
  },
};

export default nextConfig;
