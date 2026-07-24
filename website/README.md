# itechsmart.dev — redesigned marketing site

A ground-up redesign of every public page of [itechsmart.dev](https://itechsmart.dev), built for
conversion, SEO, and unseen.co-grade motion quality.

## Stack

- **Next.js 15** (App Router, fully static-prerendered)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css` (`@theme`)
- **Framer Motion 12** — masked text reveals, scroll-scrubbed loop, staggers, number tickers
- **Lenis** — inertial smooth scrolling
- **Geist Sans/Mono + Space Grotesk** — self-hosted via npm (no external font requests)

## Run it

```bash
cd website
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build
```

## Architecture

```
src/
├── app/                  # routes (App Router). ~140 static pages
│   ├── page.tsx          # home: scroll-scrubbed 10-step UAIO loop
│   ├── [slug]/           # products + SEO landing pages (data-driven)
│   ├── solutions/[slug]  # team playbooks     ├── industries/[slug]
│   ├── compare/[slug]    # honest comparisons ├── integrations/[slug]
│   ├── blog/[slug]       # pillar posts       ├── news/[slug], entities/[slug]
│   ├── sitemap.ts        # generated from all data files
│   ├── robots.ts, opengraph-image.tsx, icon.svg
│   └── …explicit pages (pricing, about, credibility, proof, mcp, roi, faq, contact…)
├── components/
│   ├── chrome/           # header (mega-menu) + footer
│   ├── home/             # hero, loop-scroller, bento, stats…
│   ├── motion/           # Reveal, TextReveal, Marquee, NumberTicker, Parallax, SmoothScroll
│   ├── templates/        # product / solution / compare / integration / landing / legal
│   └── ui/               # buttons, cards, badges, accordion, receipt-card…
├── data/                 # ALL site copy lives here — edit content without touching JSX
└── lib/                  # site config (nav/footer/CTAs), SEO helpers (meta + JSON-LD)
```

## Conversion & SEO layer

- Per-page `metadata` (canonical, OG, Twitter) via `lib/seo.ts`
- JSON-LD: Organization, SoftwareApplication, FAQPage, Article, BreadcrumbList
- `sitemap.xml` + `robots.txt` generated from the data layer
- CTAs standardized: Get started free → `/start`, Book demo → Calendly, See proof → verify.itechsmart.dev
- FAQPage schema on every page with an FAQ block

## Auth (Clerk)

Sign-in/sign-up live at `/auth/sign-in` and `/auth/sign-up`, powered by
[Clerk](https://clerk.com). Without Clerk env vars the site still builds and the
auth pages fall back to links to the hosted accounts portal — so the marketing
site never breaks on missing keys.

To activate, set in Vercel (or `.env.local`):

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_…
CLERK_SECRET_KEY=sk_live_…
```

Then in the Clerk dashboard → **SSO connections**, enable **Google** and
**Microsoft** — the `<SignIn/>` widget picks them up automatically (no code
changes). The widget is themed to the site in
`src/components/auth/auth-shell.tsx` (`clerkAppearance`), and
`clerkMiddleware` is scoped to `/auth/*` in `src/middleware.ts` so every
marketing page remains fully static.

## Wiring notes for production

- **Contact form** (`components/contact/contact-form.tsx`): ships with a `mailto:` fallback —
  point `handleSubmit` at the production form endpoint. TCPA/A2P SMS-consent copy is preserved
  verbatim; keep it that way for carrier compliance.
- **Proof ledger** (`components/proof/ledger-feed.tsx`): tries `api.itechsmart.dev/v1/ledger`
  client-side and falls back to an SSR snapshot.
- Redirects for legacy paths (`/home`, `/verify`, `/uaio-vs-aiops`, …) live in `next.config.ts`.
- Analytics (GTM/GA/Clerk) intentionally not bundled — add your existing tags in `app/layout.tsx`.
