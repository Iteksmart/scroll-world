export type ChangelogEntry = { version: string; date: string; title: string; items: string[] };

export const changelog: ChangelogEntry[] = [
  {
    version: "v5.5.0",
    date: "July 8, 2026",
    title: "GOLD design system · Free-first model stack · Autonomy restored",
    items: [
      "Platform-wide design pass: single-accent system, keyboard focus rings, reduced-motion accessibility.",
      "Every AI tool now defaults to a free, self-hosted model stack (Nemotron, Qwen, DeepSeek) with premium models opt-in — benchmarks show the free stack scoring 9–10 on coding, writing, and reasoning, with no per-token cost for standard operation.",
      "Closed-loop autonomous remediation verified working end-to-end again — detect → simulate → decide → execute → prove — with real sealed receipts and a truthful resolve-or-escalate incident backlog.",
      "Learning loop resumed: remediation patterns flowing into governed, human-approved memory (Beta).",
      "Public receipt floor now 90,000+ across every property; the live ledger is past 96,000.",
    ],
  },
  {
    version: "v5.4.0",
    date: "July 3, 2026",
    title: "The AI Accountability Layer · Five Powers · Verifier SDK v2.0.0",
    items: [
      "ProofLink repositioned as the Trust & Accountability Layer for autonomous AI — model-agnostic (Claude, ChatGPT, Gemini, Copilot), with the receipt anatomy and nine accountability questions published.",
      "Five Powers canonical construct: DECIDE (OctoAI + Arbiter) → SIMULATE (Digital Twin) → EXECUTE (UAIO) → PROVE (ProofLink) → LEARN (Hermes skills + governed learning queue).",
      "@itechsmart/prooflink-verifier v2.0.0 on npm — the npx CLI performs full cryptographic verification: SHA-256 hash integrity, canonical re-derivation, Ed25519 signature.",
      "Competitive comparison published: runtime interceptors and governance dashboards vs closed-loop production accountability.",
    ],
  },
  {
    version: "v5.3.0",
    date: "June 23, 2026",
    title: "ProofLink featured-product launch · Homepage redesign",
    items: [
      "ProofLink designated Featured Product with a live receipt counter and rotating hash display — pain hook: 'Your infrastructure is fixing itself. But can you prove it?'",
      "OctoAI featured card with 7-layer animated engine view: Signal Cortex → Context Cortex → Reasoning Cortex → The Arbiter → Execution Layer → ProofLink Seal → Learn Loop.",
      "90,000+ receipt count synchronized site-wide; H1 SEO crawler bug fixed.",
    ],
  },
  {
    version: "v5.2.0",
    date: "June 17, 2026",
    title: "Platform visibility · Agent memory · Security dashboard",
    items: [
      "65 pages updated with unique descriptions and structured data — buyers searching 'autonomous IT operations' on Google, ChatGPT, or Perplexity now find iTechSmart; 70+ blog posts newly indexed.",
      "Agents retain organizational memory across sessions.",
      "Ledger uptime accurately reflects 22+ continuous days of autonomous operation since May 26, 2026.",
      "Dedicated authenticated security dashboard: compliance posture, firewall status, active policies. All 11 public subdomains verified green — zero downtime across 210+ containers.",
    ],
  },
  {
    version: "v5.1.0",
    date: "June 11, 2026",
    title: "Self-healing platform · Agent coalition · Persistent memory",
    items: [
      "The platform heals itself: 7 services diagnosed and repaired on day one — zero humans involved, every action receipted.",
      "98 specialized agents coordinate as a team: web research, security scanning, compliance checking, code generation, incident response.",
      "Full platform command center at mission.itechsmart.dev — agents, actions, receipts, and approvals in one view.",
      "90,000+ ProofLink receipts sealed — SHA-256 hash-chained and OpenTimestamps-sealed. SOC 2 Type II audit in progress.",
    ],
  },
  {
    version: "v5.0.0",
    date: "June 10, 2026",
    title: "First fully autonomous incident · Safety rails · SDK launch",
    items: [
      "The kill switch was flipped: first fully autonomous incident resolved in 130 seconds — no ticket, no page, cryptographic proof sealed immediately after.",
      "Every autonomous action snapshots system state before executing, with auto-rollback if health degrades.",
      "MTTR reduced from 4.2 hours to 36 minutes (86%) — verified across 90,000+ sealed receipts.",
      "AI cost guardrails: max 3 cycles per incident, $0.50 cap, automatic human escalation on low confidence.",
      "Causal root-cause engine over a 19-node dependency graph. Python and TypeScript SDKs published: seal_action() and verify_receipt().",
    ],
  },
];

export type RoadmapItem = { quarter: string; title: string; copy: string; status: "shipped" | "building" | "planned" };

