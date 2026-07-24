/** Company/programs landing pages. Owned by the landings-company author. */
import type { LandingPage } from "./landings";

export const landingsCompany: LandingPage[] = [
  {
    slug: "consulting",
    metaTitle: "IT Consulting — Book a 20-Minute Demo | iTechSmart",
    metaDescription:
      "Enterprise IT consulting from operators who run 218 containers in production. UAIO readiness, MSP automation, federal pathways. Book a 20-minute demo.",
    keywords: ["enterprise IT consulting", "UAIO consulting", "IT operations advisory", "autonomous IT assessment"],
    eyebrow: "Consulting",
    title: "Consulting from operators, not slide decks.",
    lede: "The team that built UAIO — 24 years of Army ops, IRS-scale federal engineering, 26 years of security — applied to your environment. Twenty minutes to find out if it fits.",
    actions: [
      { label: "Book a 20-minute demo", href: "https://calendly.com/djuane-itechsmart/new-meeting" },
      { label: "Contact us", href: "/contact", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Who shows up",
        title: "We ran the infrastructure before we automated it",
        copy: "iTechSmart's consulting arm is staffed by the people who built the platform: a founder with 24 years of enterprise IT across healthcare, government, and defense; a CTO who led IRS-scale federal projects; a CSO with 26 years of Army security work and an active clearance. We consult the way we build — deterministic, evidence-first, and finished with a receipt.",
      },
      {
        type: "features",
        eyebrow: "Engagements",
        title: "Four ways we work with you",
        items: [
          { title: "UAIO readiness assessment", copy: "We run Pulse against one environment, map what UAIO would have automated last month, and hand you the findings with a ProofLink receipt. Evidence before commitment." },
          { title: "MSP automation rollout", copy: "Tenant isolation, staged autonomy, and playbook design for multi-client operators — from first scan to 87% autonomous-resolution target." },
          { title: "Healthcare integration", copy: "HL7/FHIR-aware deployment planning for environments where downtime has clinical consequences and every change needs an audit trail." },
          { title: "Federal & sovereign", copy: "SDVOSB-certified (CAGE 172W2 · UEI ZCPFX4N86G36) with Citadel for air-gapped estates. We know the paperwork because we live it." },
        ],
      },
      {
        type: "steps",
        eyebrow: "How an engagement runs",
        title: "Scan. Prove. Plan. Deploy.",
        items: [
          { title: "Scan", copy: "A free Pulse scan on one environment. Sixty seconds. No agent sprawl, no sales deck." },
          { title: "Prove", copy: "You get a live health report and a sealed ProofLink receipt showing exactly what UAIO would have fixed autonomously." },
          { title: "Plan", copy: "We design the rollout: which incidents go full-auto, which get human gates, and how Arbiter enforces the difference." },
          { title: "Deploy", copy: "Staged autonomy in production — manual, then approval-gated, then automatic — with 20-second self-healing where policy allows." },
        ],
      },
      {
        type: "stats",
        eyebrow: "What clients measure",
        title: "The outcomes we consult toward",
        items: [
          { value: "−86%", label: "MTTR reduction", note: "4.2 hours → 36 minutes" },
          { value: "87%", label: "Autonomous-resolution target", note: "Policy-gated, human-governed" },
          { value: "90%", label: "Alert deduplication", note: "Noise dies before it pages anyone" },
          { value: "42", label: "Platform modules", note: "One playbook system across all of them" },
        ],
      },
    ],
    ctaTitle: "Twenty minutes. Zero pitch.",
    ctaLede: "Book the demo, bring one ugly environment, and watch what UAIO would have automated last month.",
  },
  {
    slug: "affiliate",
    metaTitle: "Affiliate Program — 20% Recurring Revenue | iTechSmart",
    metaDescription:
      "Earn 20% recurring commission for 12 months referring the UAIO platform. Self-serve signup, 24-hour approval, monthly payouts. Apply in minutes.",
    keywords: ["affiliate program", "IT software referral program", "recurring commission", "UAIO affiliate"],
    eyebrow: "Affiliate Program",
    title: "Refer UAIO. Get paid every month.",
    lede: "20% recurring commission for 12 months on every customer you send. No technical lift, no minimum commitment — just a link, a dashboard, and monthly payouts.",
    actions: [
      { label: "Apply as an affiliate", href: "/contact" },
      { label: "Talk to partnerships", href: "https://calendly.com/djuane-itechsmart/new-meeting", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The easy sell",
        title: "You share a link. The product does the pitch.",
        copy: "Your referral runs a free Pulse scan and sees exactly what UAIO would have fixed in their environment — with a cryptographic receipt to prove it. No demo theater, no promises to defend. The evidence closes; you collect 20% of every renewal for a year.",
      },
      {
        type: "steps",
        eyebrow: "How it works",
        title: "Signup to payout in four moves",
        items: [
          { title: "Apply", copy: "Self-serve signup. Approved within 24 hours — no interviews, no quotas." },
          { title: "Share", copy: "You get a unique referral link and promo codes. Drop them in newsletters, videos, or client conversations." },
          { title: "Track", copy: "A real-time commission dashboard shows every click, signup, and conversion. No spreadsheet archaeology." },
          { title: "Get paid", copy: "Monthly automated payouts. 20% recurring commission for 12 months on every subscription you refer." },
        ],
      },
      {
        type: "stats",
        eyebrow: "The terms",
        title: "Simple math, on purpose",
        items: [
          { value: "20%", label: "Recurring commission", note: "Every renewal pays again" },
          { value: "12 mo", label: "Commission window", note: "Per referred customer" },
          { value: "24 hr", label: "Approval time", note: "Self-serve signup" },
          { value: "0", label: "Minimum commitment", note: "Refer one or one hundred" },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Fit check",
        title: "Built for people with an audience or a client list",
        lede: "If you advise IT buyers, this fits. If you have to fake enthusiasm, it will not.",
        good: [
          "Independent consultants and fractional CIOs",
          "IT advisors with clients drowning in alert noise",
          "Content creators and influencers covering infrastructure, DevOps, or security",
          "Anyone who would rather share proof than a pitch deck",
        ],
      },
    ],
    ctaTitle: "The link is free. The commissions are not hypothetical.",
    ctaLede: "Apply now — approval within 24 hours, first payout the month your referral converts.",
  },
  {
    slug: "investors",
    metaTitle: "Investors — Bootstrapped to Production | iTechSmart",
    metaDescription:
      "Bootstrapped to 121,400+ sealed receipts and F6S #6 of 2M+ AI startups. SDVOSB, NVIDIA Inception. Open to strategic conversations — book via Calendly.",
    keywords: ["iTechSmart investors", "UAIO category", "autonomous IT operations investment", "ProofLink"],
    eyebrow: "Investor brief",
    title: "Bootstrapped to production scale.",
    lede: "iTechSmart built the trust layer for autonomous AI — cryptographic evidence for every action software takes on infrastructure — without a dollar of venture capital. We are open to strategic conversations.",
    actions: [
      { label: "Book a conversation", href: "https://calendly.com/djuane-itechsmart/new-meeting" },
      { label: "Verify live receipts", href: "https://verify.itechsmart.dev", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The thesis",
        title: "AI is acting on infrastructure. Nobody can prove what it did.",
        copy: "Autonomous systems are already executing changes in production, but most organizations cannot independently verify what the AI did, why, or whether the record was altered afterward. ProofLink turns that gap into infrastructure: tamper-evident receipts for every autonomous action, chained, sealed, and publicly verifiable. UAIO — Unified Autonomous IT Operations — is the category we created around it: Detect → Decide → Do → Prove.",
      },
      {
        type: "stats",
        eyebrow: "Traction, not projections",
        title: "What we built before asking anyone for anything",
        items: [
          { value: "121,400+", label: "Receipts sealed", note: "90,000+ publicly verifiable" },
          { value: "−86%", label: "MTTR in pilots", note: "4.2 hours → 36 minutes" },
          { value: "#6", label: "F6S global rank", note: "Among 2M+ AI startups" },
          { value: "42", label: "Platform modules", note: "Running in production, not on a roadmap" },
        ],
      },
      {
        type: "features",
        eyebrow: "Why this compounds",
        title: "Category, moat, go-to-market, team",
        items: [
          { title: "Category", copy: "UAIO sits above AIOps: not alert-noise reduction, but governed autonomous execution with proof. We defined the category and hold the head terms." },
          { title: "Moat", copy: "ProofLink makes trust a technical artifact — receipt chain, verification API, evidence-first dashboards. Switching away means giving up your audit trail." },
          { title: "Go-to-market", copy: "SDVOSB positioning (CAGE 172W2), MSP white-label distribution, healthcare compliance workflows, and federal readiness via Citadel — focused wedges, not spray-and-pray." },
          { title: "Team", copy: "Founder with 24 years of enterprise IT and Army service. CTO from IRS-scale federal programs. CSO with 26 years of Army security. NVIDIA Inception member." },
        ],
      },
      {
        type: "quote",
        text: "Autonomous IT without proof creates a new audit gap.",
        attribution: "The one-line version of the thesis",
      },
    ],
    ctaTitle: "Diligence is easy when the ledger is public.",
    ctaLede: "Every traction claim on this page maps to a receipt at verify.itechsmart.dev. Book a conversation when you have checked.",
  },
  {
    slug: "partners",
    metaTitle: "Partner Program — White-Label UAIO for MSPs | iTechSmart",
    metaDescription:
      "White-label UAIO from $1,940/mo with 25 tenants and full resale rights on Pro. Tiers pay 20-40% recurring. Apply and get an answer in 24-48 hours.",
    keywords: ["MSP partner program", "white-label IT automation", "reseller program", "UAIO partner"],
    eyebrow: "Partner Program",
    title: "White-label UAIO. Keep the margin.",
    lede: "Built for how MSPs and consultants actually sell: recurring revenue, 90-day protected deals, and a free Pulse scanner that does the prospecting for you.",
    actions: [
      { label: "Apply now", href: "/contact" },
      { label: "Talk to partnerships", href: "https://calendly.com/djuane-itechsmart/new-meeting", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The wedge",
        title: "Pulse opens the door. Proof closes it.",
        copy: "Free Pulse scanner is the wedge. ProofLink is the proof. UAIO is the close. Your prospect runs one 60-second scan, sees what would have been fixed autonomously last month, and gets a cryptographic receipt they can verify themselves. You never argue with a skeptic again — you hand them the ledger.",
      },
      {
        type: "features",
        eyebrow: "Four ways in",
        title: "Pick the tier that matches how you sell",
        items: [
          { title: "Referral — 20% recurring", copy: "Refer customers, earn for 12 months. Self-serve signup, 24-hour approval, no technical lift, no minimum commitment." },
          { title: "White label — from $1,940/mo", copy: "UAIO under your brand: Starter covers 25 isolated client tenants; the Pro tier adds unlimited tenants and full resale rights. Your logo, your invoice, our loop underneath." },
          { title: "Reseller — 30% recurring margin", copy: "90-day deal registration protection, co-branded collateral, free Pro demo accounts, technical certification, and inbound lead routing." },
          { title: "Strategic Alliance — 40% + MDF", copy: "For tier-1 primes and large vendors: market development funds, joint go-to-market, SDVOSB teaming agreements, and federal subcontracting paths." },
        ],
      },
      {
        type: "stats",
        eyebrow: "The terms",
        title: "Numbers you can build a P&L on",
        items: [
          { value: "20–40%", label: "Recurring revenue share", note: "Every renewal pays again" },
          { value: "$1,940/mo", label: "White-label entry", note: "25 tenants · Pro adds unlimited + resale rights" },
          { value: "90 days", label: "Deal registration protection", note: "Your deal is your deal" },
          { value: "5%", label: "SDVOSB subcontracting goal we satisfy", note: "CAGE 172W2 · UEI ZCPFX4N86G36" },
        ],
      },
      {
        type: "steps",
        eyebrow: "Application to first sale",
        title: "Days, not quarters",
        items: [
          { title: "Apply", copy: "Submit the application. We respond within 24–48 hours — no committee, no bureaucracy." },
          { title: "Onboard", copy: "Sign the agreement, get portal access, schedule the kickoff call." },
          { title: "Enable", copy: "Sales training, technical certification, and co-branded marketing materials." },
          { title: "Sell", copy: "Register deals, run Pulse-led demos, close customers, collect recurring revenue." },
        ],
      },
    ],
    ctaTitle: "Your brand on the front. Our receipts underneath.",
    ctaLede: "Apply now and get an answer within 24–48 hours. The Pulse scanner starts selling for you the same week.",
  },
  {
    slug: "media-kit",
    metaTitle: "Media Kit — Logos, Bios, Boilerplate | iTechSmart",
    metaDescription:
      "Logos, founder bios, boilerplate, and proof links for covering iTechSmart — the UAIO category creator, F6S #6 of 2M+. Contact press for interviews.",
    keywords: ["iTechSmart media kit", "press kit", "DJuane Jackson bio", "UAIO press"],
    eyebrow: "Press & Media",
    title: "Everything you need to cover iTechSmart.",
    lede: "Logos, founder bios, company boilerplate, and proof links — plus a claim policy most companies cannot offer: every number we give you is independently verifiable.",
    actions: [
      { label: "Contact press", href: "mailto:press@itechsmart.dev" },
      { label: "Book an interview", href: "https://calendly.com/djuane-itechsmart/new-meeting", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "In the kit",
        title: "Assets that survive a fact-check",
        copy: "High-resolution logos (PNG/SVG), leadership headshots, brand guidelines, the media contact sheet, and the full press kit ZIP. Plus the part journalists actually need: proof links. Every claim about receipts, MTTR, or platform scale traces to the public ledger at verify.itechsmart.dev — cite it, link it, verify it yourself.",
      },
      {
        type: "features",
        eyebrow: "Founder bios",
        title: "The operators behind the platform",
        items: [
          { title: "DJuane Jackson — Founder & CEO", copy: "24-year U.S. Army veteran who invented UAIO. Built enterprise IT for healthcare, government, and defense before building the platform to automate it. Speaks on autonomous IT, AI accountability, and veteran entrepreneurship." },
          { title: "Hamda Awan — Co-Founder & CMO", copy: "10+ years across technology, healthcare, and federal programs. Translates infrastructure capability into language decision-makers actually understand." },
          { title: "Fawad Zulfiqar — CTO", copy: "15+ years leading enterprise IT, cloud, and DevOps, including IRS-scale federal projects. The engineering mind behind the 42-module platform." },
          { title: "Morris Lionel — CSO", copy: "26 years across U.S. Army tactical, security, and operational domains, with active clearance. Leads security architecture and the Citadel government line." },
        ],
      },
      {
        type: "stats",
        eyebrow: "Numbers for your nut graf",
        title: "Facts, pre-verified",
        items: [
          { value: "211+", label: "Press outlets", note: "Including Yahoo Finance and PR Newswire" },
          { value: "#6", label: "F6S global rank", note: "Among 2M+ AI startups" },
          { value: "121,400+", label: "Receipts sealed", note: "90,000+ publicly verifiable" },
          { value: "2021", label: "Founded", note: "Incorporated 2025 · SDVOSB" },
        ],
      },
      {
        type: "intro",
        eyebrow: "Boilerplate",
        title: "Copy, paste, publish",
        copy: "iTechSmart Inc. is a Service-Disabled Veteran-Owned Small Business (SDVOSB) headquartered in Newark, Delaware, and creator of UAIO — Unified Autonomous IT Operations. The platform detects IT issues, remediates them autonomously, and generates cryptographic proof of every action via ProofLink, publicly verifiable at verify.itechsmart.dev. CAGE Code: 172W2 · UEI: ZCPFX4N86G36 · itechsmart.dev. Press: press@itechsmart.dev · (706) 250-1690. Response within 24 hours on business days; for urgent requests, call.",
      },
    ],
    ctaTitle: "Need a quote, a headshot, or a hard number?",
    ctaLede: "Email press@itechsmart.dev — response within one business day. Every stat we send comes with a verification link.",
  },
  {
    slug: "pitch-deck",
    metaTitle: "Pitch Deck — The UAIO One-Pager | iTechSmart",
    metaDescription:
      "The iTechSmart investor one-pager: UAIO category thesis, 121,400+ sealed receipts, MTTR cut 86%, veteran-led team. Read it, then verify every claim.",
    keywords: ["iTechSmart pitch deck", "UAIO one-pager", "investor narrative", "ProofLink investment"],
    eyebrow: "The one-pager",
    title: "The pitch, in one scroll.",
    lede: "No 40-slide deck. The whole narrative fits on a page — because every claim links to a public ledger instead of an appendix.",
    actions: [
      { label: "Book a conversation", href: "https://calendly.com/djuane-itechsmart/new-meeting" },
      { label: "Verify the claims", href: "https://verify.itechsmart.dev", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Slide zero",
        title: "AI now acts on production infrastructure. Proof did not keep up.",
        copy: "Enterprises are letting software execute changes on live systems, but the evidence layer is still logs — editable, disputable, unverifiable. iTechSmart built the missing layer: ProofLink seals a tamper-evident cryptographic receipt for every autonomous action, and the UAIO platform wraps it in a governed loop — Detect → Decide → Do → Prove.",
      },
      {
        type: "steps",
        eyebrow: "The narrative",
        title: "Five beats, no filler",
        items: [
          { title: "Problem", copy: "Autonomous IT without proof creates a new audit gap. Monitoring watches, AIOps recommends, and nobody can prove what actually happened." },
          { title: "Solution", copy: "One platform detects incidents, simulates fixes in a Digital Twin at 98% blast-radius accuracy, executes under Arbiter governance, and seals a ProofLink receipt." },
          { title: "Category", copy: "UAIO — a category we created and named. Not better alerting; governed autonomous execution with cryptographic evidence as the output." },
          { title: "Traction", copy: "Bootstrapped to production scale: 121,400+ receipts sealed, MTTR down 86% in pilots, ranked #6 of 2M+ AI startups on F6S, NVIDIA Inception member." },
          { title: "Team", copy: "Veteran-led (SDVOSB): a founder with 24 years of enterprise IT and Army service, a CTO from IRS-scale federal programs, a CSO with 26 years of Army security." },
        ],
      },
      {
        type: "stats",
        eyebrow: "The traction slide",
        title: "Built first. Pitched second.",
        items: [
          { value: "121,400+", label: "Receipts sealed", note: "90,000+ publicly verifiable" },
          { value: "−86%", label: "MTTR in pilots", note: "4.2 hours → 36 minutes" },
          { value: "#6", label: "F6S global rank", note: "Among 2M+ AI startups" },
          { value: "20 sec", label: "Self-healing loop", note: "Detection to verified fix" },
        ],
      },
      {
        type: "quote",
        text: "Don't trust us. Verify us.",
        attribution: "The whole pitch, in four words",
      },
    ],
    ctaTitle: "Diligence starts at the ledger.",
    ctaLede: "Check the receipts at verify.itechsmart.dev, then book 20 minutes on Calendly. We will skip the parts you already verified.",
  },
  {
    slug: "press-release",
    metaTitle: "Press Release — UAIO Platform Launch | iTechSmart",
    metaDescription:
      "August 2025, Nashville: veteran-founded iTechSmart launches the first UAIO platform and ranks #6 of 2M+ AI startups on F6S. Read the announcement.",
    keywords: ["iTechSmart press release", "UAIO launch", "autonomous IT operations announcement", "SDVOSB AI startup"],
    eyebrow: "Press Release · August 2025",
    title: "Veteran-founded iTechSmart launches the world's first UAIO platform.",
    lede: "NEWARK, Del. — iTechSmart Inc. announces Unified Autonomous IT Operations: a platform that detects IT incidents, fixes them autonomously, and cryptographically proves every action.",
    actions: [
      { label: "Contact press", href: "mailto:press@itechsmart.dev" },
      { label: "Get the media kit", href: "/media-kit", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The announcement",
        title: "A new category, launched on stage in Nashville",
        copy: "iTechSmart went public at Big Brand Ventures LIVE in Nashville in August 2025, unveiling UAIO — Unified Autonomous IT Operations — and coining the category outright. The platform replaces the fragmented stack of monitoring tools, ticketing systems, and AIOps with a single autonomous loop: Detect → Decide → Do → Prove. Every automated action produces a SHA-256 ProofLink receipt that anyone can verify independently at verify.itechsmart.dev. The announcement was distributed to 211+ press outlets, including Yahoo Finance and PR Newswire.",
      },
      {
        type: "quote",
        text: "Logs can be edited. Receipts are cryptographically verifiable. Every AI action needs a ProofLink.",
        attribution: "DJuane Jackson, Founder & CEO, iTechSmart Inc.",
      },
      {
        type: "stats",
        eyebrow: "By the numbers",
        title: "The launch, quantified",
        items: [
          { value: "#6", label: "F6S global rank", note: "Among 2M+ AI startups" },
          { value: "211+", label: "Press outlets", note: "Wire distribution via PR Newswire" },
          { value: "65", label: "Live services at launch", note: "Production milestone, not a demo" },
          { value: "Aug 2025", label: "Public launch", note: "Big Brand Ventures LIVE, Nashville" },
        ],
      },
      {
        type: "intro",
        eyebrow: "About iTechSmart Inc.",
        title: "Boilerplate",
        copy: "iTechSmart Inc. is a Service-Disabled Veteran-Owned Small Business (SDVOSB) headquartered in Newark, Delaware. Founded in 2021 and incorporated in 2025, the company created the UAIO category and is a member of the NVIDIA Inception program. CAGE Code: 172W2 · UEI: ZCPFX4N86G36. Press inquiries: press@itechsmart.dev · (706) 250-1690.",
      },
    ],
    ctaTitle: "Covering the story?",
    ctaLede: "The media kit has logos, bios, and pre-verified numbers. Every claim in this release traces to a public receipt.",
  },
  {
    slug: "pipeline",
    metaTitle: "Build Pipeline — 42 Modules, Built Live | iTechSmart",
    metaDescription:
      "42 modules, 218 containers, 93 databases — built in public with a receipt for every deploy. Inspect the live build pipeline and verify it yourself.",
    keywords: ["build in public", "live build pipeline", "engineering transparency", "iTechSmart pipeline"],
    eyebrow: "Build transparency",
    title: "We build in public. The pipeline is the proof.",
    lede: "A platform that seals a receipt for every customer fix should do the same for its own builds. It does. Here is the pipeline, live.",
    actions: [
      { label: "See the changelog", href: "/changelog" },
      { label: "Verify a receipt", href: "https://verify.itechsmart.dev", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Why show this",
        title: "Vendors describe roadmaps. We show deployments.",
        copy: "Most platforms ask you to believe the product is being built. Ours runs the same loop on itself that it runs on your infrastructure: every module ships through detection, simulation, governed execution, and a sealed receipt. If we quietly broke something, the chain would show it. That is the point.",
      },
      {
        type: "steps",
        eyebrow: "How a module ships",
        title: "The loop, turned inward",
        items: [
          { title: "Detect", copy: "Pipeline monitoring catches regressions and drift the same way Pulse catches infrastructure incidents — deterministically." },
          { title: "Decide", copy: "Changes route through the same policy gates customers get: staged rollout, blast-radius checks, human approval where it matters." },
          { title: "Do", copy: "Deploys execute across 218 production containers and 93 databases — the estate we sell is the estate we run." },
          { title: "Prove", copy: "Every outcome-bearing action seals a ProofLink receipt onto the public chain. Our own builds are part of the 121,400+." },
        ],
      },
      {
        type: "stats",
        eyebrow: "The estate",
        title: "What the pipeline maintains",
        items: [
          { value: "42", label: "Platform modules", note: "Shipped and running, not planned" },
          { value: "218", label: "Production containers", note: "With 93 databases behind them" },
          { value: "133", label: "SSL-secured subdomains", note: "Every service, every cert" },
          { value: "66", label: "MCP tools", note: "Live at mcp.itechsmart.dev" },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Inspect it yourself",
        title: "Four windows into the build",
        lede: "Transparency you can click, not a blog post about values.",
        good: [
          "Changelog — every shipped change, dated, at /changelog",
          "Roadmap — what is next and what got cut, at /roadmap",
          "Receipt ledger — 90,000+ publicly verifiable receipts at verify.itechsmart.dev",
          "MCP surface — all 66 tools, callable today, at mcp.itechsmart.dev",
        ],
      },
    ],
    ctaTitle: "Watch a build become a receipt.",
    ctaLede: "Start with the changelog, end at the ledger. If the two ever disagree, you will be the first to know — that is the design.",
  },
  {
    slug: "metrics",
    metaTitle: "Live Platform Metrics — 121,400+ Receipts | iTechSmart",
    metaDescription:
      "Live platform metrics: 121,400+ receipts sealed, MTTR down 86% to 36 minutes, 218 containers in production. Verify every number independently.",
    keywords: ["platform metrics", "verifiable metrics", "ProofLink receipts", "autonomous IT statistics"],
    eyebrow: "Live metrics",
    title: "The numbers, with receipts behind them.",
    lede: "Every figure on this page maps to a cryptographic receipt you can pull and check yourself. No dashboards to take on faith.",
    actions: [
      { label: "Verify a receipt", href: "https://verify.itechsmart.dev" },
      { label: "Run a free Pulse scan", href: "/pulse", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "How to read this page",
        title: "Events are noise. Receipts are evidence.",
        copy: "The platform generates thousands of internal events — health polls, classifications, automation steps. Only outcome-bearing actions become public ProofLink receipts: a remediation, a fix, a diagnosis, a verified health check. Each receipt carries a SHA-256 hash chained to the previous one, so altering any past receipt breaks every hash after it. The chain is continuously checked — zero breaks across the full ledger.",
      },
      {
        type: "stats",
        eyebrow: "The ledger",
        title: "Platform metrics, sealed",
        items: [
          { value: "121,400+", label: "Receipts sealed", note: "90,000+ publicly verifiable" },
          { value: "−86%", label: "MTTR reduction", note: "4.2 hours → 36 minutes" },
          { value: "87%", label: "Autonomous-resolution target", note: "Policy-gated, human-governed" },
          { value: "210", label: "Production containers", note: "The estate we sell is the estate we run" },
          { value: "93", label: "Databases", note: "In production, receipted" },
          { value: "133", label: "SSL-secured subdomains", note: "Every service, every cert" },
        ],
      },
      {
        type: "features",
        eyebrow: "Why you can trust them",
        title: "Three layers of independent verification",
        items: [
          { title: "Hash-chained ledger", copy: "Receipts are SHA-256 hashed and chained. Tampering with one breaks every hash after it — the ledger is tamper-evident by construction." },
          { title: "Bitcoin timestamping", copy: "Public receipts are submitted to OpenTimestamps for decentralized Bitcoin anchoring — vendor-neutral proof of when each action occurred, independent of iTechSmart." },
          { title: "Public verification", copy: "Pull any receipt at verify.itechsmart.dev and check it yourself. No account, no NDA, no trust required." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Pick a number. Pull the receipt.",
    ctaLede: "Verify any figure on this page at verify.itechsmart.dev — then run a free Pulse scan to start a ledger of your own.",
  },
];
