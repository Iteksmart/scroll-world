export type FaqCategory = {
  id: string;
  label: string;
  items: { q: string; a: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "about",
    label: "About iTechSmart",
    items: [
      {
        q: "What is iTechSmart?",
        a: "iTechSmart is an enterprise-grade Unified Autonomous IT Operations (UAIO) platform that consolidates infrastructure management, AI-driven operations, security compliance, and cryptographic auditability into a single pane of glass. It runs a containerized production fleet, publishes live infrastructure counts at verify.itechsmart.dev, and is a Service-Disabled Veteran-Owned Small Business (SDVOSB) with CAGE code 172W2 and UEI ZCPFX4N86G36.",
      },
      {
        q: "What does UAIO stand for?",
        a: "Unified Autonomous IT Operations — the all-in-one category converging monitoring, AI reasoning, compliance auditing, container orchestration, and governance into one platform that detects, fixes, verifies, and cryptographically proves its own work.",
      },
      {
        q: "How is iTechSmart different from AIOps platforms?",
        a: "AIOps is log aggregation plus anomaly detection — a human still executes the fix. iTechSmart adds the five-phase autonomic loop (Sense → Analyze → Decide → Act → Verify), cryptographic ProofLink receipts for every action, and the OctoAI 8-agent cognitive engine that actually performs governed remediation.",
      },
    ],
  },
  {
    id: "platform",
    label: "Platform & Technology",
    items: [
      {
        q: "What is the five-phase autonomic loop?",
        a: "Sense (telemetry ingestion), Analyze (AI pattern recognition), Decide (risk-weighted action selection), Act (automated remediation), Verify (cryptographic proof). Every cycle produces a ProofLink receipt.",
      },
      {
        q: "What is a cryptographic ProofLink receipt?",
        a: "A SHA-256 signed record generated after every meaningful action, capturing what happened, when, why, and the resulting state — anchored to a verification endpoint. Validate any receipt at verify.itechsmart.dev; more than 90,000 verified receipts sit on the tamper-evident chain.",
      },
      {
        q: "What is the Pulse Scanner?",
        a: "A free infrastructure health scanner covering security posture, uptime, SSL certificate status, DNS configuration, and performance. You get a scored report in minutes with no credit card — it's the entry point to UAIO.",
      },
      {
        q: "What is OctoAI?",
        a: "The 8-agent cognitive engine at the heart of the platform. Agents specialize — security, performance, compliance, cost optimization, and more — and collaborate through a shared reasoning layer, governed by the Arbiter policy module.",
      },
      {
        q: "What is Arbiter?",
        a: "The policy enforcement layer above OctoAI. It defines operational boundaries, prevents conflicting autonomous actions, and enforces the human approval gates your policies require.",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Compliance",
    items: [
      {
        q: "What compliance standards does iTechSmart support?",
        a: "NIST CSF 96/100 and HIPAA 100/100 (self-assessed), with SOC 2 controls and continuous compliance enforcement. Every control state is backed by a ProofLink receipt rather than a screenshot.",
      },
      {
        q: "Is iTechSmart FedRAMP authorized?",
        a: "iTechSmart is on the FedRAMP authorization pathway. The architecture was designed with FedRAMP in mind — FIPS 140-2 encryption, continuous monitoring, and incident response automation.",
      },
      {
        q: "How does the platform handle security threats?",
        a: "The OctoAI security agent monitors containers and databases for anomalies, unauthorized access, and vulnerabilities. The five-phase loop responds autonomously under policy and receipts the full incident chain.",
      },
      {
        q: "How is tenant isolation handled?",
        a: "Each tenant runs in a fully isolated namespace with dedicated compute, storage, and network — no shared database or runtime. Arbiter enforces isolation, and receipts verify no cross-tenant leakage.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Plans",
    items: [
      {
        q: "How much does iTechSmart cost?",
        a: "Pricing is based on the scope of infrastructure under management and feature tier — from the free Pulse scanner and a $0 Core plan up to enterprise suites. See the pricing page for published tiers, or book a discovery call for a custom quote.",
      },
      {
        q: "Is there a free tier?",
        a: "Yes. The Pulse Scanner is completely free with no credit card — an instant health assessment covering security, performance, SSL, and DNS. The Core Free plan adds dashboard access and daily AI queries.",
      },
      {
        q: "Do you offer government or nonprofit pricing?",
        a: "Yes — discounts for government agencies, educational institutions, and registered nonprofits, structured for federal procurement including GSA Schedule and sole-source SDVOSB set-asides (CAGE 172W2, UEI ZCPFX4N86G36).",
      },
      {
        q: "What does the Enterprise plan include?",
        a: "Full OctoAI 8-agent autonomy, unlimited ProofLink receipt generation with long-term archival, Arbiter governance customization, dedicated support engineering, and SLA-backed response times.",
      },
    ],
  },
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      {
        q: "How do I get started?",
        a: "Run the free Pulse scan at itechsmart.dev/pulse — you'll have a scored report in under five minutes. From there, book a discovery call or sign up for a proof of concept.",
      },
      {
        q: "How long does deployment take?",
        a: "A standard UAIO cloud deployment is operational within 48–72 hours. Air-gapped and on-premise deployments typically take one to two weeks.",
      },
      {
        q: "What integrations are available?",
        a: "Cloud: AWS, Azure, GCP. Orchestrators: Kubernetes, Docker Swarm. CI/CD: GitHub Actions, GitLab CI, Jenkins. Monitoring: Prometheus, Grafana, Datadog. Identity: Okta, Azure AD, SAML. Anything else connects via the platform API.",
      },
      {
        q: "Do you offer a proof of concept?",
        a: "Yes — a structured 30-day POC against a subset of your infrastructure, with full access to OctoAI, ProofLink receipts, and compliance scoring, a dedicated solutions engineer, and a final before/after report.",
      },
      {
        q: "What support is included?",
        a: "All paid plans include engineering support with severity-based response times. Enterprise adds a dedicated solutions engineer, 24/7 escalation, and a direct Slack or Teams channel.",
      },
    ],
  },
  {
    id: "company",
    label: "Company & Investment",
    items: [
      {
        q: "Has iTechSmart been ranked or recognized?",
        a: "Ranked #6 on F6S out of 2M+ startups globally, a member of the NVIDIA Inception Program, and cataloged on Wikidata under identifier Q139119831.",
      },
      {
        q: "Is iTechSmart seeking funding?",
        a: "We're open to strategic investment conversations. The platform was bootstrapped to production scale — a multi-hundred-container fleet, databases, SSL domains, and a live receipt ledger — demonstrating capital efficiency. Investors can book directly via Calendly.",
      },
      {
        q: "Where is iTechSmart headquartered?",
        a: "Newark, Delaware — supporting work across commercial enterprise, federal government, and defense sectors.",
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((c) => c.items);