export const roadmap: RoadmapItem[] = [
  {
    quarter: "2026 · shipped",
    title: "Closed-loop autonomy in production",
    copy: "Detect, Simulate, and Prove at 100%; Decide at 95%; Execute at 85%; Learn in governed beta. First fully autonomous incident resolved in 130 seconds, receipts past 96,000.",
    status: "shipped",
  },
  {
    quarter: "2026 · shipped",
    title: "Verifier SDK & the accountability layer",
    copy: "@itechsmart/prooflink-verifier v2.0.0 on npm — independent cryptographic verification of any receipt: hash integrity, canonical re-derivation, Ed25519 signature.",
    status: "shipped",
  },
  {
    quarter: "Q2 2026",
    title: "SwarmOps AI",
    copy: "Coordinate 1,000+ AI agents across global infrastructure: autonomous incident management targeting a 99.5% success rate, cross-site resource optimization, predictive capacity planning at 97% accuracy.",
    status: "building",
  },
  {
    quarter: "Q4 2026",
    title: "Robotics fleet deployment",
    copy: "Cognitive robots in production across customer sites: autonomous hardware replacement, environmental monitoring across millions of square feet of data-center space, predictive maintenance preventing physical failures before they happen.",
    status: "planned",
  },
  {
    quarter: "2026–2027",
    title: "Hybrid cloud & data-center resilience",
    copy: "Mesh intelligence targeting 99.999% availability, blockchain-verified data integrity at 100PB+ scale, quantum-resistant encryption, and sub-100ms autonomous failover across global infrastructure.",
    status: "planned",
  },
  {
    quarter: "2027–2030",
    title: "The autonomous IT ecosystem",
    copy: "95% of IT operations fully autonomous; self-healing infrastructure preventing 99.8% of potential issues; a global mesh of AI nodes with collective learning across deployments worldwide.",
    status: "planned",
  },
];

export type NewsItem = { slug: string; date: string; title: string; summary: string; body: string[] };

export const news: NewsItem[] = [
  {
    slug: "company-overview",
    date: "April 2026",
    title: "Company overview: the world's first UAIO platform",
    summary:
      "iTechSmart Inc. is a Service-Disabled Veteran-Owned Small Business building Unified Autonomous IT Operations — autonomous detection, remediation, and cryptographic proof of every IT action.",
    body: [
      "iTechSmart Inc. is a Service-Disabled Veteran-Owned Small Business (SDVOSB) headquartered in Newark, Delaware, with operations in Augusta, Georgia. The company builds the world's first Unified Autonomous IT Operations (UAIO) platform, which autonomously detects, remediates, and cryptographically proves every IT action — replacing the fragmented stack of monitoring tools, ticketing systems, and AIOps platforms with a single autonomous operations layer.",
      "The UAIO five-phase loop: Detect (Pulse Scanner), Simulate (Digital Twin), Decide (OctoAI), Fix (Suite), Prove (ProofLink). Every cycle produces a SHA-256 cryptographic receipt, hash-chained and anchored to Bitcoin via OpenTimestamps — independently verifiable at verify.itechsmart.dev.",
      "The mission: bring enterprise-grade autonomous IT capabilities to organizations historically underserved by large vendors — with cryptographic proof of every action taken.",
      "Government credentials: CAGE Code 172W2 · UEI ZCPFX4N86G36 · SDVOSB, VOSB, Minority-Owned, SDB certifications with a woman co-founder · FedRAMP active pathway · NIST CSF 96/100 · ranked #6 of 2M+ AI startups on F6S · Wikidata Q139119831.",
      "Production scale: 218 Docker containers, 144 SSL subdomains, 93 databases, 99.9% uptime — and a public receipt ledger past 96,000 sealed actions.",
    ],
  },
  {
    slug: "executive-bios",
    date: "April 2026",
    title: "Executive bios",
    summary: "The operators behind the platform: 60+ combined years across Army operations, federal engineering, healthcare, and enterprise IT.",
    body: [
      "DJuane Jackson — Founder & CEO. A 24-year U.S. Army veteran with a career spanning systems administration, cybersecurity, cloud architecture, enterprise automation, and mission-critical operations. Built and deployed enterprise IT infrastructure for healthcare, government, and defense before building the platform to automate it. Operator first, founder second.",
      "Hamda Awan — Co-Founder & CMO. Marketing strategist leading global brand direction, AI-driven growth, and data-powered decisions, with 10+ years across technology, healthcare, and federal programs. Translates complex infrastructure capability into language decision-makers actually understand.",
      "Fawad Zulfiqar — Chief Technology Officer. Former IRS Deputy Director of QA Engineering; PMP, CSM, MBA. 15+ years of federal technology leadership and enterprise architecture — the engineering mind behind the UAIO platform.",
      "Morris Lionel — Chief Security Officer. A 26-year U.S. Army cybersecurity professional with an active government security clearance. Leads security architecture, compliance posture, and the Citadel government product line. Security isn't a feature here — it's the foundation.",
    ],
  },
  {
    slug: "uaio-one-pager",
    date: "April 2026",
    title: "UAIO one-pager",
    summary: "The category on one page: what Unified Autonomous IT Operations is, why it exists, and the numbers behind it.",
    body: [
      "The problem: IT operations run on a fragmented stack — monitoring that watches, ticketing that tracks, AIOps that suggests. A human still executes every fix, at human speed, with editable logs as the only evidence. Downtime costs run to $5,600 per minute, and the answer to 'who fixes it at 3am?' is still a person.",
      "The category: UAIO — Unified Autonomous IT Operations — closes the loop. Detect (Pulse Scanner) → Simulate (Digital Twin) → Decide (OctoAI, governed by Arbiter) → Fix (Suite) → Prove (ProofLink). Software resolves the incident and seals cryptographic evidence that it worked.",
      "The proof: every action generates a SHA-256 receipt — Ed25519-signed, hash-chained, anchored to Bitcoin via OpenTimestamps. 121,400+ sealed; 90,000+ publicly verifiable at verify.itechsmart.dev, no account required.",
      "The numbers: MTTR down 86% (4.2 hours → 36 minutes) · 87% autonomous-resolution target · 90% alert dedup · first fully autonomous incident resolved in 130 seconds · 66 MCP tools live for any AI agent.",
      "The company: veteran-owned (SDVOSB, CAGE 172W2), founded 2021, incorporated 2025, Newark DE. Ranked #6 of 2M+ AI startups on F6S; NVIDIA Inception member.",
    ],
  },
];

