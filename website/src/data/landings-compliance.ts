/** Compliance & government landing pages. Owned by the landings-compliance author. */
import type { LandingPage } from "./landings";

export const landingsCompliance: LandingPage[] = [
  {
    slug: "eu-ai-act",
    metaTitle: "EU AI Act Article 12 Compliance | iTechSmart ProofLink",
    metaDescription:
      "Article 12 enforcement begins August 2, 2026. ProofLink satisfies all seven sub-requirements natively — tamper-evident, Bitcoin-anchored logs. Book a demo.",
    keywords: ["EU AI Act compliance", "Article 12 logging", "high-risk AI record-keeping", "Regulation 2024/1689", "tamper-evident AI logs"],
    eyebrow: "EU AI Act Readiness",
    title: "AI Act compliance by architecture, not paperwork.",
    lede: "The EU AI Act demands traceability, human oversight, and robust logging for AI systems in production. Most platforms bolt this on. UAIO was built receipts-first — compliance is a property of the system, not a quarterly project.",
    actions: [
      { label: "Book an AI Act assessment", href: "/contact" },
      { label: "Verify our receipts", href: "https://verify.itechsmart.dev", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Enforcement: Aug 2, 2026",
        title: "The clock is set. The architecture is running.",
        copy: "Article 12 of Regulation (EU) 2024/1689 requires high-risk AI systems to automatically record events across their lifetime — tamper-evident, traceable, verifiable. ProofLink already does this in production: every autonomous action seals a SHA-256, hash-chained, Bitcoin-anchored receipt at execution time. Not a policy promise. A running ledger with 90,000+ publicly verifiable entries.",
      },
      {
        type: "features",
        eyebrow: "Requirement → architecture",
        title: "What the Act demands. What UAIO already does.",
        items: [
          {
            title: "Traceability",
            copy: "Article-grade audit trails are native. Every AI-driven decision and action produces a hash-chained, replayable receipt. Not log files — cryptographic evidence.",
          },
          {
            title: "Human oversight",
            copy: "Configurable policy gates put humans exactly where regulation (or your risk appetite) requires: manual, approval-required, or supervised autonomy — with timestamps to prove it.",
          },
          {
            title: "Logging and record-keeping",
            copy: "Immutable, tamper-evident, independently verifiable records — retained and exportable for the lifetime the Act requires. Anyone can check the chain, no account needed.",
          },
        ],
      },
      {
        type: "stats",
        eyebrow: "The numbers",
        title: "Article 12, measured",
        items: [
          { value: "Aug 2, 2026", label: "Article 12 enforcement begins", note: "Regulation (EU) 2024/1689" },
          { value: "7/7", label: "Sub-requirements satisfied natively", note: "Mapped clause-by-clause at /prooflink-article-12" },
          { value: "90,000+", label: "Receipts publicly verifiable", note: "verify.itechsmart.dev — no account required" },
          { value: "€15M / 3%", label: "Non-compliance penalty band", note: "Of global annual turnover, whichever is higher" },
        ],
      },
      {
        type: "checklist",
        eyebrow: "For EU operations",
        title: "Built for the world's strictest AI regime",
        lede: "If your organization operates in or sells into the EU, UAIO turns your compliance burden into a competitive position.",
        good: [
          "Deterministic decision paths — no black-box reasoning between signal and action",
          "Replayable incidents — reconstruct exactly what the system saw, decided, and did",
          "Oversight evidence — prove your humans were in the loop, with timestamps",
          "Data residency aware — hybrid, on-prem, and air-gapped deployment options",
        ],
        bad: [
          "Mutable log files that could have been edited after the fact",
          "Compliance binders assembled the week before the audit",
          "Vendor dashboards that ask regulators to take your word for it",
        ],
      },
      {
        type: "faq",
        eyebrow: "Quick answers",
        title: "EU AI Act, without the legalese",
        items: [
          {
            q: "When does Article 12 actually apply?",
            a: "Obligations for high-risk AI systems under Regulation (EU) 2024/1689 begin enforcement on August 2, 2026. If your AI acts in production, its record-keeping needs to be automatic and tamper-evident by then.",
          },
          {
            q: "Why doesn't our existing logging stack qualify?",
            a: "Conventional logs are mutable — an administrator can alter them and no one can prove it. Article 12 expects tamper-evidence. ProofLink receipts are SHA-256 hash-chained and Bitcoin-anchored via OpenTimestamps: alter one, and the chain breaks visibly.",
          },
          {
            q: "Can a regulator or auditor verify receipts without trusting iTechSmart?",
            a: "Yes. That is the point. Receipts verify with open-source tooling at verify.itechsmart.dev — recompute the hash, check the Ed25519 signature, confirm the Bitcoin anchor. No account, no permission from us.",
          },
          {
            q: "We use third-party AI, not yours. Does this still apply?",
            a: "ProofLink is a neutral proof layer, not a vendor silo. Seal receipts from your own stack over REST at api.itechsmart.dev/v1 or through the MCP server at mcp.itechsmart.dev — every connected action gets a receipt.",
          },
        ],
      },
    ],
    ctaTitle: "The next audit is coming. Will you be able to prove what happened?",
    ctaLede: "No sales deck. Just a live walkthrough of your environment and the receipts it would generate.",
  },

  {
    slug: "fedramp-automation",
    metaTitle: "FedRAMP Automation — Air-Gapped UAIO | iTechSmart",
    metaDescription:
      "Citadel runs the full UAIO stack air-gapped — FIPS 140-2 aligned, NIST SP 800-53 mapped, ConMon evidence sealed as receipts. Run a free Pulse scan.",
    keywords: ["FedRAMP automation", "FedRAMP continuous monitoring", "NIST SP 800-53", "air-gapped AIOps", "federal IT automation"],
    eyebrow: "Federal & Sovereign",
    title: "FedRAMP automation: autonomous IT for federal agencies.",
    lede: "Air-gapped UAIO for FedRAMP environments. NIST SP 800-53 aligned, FIPS 140-2 aligned cryptography, no external network dependencies — and ProofLink audit evidence generated automatically for every autonomous action.",
    actions: [
      { label: "Run a free Pulse scan", href: "/pulse" },
      { label: "Talk to the federal team", href: "/contact", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The gap",
        title: "Commercial automation stops at the network boundary. Citadel doesn't.",
        copy: "Federal agencies carry the same operations burden as any enterprise — thousands of alerts a day, thin staffing, MTTR pressure — plus constraints commercial AIOps cannot satisfy: data sovereignty, network segmentation, and frameworks like FedRAMP, FISMA, and DISA STIGs that mandate specific controls. Citadel closes that gap: the full UAIO stack, deployed entirely inside your boundary.",
      },
      {
        type: "features",
        eyebrow: "NIST SP 800-53",
        title: "Control families, satisfied by architecture",
        lede: "UAIO maps directly to the control families FedRAMP requires — and generates the evidence as it operates.",
        items: [
          {
            title: "AU — Audit and Accountability",
            copy: "ProofLink cryptographic receipts satisfy AU-2 through AU-12 automatically. Every autonomous action is recorded, chained, and tamper-evident at execution time.",
          },
          {
            title: "CM — Configuration Management",
            copy: "Arbiter governance provides the approval gate; ProofLink provides the immutable record. Every change carries its authorization with it.",
          },
          {
            title: "IR — Incident Response",
            copy: "Each incident through the loop generates a complete evidence package — detection, analysis, decision, execution, outcome — satisfying IR-4, IR-5, and IR-6 without manual documentation.",
          },
          {
            title: "SI — System and Information Integrity",
            copy: "Pulse provides continuous monitoring for SI-2 and SI-4. Autonomous remediation delivers documented flaw remediation faster and more consistently than manual processes.",
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Citadel deployment facts",
        title: "Nothing leaves your boundary",
        good: [
          "Full UAIO stack — Pulse, OctoAI, Digital Twin, Arbiter, ProofLink — inside your controlled environment",
          "All AI inference runs on your hardware; no infrastructure telemetry crosses the boundary",
          "Zero internet connectivity required",
          "Receipt anchoring can use a government-approved timestamping authority instead of the public Bitcoin network — the SHA-256 chain stays tamper-evident either way",
          "Mandatory human-in-the-loop workflows available for systems handling classified information",
        ],
      },
      {
        type: "intro",
        eyebrow: "ConMon evidence",
        title: "Continuous monitoring evidence, without the screenshot marathon",
        copy: "FedRAMP assessments consume weeks of staff time assembling screenshots, logs, and attestations. With ProofLink, evidence accumulates continuously: every configuration change, patch, remediation, and access modification seals a tamper-evident receipt. Assessors verify the SHA-256 chain independently — they don't have to take the agency's word for it. The evidence package is ready when they are.",
      },
      {
        type: "faq",
        eyebrow: "Quick answers",
        title: "FedRAMP questions, straight answers",
        items: [
          {
            q: "Is iTechSmart FedRAMP authorized?",
            a: "We are on the FedRAMP pathway, and we document that status precisely — pathway documentation is available on request. Citadel exists so agencies do not have to wait: it deploys entirely within your boundary, under your existing authorization.",
          },
          {
            q: "Does receipt anchoring require the public Bitcoin network?",
            a: "No. In restricted environments, anchoring can use a government-approved timestamping authority — or none at all. The SHA-256 hash chain provides tamper-evidence even without external anchoring.",
          },
          {
            q: "How does autonomy work on high-impact systems?",
            a: "Arbiter routes every action through policy: full autonomy, approval-required, or manual. Mission-specific workflows can mandate a human in the loop for any class of system, and every gate decision is itself receipted.",
          },
          {
            q: "What does the evidence actually look like?",
            a: "A cryptographic receipt per action: what ran, when, where, why, and who approved it — hash-chained to its neighbors. 90,000+ receipts are publicly verifiable today at verify.itechsmart.dev, so you can inspect the format before you deploy.",
          },
        ],
      },
    ],
    ctaTitle: "See what Citadel finds in your environment",
    ctaLede: "Start with a free Pulse scan, or bring your ConMon requirements to a working session with the federal team.",
  },

  {
    slug: "cmmc-automation",
    metaTitle: "CMMC Level 2 Automation for the DIB | iTechSmart",
    metaDescription:
      "Citadel aligns autonomous IT operations to CMMC Level 2 — NIST SP 800-171 mapped, tamper-evident evidence for your C3PAO. Run a free Pulse scan.",
    keywords: ["CMMC automation", "CMMC Level 2", "NIST SP 800-171", "CUI compliance", "defense contractor IT", "C3PAO evidence"],
    eyebrow: "Defense Industrial Base",
    title: "CMMC compliance automation for defense contractors.",
    lede: "CMMC 2.0 Level 2 means all 110 practices from NIST SP 800-171, continuously implemented and continuously documented. Citadel produces that evidence as a byproduct of normal operations — not a separate documentation exercise.",
    actions: [
      { label: "Run a free Pulse scan", href: "/pulse" },
      { label: "Book a working session", href: "/contact", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "CMMC 2.0",
        title: "Point-in-time compliance is the problem",
        copy: "Level 2 requires 110 practices from NIST SP 800-171 to protect Controlled Unclassified Information. Level 3 adds 24 more from NIST SP 800-172. C3PAO assessors want objective evidence that controls operate continuously — and manual evidence collection for 110+ practices consumes months. Most contractors can only show a snapshot. Citadel shows a chain.",
      },
      {
        type: "features",
        eyebrow: "NIST SP 800-171 mapping",
        title: "Practice families, covered in operation",
        items: [
          {
            title: "AC — Access Control",
            copy: "Arbiter enforces policy-based access with least privilege and separation of duties. Every Arbiter decision produces a ProofLink record supporting AC.L2-3.1.1 through AC.L2-3.1.12.",
          },
          {
            title: "AU — Audit and Accountability",
            copy: "Receipts cover the AU family end to end: cryptographic audit records (AU.L2-3.3.1), traceability content (AU.L2-3.3.2), and protection from unauthorized modification via hash chaining (AU.L2-3.3.8).",
          },
          {
            title: "CM + IR — Configuration and Incidents",
            copy: "Pulse detects drift; remediation executes autonomously with ProofLink documentation (CM.L2-3.4.1, CM.L2-3.4.3). Incident response runs with evidence trails satisfying IR.L2-3.6.1 and IR.L2-3.6.2.",
          },
          {
            title: "SI — System and Information Integrity",
            copy: "Continuous monitoring plus autonomous remediation address flaw remediation, malicious code protection, and security alerting — with a receipt for every action taken.",
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "CUI stays home",
        title: "Air-gapped by design, not by exception",
        lede: "Contractors handling CUI cannot let telemetry leave the controlled environment. Citadel never asks them to.",
        good: [
          "Every component deploys inside your environment — OctoAI inference runs on your hardware",
          "Pulse scan data never leaves your network",
          "ProofLink receipts are generated locally; external blockchain anchoring is optional for CUI environments",
          "Mandatory human-in-the-loop approval available for actions on CUI systems at Level 2",
          "Additional separation-of-duties controls for Level 3 programs",
        ],
      },
      {
        type: "faq",
        eyebrow: "Quick answers",
        title: "What your assessor will ask",
        items: [
          {
            q: "What does a C3PAO actually get from ProofLink?",
            a: "Objective evidence per practice: each receipt documents the control it supports, the action taken, the timestamp, the outcome, and cryptographic proof of integrity. Evidence packages generated from the ledger cover the whole assessment period, not a staged snapshot.",
          },
          {
            q: "How long does evidence collection take?",
            a: "Manual collection for 110+ practices is typically a multi-month effort. With the ProofLink ledger, it becomes report generation — the evidence already exists, sealed at execution time.",
          },
          {
            q: "Does any CUI or telemetry leave our environment?",
            a: "No. Citadel is a full air-gapped deployment. Inference, scanning, and receipt generation all happen inside your boundary. Anchoring to an external chain is optional and off by default for CUI environments.",
          },
          {
            q: "Can the receipts themselves be tampered with?",
            a: "Altering any receipt breaks the SHA-256 hash chain, producing immediate cryptographic evidence of tampering. That is exactly the property AU.L2-3.3.8 asks for — and it is verifiable without trusting us.",
          },
        ],
      },
    ],
    ctaTitle: "Turn 110 practices into one ledger",
    ctaLede: "Free Pulse scan first. Then bring your SSP to a working session and see which practices Citadel evidences on day one.",
  },

  {
    slug: "gov",
    metaTitle: "Government IT — SDVOSB Sole-Source | iTechSmart",
    metaDescription:
      "SDVOSB with sole-source eligibility — CAGE 172W2, UEI ZCPFX4N86G36. Autonomous IT with cryptographic receipts for federal agencies. Book a capability briefing.",
    keywords: ["SDVOSB IT contractor", "sole-source IT automation", "CAGE 172W2", "federal autonomous IT operations", "government IT modernization"],
    eyebrow: "SDVOSB · CAGE 172W2 · UEI ZCPFX4N86G36",
    title: "Government IT that fixes itself — and proves it did.",
    lede: "Veteran-owned, SDVOSB-certified, sole-source eligible. iTechSmart delivers autonomous IT operations with immutable receipts, so every action is documented, defensible, and verifiable before the auditor calls.",
    actions: [
      { label: "Contact contracting", href: "/contact" },
      { label: "Book a capability briefing", href: "https://calendly.com/djuane-itechsmart/new-meeting", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Mission",
        title: "Not compliance theater. Actual proof.",
        copy: "UAIO integrates observability, automation, security, and real-time remediation into one loop — Detect → Decide → Do → Prove — and seals a cryptographic receipt for every action. For agencies that cannot afford downtime, and cannot afford to explain it after the fact.",
      },
      {
        type: "stats",
        eyebrow: "Proven in production",
        title: "Live infrastructure, not a roadmap",
        items: [
          { value: "<20s", label: "Detect → fix → receipt", note: "Self-healing measured in seconds, every action cryptographically logged" },
          { value: "96/100", label: "NIST CSF alignment score", note: "Self-assessed; SOC 2 Type II audit in progress; FedRAMP pathway in progress" },
          { value: "218", label: "Production containers managed autonomously", note: "Crash recovery, scaling, and health checks — no human in the loop" },
          { value: "90,000+", label: "Immutable audit receipts", note: "Publicly verifiable at verify.itechsmart.dev" },
        ],
      },
      {
        type: "features",
        eyebrow: "Sovereign by design",
        title: "No data leaves your perimeter",
        items: [
          {
            title: "Citadel — air-gapped UAIO",
            copy: "The full stack packaged for classified, SCIF, and air-gapped environments. Zero external connectivity required. FIPS 140-2 aligned cryptographic modules.",
          },
          {
            title: "On-prem AI inference",
            copy: "The OctoAI cognitive engine runs on NVIDIA Nemotron Super 49B, deployable entirely on-premise. No API calls to external clouds. NVIDIA Inception member.",
          },
          {
            title: "ProofLink chain of custody",
            copy: "Ledger-backed remediation receipts with OpenTimestamps attestation. Hand any auditor a receipt they can verify themselves — offline, without trusting us.",
          },
          {
            title: "Governed autonomy",
            copy: "Arbiter routes every action through policy: full-auto, approval-required, or manual. Human gates exactly where your mission requires them.",
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Procurement-friendly",
        title: "Everything your contracting officer needs",
        good: [
          "Service-Disabled Veteran-Owned Small Business (SDVOSB) — sole-source eligible",
          "CAGE 172W2 · UEI ZCPFX4N86G36",
          "GSA Schedule availability — ask contracting for current vehicle details",
          "NAICS 541511 (primary), 541512, 541519, 541513, 541715, 518210, 511210",
          "Minority-owned, VOSB, and self-certified SDB",
          "Deployment models: air-gapped (Citadel), on-prem, gov cloud, hybrid",
        ],
      },
    ],
    ctaTitle: "Skip the RFP scrum",
    ctaLede: "SDVOSB sole-source eligibility means you can move at mission speed. Bring your requirement — we will bring the receipts.",
  },

  {
    slug: "gov-health",
    metaTitle: "Government Healthcare IT Automation | iTechSmart",
    metaDescription:
      "Autonomous IT for government healthcare — HL7 pipelines, Epic availability, HIPAA-grade receipts, air-gapped Citadel deployment. Run a free Pulse scan.",
    keywords: ["government healthcare IT", "VA health IT automation", "HL7 monitoring", "HIPAA audit trail", "military health system IT"],
    eyebrow: "Government + Healthcare",
    title: "Where FISMA meets HIPAA, downtime is a patient-safety variable.",
    lede: "Government healthcare IT answers to two regimes at once: federal security frameworks and clinical audit requirements. UAIO satisfies both with one mechanism — autonomous remediation, receipted cryptographically, deployable air-gapped.",
    actions: [
      { label: "Run a free Pulse scan", href: "/pulse" },
      { label: "Talk to the team", href: "/contact", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The stakes",
        title: "An HL7 failure is not an IT ticket. It is a lab result that never arrived.",
        copy: "Built for VA medical centers, military treatment facilities, and state health agencies: environments where an interface engine backlog means clinicians working blind, and where every fix must survive both an OCR audit and a federal assessment. UAIO detects, remediates, and receipts — the time between failure and resolution stops being a staffing question.",
      },
      {
        type: "features",
        eyebrow: "Clinical + federal",
        title: "One platform, both rulebooks",
        items: [
          {
            title: "HL7 pipeline integrity",
            copy: "Pulse continuously monitors interface engines — throughput, queue depth, connectivity, latency. Disconnections, backlogs, and acknowledgment failures are detected in seconds and remediated autonomously.",
          },
          {
            title: "Epic EHR availability",
            copy: "Service availability, integration point health, and performance across the Epic suite — including Interconnect and Chronicles — with the Digital Twin validating every fix before it touches production.",
          },
          {
            title: "HIPAA audit controls",
            copy: "The Security Rule demands audit records for ePHI systems. ProofLink receipts are SHA-256 chained and timestamped at execution — independently verifiable, impossible to retroactively alter. A stronger position in an OCR audit than any change ticket.",
          },
          {
            title: "Citadel for sovereignty",
            copy: "The full stack air-gapped: on-prem inference, local receipt generation, zero external telemetry. Built for environments where FISMA, FedRAMP pathway, and data residency all apply at once.",
          },
        ],
      },
      {
        type: "steps",
        eyebrow: "The loop, clinically",
        title: "An interface failure, from alert to evidence",
        items: [
          { title: "Detect", copy: "Pulse flags an HL7 interface disconnection within seconds — before the help desk hears about missing lab results." },
          { title: "Decide", copy: "Arbiter routes by policy: infrastructure-level fixes run full-auto; anything touching clinical application configuration waits for a human gate." },
          { title: "Do", copy: "The Digital Twin simulates the reconnection first — 98% blast-radius accuracy — then OctoAI executes and verifies message flow is restored." },
          { title: "Prove", copy: "A ProofLink receipt seals what ran, when, where, why, and who approved it. HIPAA audit record and federal evidence, generated in the same second." },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Autonomy envelopes",
        title: "Humans exactly where clinical risk requires",
        good: [
          "Full autonomous execution for infrastructure issues — connectivity, service restarts, resource scaling",
          "Human-in-the-loop approval for clinical application configuration and data-handling changes",
          "Every gate decision receipted with timestamp and approver identity",
          "Zero-touch resolution for known failure modes that used to take 30-90 minutes of human response",
        ],
      },
    ],
    ctaTitle: "Prove your clinical infrastructure heals itself",
    ctaLede: "Start with a free Pulse scan of a non-production segment. See the receipts before you see a contract.",
  },

  {
    slug: "grants",
    metaTitle: "Grant-Funded IT Modernization | iTechSmart",
    metaDescription:
      "Funding modernization with federal grants? iTechSmart is an SDVOSB with receipts for every action — audit-ready reporting built in. Talk to our team.",
    keywords: ["grant-funded IT modernization", "federal grant technology projects", "SDVOSB grant vendor", "grant compliance reporting"],
    eyebrow: "Federal Grants",
    title: "Grant-funded modernization that documents itself.",
    lede: "Federal grants fund the modernization. ProofLink proves what the money did. Every deployment action, configuration change, and remediation seals a cryptographic receipt — so your grant reporting writes itself from evidence, not recollection.",
    actions: [
      { label: "Talk to our team", href: "/contact" },
      { label: "Run a free Pulse scan", href: "/pulse", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The reporting problem",
        title: "Grant dollars come with proof obligations",
        copy: "Agencies, health systems, and institutions that modernize with federal grant funding inherit the reporting that comes with it: progress documentation, audit trails, and evidence that funds produced what the application promised. Most projects reconstruct that story at reporting time. With UAIO, the story is already sealed — a hash-chained ledger of every action the funded system took, verifiable by any reviewer at verify.itechsmart.dev.",
      },
      {
        type: "features",
        eyebrow: "Why it fits",
        title: "Built for funded programs",
        items: [
          {
            title: "SDVOSB vendor",
            copy: "Service-Disabled Veteran-Owned Small Business — CAGE 172W2, UEI ZCPFX4N86G36. Socioeconomic status that strengthens procurement narratives on federally funded projects.",
          },
          {
            title: "Evidence as a byproduct",
            copy: "42 modules across the platform, and every action any of them takes generates a receipt. Reporting periods become ledger queries, not archaeology.",
          },
          {
            title: "Measurable outcomes",
            copy: "MTTR down 86% — from 4.2 hours to 36 minutes — with a 90% alert dedup rate. Concrete before/after numbers for your outcomes section, backed by verifiable receipts.",
          },
          {
            title: "Deployment flexibility",
            copy: "On-prem, hybrid, gov cloud, or fully air-gapped via Citadel — matching the data-handling terms your award specifies.",
          },
        ],
      },
      {
        type: "steps",
        eyebrow: "How to engage",
        title: "From award to audit-ready in four moves",
        items: [
          { title: "Scope", copy: "A free Pulse scan inventories the environment and surfaces what the modernization actually needs to fix. Baseline established, in writing." },
          { title: "Plan", copy: "We map platform modules to your award's scope and period of performance, with the human-approval gates your governance requires." },
          { title: "Deploy", copy: "The UAIO loop goes live — Detect → Decide → Do → Prove. Every action from day one lands in the receipt ledger." },
          { title: "Report", copy: "Progress and closeout reporting draw directly from the ledger: tamper-evident, timestamped, independently verifiable by your grantor or auditor." },
        ],
      },
    ],
    ctaTitle: "Bring the award. We bring the evidence engine.",
    ctaLede: "Tell us the program and the period of performance — we will show you what the receipt ledger looks like for your reporting.",
  },

  {
    slug: "prooflink-api",
    metaTitle: "ProofLink API — Seal Receipts From Your Stack | iTechSmart",
    metaDescription:
      "Seal tamper-evident receipts from your own stack — 95 REST routes at api.itechsmart.dev/v1, Python and TypeScript SDKs, sub-150ms. Start sealing today.",
    keywords: ["ProofLink API", "AI audit trail API", "tamper-evident logging API", "cryptographic receipts REST", "prooflink SDK"],
    eyebrow: "ProofLink API",
    title: "Your stack. Your actions. Sealed receipts.",
    lede: "ProofLink is not a vendor silo — it is the neutral proof layer above your whole stack. Seal a tamper-evident receipt for anything your systems do, over plain REST or straight from your AI agents.",
    actions: [
      { label: "Get started", href: "/start" },
      { label: "Browse the MCP server", href: "https://mcp.itechsmart.dev", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "api.itechsmart.dev/v1",
        title: "One call in. One receipt out.",
        copy: "The REST API runs at api.itechsmart.dev/v1 — 95 routes, sub-150ms responses, Bearer auth, structured errors, Swagger at /docs. Non-agent backends integrate over plain HTTP: receipt per call. AI agents skip the glue code entirely and connect through the MCP server at mcp.itechsmart.dev, where every tool call seals a receipt.",
      },
      {
        type: "stats",
        eyebrow: "The surface",
        title: "Production numbers, not launch promises",
        items: [
          { value: "95", label: "REST routes", note: "api.itechsmart.dev/v1 — Swagger at /docs" },
          { value: "<150ms", label: "Response time", note: "Structured errors, Bearer auth, rate limiting" },
          { value: "66", label: "MCP tools", note: "mcp.itechsmart.dev — agents connect directly" },
          { value: "121,400+", label: "Receipts sealed", note: "90,000+ publicly verifiable at verify.itechsmart.dev" },
        ],
      },
      {
        type: "steps",
        eyebrow: "Integration",
        title: "Five lines of code. Proof for everything.",
        items: [
          {
            title: "Integrate",
            copy: "pip install prooflink — or npm i @itechsmart/prooflink. Fetch a receipt, verify it locally: hash and Ed25519 signature checked in one assert.",
          },
          {
            title: "Seal",
            copy: "Call seal() when your system acts. A receipt is generated in real time — SHA-256 hash-chained to its predecessor, queued for Bitcoin anchoring via OpenTimestamps.",
          },
          {
            title: "Verify",
            copy: "Anyone can check your receipts at verify.itechsmart.dev — /api/verify/<id>, /api/anchors, /api/export. No account. No trusting us. That is the feature.",
          },
        ],
      },
      {
        type: "features",
        eyebrow: "Why this beats logging",
        title: "Logs attest. Receipts prove.",
        items: [
          {
            title: "Cross-vendor by design",
            copy: "Datadog and ServiceNow logs are per-vendor and self-attested. ProofLink receipts are cross-vendor and publicly anchored — one proof layer over AWS, Kubernetes, Prometheus, network gear, ServiceNow, Splunk, and Wazuh.",
          },
          {
            title: "Agent-native",
            copy: "Claude, Cursor, Copilot, LangGraph, CrewAI — any MCP-speaking agent connects to mcp.itechsmart.dev and gets automatic receipts for every tool call. A2A agent-card protocol supported.",
          },
          {
            title: "Regulator-ready output",
            copy: "Receipts answer the five questions an auditor asks — what, when, where, why, who — in a format they can verify without your help. EU AI Act Article 12 alignment out of the box.",
          },
        ],
      },
    ],
    ctaTitle: "Seal your first receipt today",
    ctaLede: "pip install prooflink, hit /start, and your next deploy can carry cryptographic proof.",
  },

  {
    slug: "prooflink-standard",
    metaTitle: "The ProofLink Standard — Open Receipt Format | iTechSmart",
    metaDescription:
      "The open receipt format behind 121,400+ sealed AI actions — SHA-256 hash chains, Ed25519 signatures, Bitcoin anchoring. Verify one yourself, no account.",
    keywords: ["ProofLink standard", "open receipt format", "AI accountability standard", "hash-chained audit log", "OpenTimestamps receipts"],
    eyebrow: "The Open Standard",
    title: "Every other AI-accountability standard is a PDF. ProofLink is a running ledger.",
    lede: "An open, verifiable receipt format for autonomous actions: SHA-256 hashed, Ed25519 signed, hash-chained, and anchored to Bitcoin via OpenTimestamps. The standard is the map. The public chain is the territory.",
    actions: [
      { label: "Verify a receipt yourself", href: "https://verify.itechsmart.dev" },
      { label: "Get started", href: "/start", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The format",
        title: "One receipt. Five questions. Mathematically undeniable.",
        copy: "Every receipt answers WHAT ran, WHEN it ran, WHERE it ran, WHY it ran, and WHO authorized it — then commits those answers cryptographically. Each receipt hashes to the next; the chain terminates in Bitcoin. Tamper with one, and the rest break visibly.",
      },
      {
        type: "features",
        eyebrow: "Four layers",
        title: "The cryptography, layer by layer",
        items: [
          {
            title: "SHA-256 canonical hash",
            copy: "The receipt body is reduced to a canonical form and hashed. Verification means re-deriving that form and recomputing the hash — byte-identical or it fails.",
          },
          {
            title: "Ed25519 signature",
            copy: "Each receipt is signed at sealing time. The public key lets anyone confirm origin without contacting iTechSmart.",
          },
          {
            title: "Hash chain (prev_hash)",
            copy: "Every receipt carries the hash of its predecessor. Altering any historical receipt breaks every link after it — tampering is not just detectable, it is loud.",
          },
          {
            title: "Bitcoin anchoring via OpenTimestamps",
            copy: "Chain checkpoints are committed to the Bitcoin blockchain. Proof of time that no vendor, including us, can backdate.",
          },
        ],
      },
      { type: "receipt" },
      {
        type: "checklist",
        eyebrow: "Honest disclosure",
        title: "Two eras, disclosed honestly",
        lede: "Don't trust us. Verify us — and read the fine print we volunteer.",
        good: [
          "121,400+ receipts sealed; 90,000+ publicly verifiable at verify.itechsmart.dev",
          "2,100+ v3 receipts are strict cryptographically-verifiable: hash, canonical re-derivation, Ed25519, prev_hash link",
          "Every new action seals a v3 receipt",
          "Legacy v1/v2 receipts are pointer-linked only — and disclosed as such at /api/stats",
          "Open-source verifier: recompute everything yourself, offline, no account",
        ],
        bad: [
          "We never imply all 90,000+ are strict-verifiable",
          "No self-attested dashboards presented as evidence",
          "No standard that exists only as a specification document",
        ],
      },
    ],
    ctaTitle: "Go check it yourself",
    ctaLede: "Pick any receipt at verify.itechsmart.dev. Recompute the hash. Check the signature. That is the whole pitch.",
  },

  {
    slug: "prooflink-article-12",
    metaTitle: "ProofLink × EU AI Act Article 12 | iTechSmart",
    metaDescription:
      "Every Article 12 sub-requirement mapped to the ProofLink mechanism that satisfies it — all seven, natively. Download the whitepaper or book a demo.",
    keywords: ["EU AI Act Article 12", "Article 12 record-keeping", "high-risk AI logging", "ProofLink compliance mapping", "Regulation 2024/1689"],
    eyebrow: "Article 12 Deep Dive",
    title: "Every clause. Every mechanism that satisfies it.",
    lede: "Article 12 of Regulation (EU) 2024/1689 breaks into seven enforceable sub-requirements. ProofLink satisfies each one by architecture — not by policy promise. Here is the clause-by-clause map.",
    actions: [
      { label: "Download the whitepaper — free PDF", href: "https://whitepaper.itechsmart.dev/iTechSmart_EU_AI_Act_Article12_Whitepaper.pdf" },
      { label: "Book an AI Act assessment", href: "/contact", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Enforcement: Aug 2, 2026",
        title: "Record-keeping is the clause with teeth",
        copy: "Article 12 requires high-risk AI systems to automatically record events over their lifetime, keep those records tamper-evident, and make them usable for traceability and post-market monitoring. ProofLink was built to this shape before the deadline existed: automatic logging, hash-chain tamper detection, human-readable audit trails, and Bitcoin-anchored proof of time.",
      },
      {
        type: "steps",
        eyebrow: "The compliance map",
        title: "Seven sub-requirements, seven native mechanisms",
        lede: "Each Article 12 sub-requirement, matched to the ProofLink mechanism that satisfies it. All seven: native, in production.",
        items: [
          {
            title: "1 · Automatic event recording throughout system lifetime",
            copy: "Every autonomous action triggers a receipt at execution time — no manual logging, no batching.",
          },
          {
            title: "2 · Tamper-evident log integrity",
            copy: "SHA-256 hash chain: altering any receipt breaks the chain, producing immediate cryptographic evidence of tampering.",
          },
          {
            title: "3 · Sufficient to identify risk circumstances",
            copy: "Receipts capture the trigger event, AI reasoning path, policy gate used, executor identity, outcome, and risk category label.",
          },
          {
            title: "4 · Post-market monitoring support",
            copy: "The full ledger is queryable at verify.itechsmart.dev — filter by date, actor, category, severity. Export API available.",
          },
          {
            title: "5 · Traceability of autonomous decisions",
            copy: "Every receipt links to the originating incident, the agent that acted, the approval chain, and the policy governing execution.",
          },
          {
            title: "6 · Independent third-party verifiability",
            copy: "Bitcoin-anchored via OpenTimestamps — verifiable by any party using open-source tooling, without iTechSmart involvement.",
          },
          {
            title: "7 · Defined retention period",
            copy: "Receipts are permanent on-chain, with configurable local retention windows for jurisdiction-specific compliance periods.",
          },
        ],
      },
      {
        type: "stats",
        eyebrow: "Live evidence",
        title: "Compliance you can query today",
        items: [
          { value: "7/7", label: "Sub-requirements satisfied natively", note: "By architecture, not by policy promise" },
          { value: "90,000+", label: "Receipts publicly verifiable", note: "Live compliance evidence, not a sample" },
          { value: "2,100+", label: "v3 strict-verifiable receipts", note: "Hash + canonical re-derivation + Ed25519 + prev_hash" },
          { value: "Aug 2, 2026", label: "Enforcement begins", note: "Regulation (EU) 2024/1689" },
        ],
      },
      {
        type: "checklist",
        eyebrow: "In the whitepaper",
        title: "What the free PDF walks through",
        good: [
          "Article 12(a) automatic logging — how ProofLink seals every action",
          "Article 12(b) tamper-evidence — hash chains plus Bitcoin anchoring",
          "Article 12(c) human-readable audit trails",
          "90,000+ sealed receipts as live compliance evidence you can verify mid-read",
        ],
      },
    ],
    ctaTitle: "Hand your compliance team the map",
    ctaLede: "Download the whitepaper, then verify a live receipt at verify.itechsmart.dev before your first call with us.",
  },
];
