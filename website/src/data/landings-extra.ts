import type { LandingPage } from "./landings";

/** Hand-authored landing pages: security, architecture, pilot. */
export const landingsExtra: LandingPage[] = [
  {
    slug: "security",
    metaTitle: "Security & Governance Architecture | iTechSmart",
    metaDescription:
      "Governance-first autonomous operations: staged remediation modes, immutable receipt ledger, NIST/FedRAMP-aligned controls, and air-gapped deployment options.",
    keywords: ["autonomous IT security", "governed automation", "NIST alignment", "air-gapped deployment"],
    eyebrow: "Infrastructure security",
    title: "Security & governance architecture.",
    lede: "Autonomous operations designed with strong governance, traceability, and controlled execution at the core — automation that stays explainable and reviewable by your technical stakeholders.",
    actions: [
      { label: "Book a security review", href: "/contact" },
      { label: "Read the credibility page", href: "/credibility", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Governance",
        title: "Governance-first autonomous operations",
        copy: "Unlike black-box automation tools, UAIO emphasizes controlled, attributable execution. Every action the platform executes is context-aware, attributable, and logged with execution evidence — so automation remains explainable and reviewable, not magical and terrifying.",
      },
      {
        type: "steps",
        eyebrow: "Staged remediation control model",
        title: "Three modes. You pick the dial position.",
        items: [
          { title: "Manual mode", copy: "Human review and execution — the platform detects, diagnoses, and recommends; your team acts." },
          { title: "Approval mode", copy: "Human authorization required before execution. The fix is simulated and staged; a person clicks go." },
          { title: "Autonomous mode", copy: "Pre-approved action categories execute under policy, inside Arbiter's blast-radius and time-window limits." },
        ],
      },
      {
        type: "features",
        eyebrow: "Traceability",
        title: "The immutable receipts ledger",
        lede: "Verification for every action performed across infrastructure systems — five data points, sealed.",
        items: [
          { title: "Description", copy: "The action taken, in full." },
          { title: "Actor identity", copy: "User or agent ID — every action attributable." },
          { title: "Timestamp", copy: "Precision logs, sealed at action time." },
          { title: "Context", copy: "The system inputs behind the decision." },
          { title: "Result", copy: "The execution trace and verified outcome." },
          { title: "Chain position", copy: "Hash-linked to its predecessor — remove one link and the chain screams." },
        ],
      },
      {
        type: "features",
        eyebrow: "Compliance",
        title: "Alignment with security & compliance frameworks",
        items: [
          { title: "NIST alignment", copy: "Governance models oriented toward NIST standards — CSF 96/100 (self-assessed)." },
          { title: "FedRAMP ready", copy: "Operational controls designed for federal workloads, on the authorization pathway." },
          { title: "Zero trust", copy: "Alignment with modern infrastructure principles — no implicit trust, ever." },
          { title: "Change control", copy: "Immutable evidence for enterprise audit policies and CAB reviews." },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Deployment",
        title: "Secure deployment models",
        lede: "Flexible options for organizational data-sovereignty requirements.",
        good: [
          "Local / on-prem — the full stack on your hardware",
          "Hybrid cloud — split the loop across estates",
          "Private enterprise cloud — dedicated, isolated compute",
          "Air-gapped / restricted — Citadel runs with zero external dependencies",
        ],
      },
    ],
    ctaTitle: "Autonomous operations with built-in governance.",
    ctaLede: "Gain the benefits of automation without sacrificing security or accountability.",
  },
  {
    slug: "architecture",
    metaTitle: "Platform Architecture — How UAIO Is Built | iTechSmart",
    metaDescription:
      "Production-scale microservices, deterministic pipelines, governed execution, and a cryptographic ledger — deployed across cloud, on-prem, hybrid, and air-gapped estates.",
    keywords: ["UAIO architecture", "autonomous IT platform architecture", "air-gap inference"],
    eyebrow: "Platform architecture",
    title: "Designed like a product. Built like infrastructure.",
    lede: "UAIO runs on the same architecture we sell: production-scale microservices, deterministic pipelines, governed execution, and a cryptographic ledger — across cloud, on-prem, hybrid, and air-gapped environments.",
    actions: [
      { label: "Read the whitepaper", href: "/whitepaper" },
      { label: "Talk to engineering", href: "/contact", variant: "secondary" },
    ],
    blocks: [
      {
        type: "stats",
        eyebrow: "The numbers underneath",
        title: "We run what we sell.",
        items: [
          { value: "218", label: "Production containers" },
          { value: "88", label: "Microservices" },
          { value: "144", label: "SSL domains" },
          { value: "121,400+", label: "ProofLink receipts", note: "independently verifiable" },
        ],
      },
      {
        type: "steps",
        eyebrow: "Layer by layer",
        title: "From signal to sealed receipt.",
        items: [
          { title: "Layer 1 — Ingestion", copy: "Deterministic, Prometheus-first signal collection across cloud, on-prem, Kubernetes, Windows, and Linux." },
          { title: "Layer 2 — Cognition", copy: "OctoAI's engine: context, reasoning, confidence — with multi-tier model routing and air-gap inference." },
          { title: "Layer 3 — Governance", copy: "The Arbiter: policy gates, identity, approval chains, and digital-twin blast-radius simulation." },
          { title: "Layer 4 — Execution", copy: "Signed tasks via SSH, APIs, and WinRM — staged manual, approval, or autonomous, per policy." },
          { title: "Layer 5 — Proof", copy: "ProofLink seals every outcome: SHA-256, Ed25519, hash-chained, OTS-anchored to Bitcoin." },
        ],
      },
      {
        type: "features",
        eyebrow: "Deploy anywhere",
        title: "Your environment is the requirement.",
        items: [
          { title: "Multi-cloud", copy: "Azure, AWS, GCP, and Kubernetes — one playbook system across all of it." },
          { title: "On-prem & hybrid", copy: "Bare metal to hybrid estates, with tenant isolation for multi-client operators." },
          { title: "Air-gapped", copy: "Citadel runs the full platform with zero external dependencies — including local inference." },
        ],
      },
    ],
    ctaTitle: "Will you be able to prove what happened?",
    ctaLede: "No sales deck. Just a live walkthrough of your environment.",
  },
  {
    slug: "pilot",
    metaTitle: "30-Day Verified Autonomous IT Pilot | iTechSmart",
    metaDescription:
      "Prove autonomous IT value in 30 days with cryptographic receipts your team can verify. Clear pilot pricing from $699/mo — book a 30-minute discovery call.",
    keywords: ["autonomous IT pilot", "AIOps pilot", "proof of concept autonomous operations"],
    eyebrow: "30-day verified autonomous IT pilot",
    title: "Stop trusting your AIOps. Start verifying it.",
    lede: "Every autonomous action iTechSmart takes generates a cryptographic receipt — publicly verifiable, Bitcoin-anchored, tamper-proof. Not dashboards. Proof.",
    actions: [
      { label: "Start a 30-day pilot", href: "https://calendly.com/djuane-itechsmart/new-meeting" },
      { label: "Verify the ledger", href: "https://verify.itechsmart.dev", variant: "secondary" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "How the pilot works",
        title: "Three steps to receipts your team can check.",
        items: [
          { title: "We deploy the overlay", copy: "iTechSmart connects to your existing IT stack without rip-and-replace. Monitoring, ITSM, and infrastructure tools stay in place." },
          { title: "You watch it work", copy: "The platform detects incidents, simulates blast radius, recommends or executes remediation — humans stay in the loop wherever approval is required." },
          { title: "You get cryptographic proof", copy: "Every action produces a ProofLink receipt with a SHA-256 hash chain and public verification at verify.itechsmart.dev." },
        ],
      },
      {
        type: "stats",
        eyebrow: "Trust signals",
        title: "Built for buyers who need evidence.",
        items: [
          { value: "$699/mo", label: "Clear pilot pricing", note: "MSP tier — no hidden dashboard fees" },
          { value: "121,400+", label: "Receipts sealed", note: "90,000+ publicly verifiable" },
          { value: "86%", label: "MTTR reduction", note: "4.2h → 36 minutes" },
          { value: "172W2", label: "CAGE code", note: "SDVOSB · veteran-owned" },
        ],
      },
    ],
    ctaTitle: "Ready to prove autonomous IT in 30 days?",
    ctaLede: "Book a 30-minute discovery call. We'll confirm your environment, identify the safest pilot scope, and show exactly how ProofLink receipts will be reviewed.",
  },
];