export type Entity = { slug: string; name: string; definition: string; details: string[] };

export const entities: Entity[] = [
  {
    slug: "uaio",
    name: "UAIO",
    definition:
      "Unified Autonomous IT Operations — the software category that detects, diagnoses, and fixes infrastructure issues autonomously, then cryptographically proves every action. Coined by iTechSmart.",
    details: [
      "Five-phase loop: Sense → Analyze → Decide → Act → Verify, with a ProofLink receipt sealed every cycle.",
      "Replaces the monitoring + ticketing + AIOps stack with one governed autonomous layer.",
      "Qualification bar: autonomous end-to-end remediation, pre-execution simulation, independent verification, cryptographic evidence, and governed autonomy.",
      "Announced as a category to 211+ media outlets in April 2026.",
    ],
  },
  {
    slug: "prooflink",
    name: "ProofLink",
    definition:
      "The trust and accountability layer: a SHA-256, Ed25519-signed receipt for every autonomous action — hash-chained and anchored to Bitcoin via OpenTimestamps.",
    details: [
      "Answers what, when, where, why, and who at the moment of execution.",
      "121,400+ receipts sealed; 90,000+ publicly verifiable at verify.itechsmart.dev with no account.",
      "Independent verification via the @itechsmart/prooflink-verifier npm CLI — hash integrity, canonical re-derivation, signature check.",
      "Model-agnostic: seals actions from Claude, ChatGPT, Gemini, Copilot, or any agent via MCP/A2A/REST.",
    ],
  },
  {
    slug: "octoai",
    name: "OctoAI",
    definition:
      "The 8-agent cognitive engine behind every UAIO decision — specialized agents reasoning together across seven layers, governed by Arbiter.",
    details: [
      "Eight specialized agents collaborate through a shared reasoning layer on every incident.",
      "Seven-layer engine: Signal Cortex → Context Cortex → Reasoning Cortex → The Arbiter → Execution Layer → ProofLink Seal → Learn Loop.",
      "Retrieval-augmented: every classification retrieves five similar past incidents from the receipt ledger (NVIDIA NeMo Retriever) before choosing a remediation.",
      "Explainable by design — reasoning traces accompany every autonomous action.",
    ],
  },
  {
    slug: "arbiter",
    name: "Arbiter",
    definition:
      "The policy-enforcement and governance layer above OctoAI — it decides what runs full-auto, what waits for a human, and what never runs at all.",
    details: [
      "Enforces blast-radius ceilings, time-window restrictions, change-freeze awareness, and human-approval thresholds.",
      "Routes every incident to manual, semi, or full-auto execution based on policy, confidence, and blast radius.",
      "Gates every side-effecting MCP/A2A/API call before execution.",
      "Prevents conflicting autonomous actions across tenants and environments.",
    ],
  },
  {
    slug: "pulse",
    name: "Pulse",
    definition:
      "The free 60-second scanner: security posture, uptime, SSL, DNS, and performance findings — each scan sealed with a ProofLink receipt.",
    details: [
      "Free forever, no credit card, no account; one binary with zero dependencies.",
      "Seven live scenarios including rogue-CPU, memory pressure, service-down, and live self-healing.",
      "The entry point to UAIO: every finding is one click from a simulated, receipt-sealed autonomous fix.",
      "Windows endpoint monitoring in 60 seconds via Pushgateway + WinRM.",
    ],
  },
  {
    slug: "citadel",
    name: "Citadel",
    definition:
      "The federal and sovereign deployment of the UAIO platform — air-gapped, STIG-hardened, with a fully offline ProofLink chain.",
    details: [
      "Built for DoD contractors, IC agencies, and sovereign IT environments; IL4/IL5-ready architecture available.",
      "NIST CSF 96/100 (self-assessed) baseline, FedRAMP pathway documentation, CMMC Level 2 mapping.",
      "Runs fully air-gapped with local Nemotron Super 49B inference — zero external dependencies.",
      "Procured via SDVOSB set-aside: CAGE 172W2, UEI ZCPFX4N86G36 on record.",
    ],
  },
];
