import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

import { site } from "@/lib/site";
import { organizationJsonLd, jsonLdScript } from "@/lib/seo";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { Header } from "@/components/chrome/header";
import { Footer } from "@/components/chrome/footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "iTechSmart — Autonomous IT Operations with Cryptographic Proof",
    template: "%s | iTechSmart",
  },
  description: site.description,
  applicationName: "iTechSmart UAIO",
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: false },
  openGraph: {
    siteName: `${site.name} — UAIO`,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const page = (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-mist antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd())} />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-proof px-5 py-2.5 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );

  // Clerk wraps the app only when keys exist, so the site still builds and
  // runs (marketing-only) without any auth configuration.
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) return page;
  return (
    <ClerkProvider
      signInUrl="/auth/sign-in"
      signUpUrl="/auth/sign-up"
      afterSignOutUrl="/"
    >
      {page}
    </ClerkProvider>
  );
}
