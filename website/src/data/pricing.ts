export type PricingTier = {
  name: string;
  badge?: string;
  price: string;
  cadence?: string;
  blurb: string;
  features: string[];
  notIncluded?: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

export type PricingCategory = {
  id: string;
  label: string;
  title: string;
  blurb: string;
  tiers: PricingTier[];
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "core",
    label: "Core Platform",
    title: "Core Platform — individuals & teams",
    blurb:
      "Essential tools for individuals and teams: dashboard, AI chat, task management, Script Vault, and Knowledge Base. Start free and upgrade when you need more.",
    tiers: [
      {
        name: "Free",
        price: "$0",
        cadence: "/mo",
        blurb: "For individuals getting started — no credit card required.",
        features: [
          "Dashboard access",
          "5 AI chat queries per day",
          "Limited AI tool usage (5/day)",
          "Task management",
          "Script Vault",
          "Knowledge Base",
          "Community support",
        ],
        notIncluded: ["Unlimited AI tools and queries", "Priority support"],
        cta: { label: "Start free", href: "/start" },
      },
      {
        name: "Pro",
        badge: "Most Popular",
        price: "$20",
        cadence: "/user/mo",
        blurb: "For IT professionals and growing teams — billed annually.",
        features: [
          "Everything in Free",
          "Unlimited AI tools and queries",
          "Advanced task management",
          "Priority support",
          "Full Script Vault access",
        ],
        cta: { label: "Go Pro", href: "/checkout/pro_individual" },
        highlight: true,
      },
      {
        name: "Team",
        price: "$60",
        cadence: "/mo · 5 users",
        blurb: "Base plan covers 5 users; +$12 per additional user/month.",
        features: [
          "Everything in Pro",
          "Team workspaces",
          "Shared Script Vault and Knowledge Base",
          "Centralized billing",
          "Role-based access",
        ],
        cta: { label: "Start Team", href: "/checkout/contact?product=core_team" },
      },
    ],
  },
  {
    id: "suite",
    label: "Suite",
    title: "iTechSmart Suite — the full UAIO platform",
    blurb:
      "Detect, simulate (Digital Twin), decide (OctoAI + Arbiter), remediate, and cryptographically prove every autonomous IT action (ProofLink).",
    tiers: [
      {
        name: "Suite Starter",
        price: "from $4,850",
        cadence: "/mo",
        blurb: "Up to 500 monitored endpoints.",
        features: [
          "Autonomous incident detection + remediation",
          "OctoAI cognitive engine",
          "ProofLink receipts (Growth plan included)",
          "Pulse security scanner",
          "REST API + MCP Server access",
          "Datadog / Wazuh / Prometheus integrations",
          "Email + Slack alerting",
          "Standard support (24h SLA)",
        ],
        notIncluded: ["Digital Twin simulation", "Supreme AI engine", "Citadel / FedRAMP features"],
        cta: { label: "Start Suite", href: "/checkout/suite_starter" },
      },
      {
        name: "Suite Professional",
        badge: "Most Popular",
        price: "from $15,730",
        cadence: "/mo",
        blurb: "Up to 2,500 endpoints, with the full simulation gate.",
        features: [
          "Everything in Starter",
          "Digital Twin blast-radius simulation",
          "Arbiter governance customization",
          "Multi-environment support",
          "Priority support (4h SLA)",
          "99.95% uptime SLA",
        ],
        cta: { label: "Start Suite Pro", href: "/checkout/suite_pro" },
        highlight: true,
      },
      {
        name: "Suite Enterprise",
        price: "$24,999",
        cadence: "/mo",
        blurb: "Unlimited endpoints, dedicated engineering.",
        features: [
          "Everything in Professional",
          "Unlimited endpoints",
          "Supreme AI engine included",
          "Dedicated solutions engineer",
          "24/7 escalation + 1h SLA",
          "99.99% uptime SLA",
        ],
        cta: { label: "Contact sales", href: "/checkout/contact?product=suite_enterprise" },
      },
    ],
  },
  {
    id: "msp",
    label: "MSP",
    title: "MSP editions — multi-tenant UAIO",
    blurb:
      "Governed autonomous operations with client-verifiable ProofLink receipts — built for SLA proof and ticket reduction across your whole book of business.",
    tiers: [
      {
        name: "MSP Starter",
        price: "from $699",
        cadence: "/mo",
        blurb: "Up to 50 endpoints across client tenants.",
        features: [
          "Multi-tenant UAIO core modules",
          "Governed autonomous operations",
          "Client-verifiable ProofLink receipts",
          "SLA proof for client reporting",
          "Ticket reduction analytics",
          "Recommended bundle templates",
        ],
        notIncluded: ["250-endpoint capacity", "Full Digital Twin"],
        cta: { label: "Talk to MSP sales", href: "/checkout/contact?product=msp_starter" },
      },
      {
        name: "MSP Plus",
        badge: "MSP Favorite",
        price: "from $2,799",
        cadence: "/mo",
        blurb: "Up to 250 endpoints across client tenants.",
        features: [
          "Everything in MSP Starter",
          "250 endpoints across tenants",
          "Digital Twin simulation",
          "Per-tenant policy customization",
          "Priority support",
        ],
        cta: { label: "Talk to MSP sales", href: "/checkout/contact?product=msp_plus" },
        highlight: true,
      },
    ],
  },
  {
    id: "supreme",
    label: "Supreme",
    title: "Supreme AI Engine — the add-on brain",
    blurb:
      "OSCAR KV-cache compression delivers 8× job throughput and 8× memory reduction on the same hardware. EpiCache episodic memory adds +40% accuracy at 3.5× lower peak memory — stacked on Nemotron Super 49B.",
    tiers: [
      {
        name: "Supreme Standard",
        price: "from $2,910",
        cadence: "/mo",
        blurb: "The full OSCAR + EpiCache stack for one environment.",
        features: [
          "8× throughput on existing hardware",
          "+40% accuracy via EpiCache episodic memory",
          "Nemotron Super 49B foundation",
          "No GPU upgrade required",
        ],
        cta: { label: "Add Supreme", href: "/checkout/supreme_standard" },
      },
      {
        name: "Supreme Pro",
        badge: "Maximum Intelligence",
        price: "from $5,700",
        cadence: "/mo",
        blurb: "Multi-environment Supreme with priority inference.",
        features: [
          "Everything in Standard",
          "Multi-environment deployment",
          "Priority inference lanes",
          "Advanced model routing",
        ],
        cta: { label: "Add Supreme Pro", href: "/checkout/supreme_pro" },
        highlight: true,
      },
      {
        name: "Supreme Enterprise",
        price: "Custom",
        blurb: "Fleet-scale inference with dedicated capacity.",
        features: ["Dedicated inference capacity", "Custom model tuning", "Named account engineering"],
        cta: { label: "Contact sales", href: "/checkout/contact?product=supreme_enterprise" },
      },
    ],
  },
  {
    id: "hl7",
    label: "HL7",
    title: "HL7 Healthcare IT — HIPAA-ready UAIO",
    blurb:
      "FHIR R4, Epic, and Cerner integration — ProofLink generates PHI-safe audit receipts for every autonomous clinical IT action. Custom pricing per environment.",
    tiers: [
      {
        name: "HL7 FHIR Starter",
        price: "Custom",
        blurb: "HIPAA-ready autonomous IT for clinics.",
        features: [
          "FHIR R4 bridge + HL7 v2/v3 parser",
          "HIPAA 89/100 compliance baseline",
          "Up to 250 healthcare endpoints",
          "EHR integration (basic connectors)",
          "ProofLink audit receipts (HIPAA mode)",
          "PHI-safe logging (no-PII chain)",
          "INC-20/INC-21 Windows endpoint monitoring",
        ],
        notIncluded: ["Epic EMR", "Cerner PowerChart", "HL7 ACK automation"],
        cta: { label: "Contact healthcare sales", href: "/checkout/contact?product=hl7_starter" },
      },
      {
        name: "HL7 Clinical Pro",
        badge: "HIPAA 100/100 (self-assessed)",
        price: "Custom",
        blurb: "Full clinical integration for hospital systems.",
        features: [
          "Everything in FHIR Starter",
          "Epic EMR + Cerner PowerChart integration",
          "HL7 ACK automation",
          "20-second interface remediation",
          "HIPAA 100/100 (self-assessed) posture",
        ],
        cta: { label: "Contact healthcare sales", href: "/checkout/contact?product=hl7_clinical" },
        highlight: true,
      },
      {
        name: "HL7 Enterprise",
        price: "Custom",
        blurb: "Multi-facility health-system deployments.",
        features: ["Everything in Clinical Pro", "Multi-facility federation", "Dedicated clinical solutions engineer"],
        cta: { label: "Contact healthcare sales", href: "/checkout/contact?product=hl7_enterprise" },
      },
    ],
  },
  {
    id: "citadel",
    label: "Citadel",
    title: "Citadel — federal & sovereign",
    blurb:
      "For DoD contractors, IC agencies, and sovereign IT environments. CAGE 172W2, SDVOSB, NIST AI RMF, FedRAMP pathway, air-gapped ProofLink.",
    tiers: [
      {
        name: "Citadel Standard",
        price: "from $7,999",
        cadence: "/mo cloud",
        blurb: "On-prem from $12,999/mo. CAGE 172W2 · SDVOSB.",
        features: [
          "NIST CSF 96/100 (self-assessed) baseline",
          "FedRAMP pathway documentation",
          "CMMC Level 2 mapping",
          "Air-gapped ProofLink chain option",
          "Up to 500 federal endpoints",
          "STIG-compliant deployment",
          "CAGE 172W2 + UEI ZCPFX4N86G36 on record",
        ],
        notIncluded: ["DoD IL4/IL5", "Classified network support"],
        cta: { label: "Contact federal sales", href: "/checkout/citadel_standard" },
        highlight: true,
      },
      {
        name: "Citadel DoD",
        badge: "IL4/IL5 Ready",
        price: "Custom",
        blurb: "DoD / DHS / IC agency deployments.",
        features: [
          "DoD IL4/IL5 deployment architecture",
          "Classified network support",
          "Full air-gap with local inference",
          "Sovereign ProofLink chain (no internet)",
        ],
        cta: { label: "Contact DoD sales", href: "/checkout/contact?product=citadel_dod" },
      },
    ],
  },
  {
    id: "onprem-1u",
    label: "On-Prem 1U",
    title: "On-Prem 1U appliance",
    blurb:
      "Physical rack-mount appliance: run the full iTechSmart stack on your hardware, in your facility, with zero cloud dependency. Hardware is one-time; software renews annually with 1 year of updates and support.",
    tiers: [
      {
        name: "1U Standard",
        price: "from $19,400",
        cadence: "/yr + $5,000 hw",
        blurb: "Single 1U appliance — 32GB RAM, 8-core.",
        features: [
          "Full UAIO Core software license",
          "500 endpoint capacity",
          "ProofLink on-prem chain (air-gap capable)",
          "1-year software updates",
          "Ubuntu 24.04, OVH-equivalent spec",
          "Installation guide + remote setup",
        ],
        notIncluded: ["HA failover", "GPU acceleration", "Citadel clearance"],
        cta: { label: "Order 1U Standard", href: "/checkout/onprem_1u_standard" },
      },
      {
        name: "1U Professional",
        badge: "Recommended",
        price: "from $38,800",
        cadence: "/yr + $8,000 hw",
        blurb: "HA-ready appliance pair with GPU option.",
        features: [
          "Everything in Standard",
          "HA failover configuration",
          "2,500 endpoint capacity",
          "GPU acceleration option",
          "Priority support",
        ],
        cta: { label: "Order 1U Pro", href: "/checkout/onprem_1u_pro" },
        highlight: true,
      },
      {
        name: "1U Enterprise",
        price: "from $77,600",
        cadence: "/yr + $12,000 hw",
        blurb: "Full-stack cluster with unlimited endpoints.",
        features: ["Everything in Professional", "Unlimited endpoints", "Supreme AI engine included", "Dedicated engineer"],
        cta: { label: "Order 1U Enterprise", href: "/checkout/onprem_1u_enterprise" },
      },
    ],
  },
  {
    id: "onprem-4u",
    label: "On-Prem 4U",
    title: "4U Citadel appliance — classified infrastructure",
    blurb:
      "Heavy-iron government-grade rack unit: air-gapped, STIG-hardened, IL4/IL5 ready. Requires a government procurement channel or SDVOSB set-aside; CAGE 172W2 on record for all orders.",
    tiers: [
      {
        name: "4U Citadel Standard",
        price: "Custom",
        blurb: "Gov/Defense — hardware + license quoted.",
        features: [
          "4U rack: 256GB RAM, 64-core",
          "Citadel Standard software license",
          "Full air-gap deployment",
          "Nemotron Super 49B local inference",
          "NIST CSF 96/100 (self-assessed) pre-configured",
          "FedRAMP boundary-ready architecture",
          "ProofLink sovereign chain (no internet)",
          "CMMC Level 2 mapping pre-applied",
        ],
        cta: { label: "Contact for 4U quote", href: "mailto:djuane@itechsmart.dev?subject=4U%20Citadel%20Standard" },
        highlight: true,
      },
      {
        name: "4U Citadel DoD / Sovereign",
        badge: "IL4/IL5 Ready",
        price: "Custom",
        blurb: "Classified networks and sovereign datacenters.",
        features: ["IL4/IL5 architecture", "Classified network support", "Sovereign jurisdiction options"],
        cta: { label: "Contact for sovereign pricing", href: "mailto:djuane@itechsmart.dev?subject=4U%20Citadel%20Sovereign" },
      },
    ],
  },
  {
    id: "datacenter",
    label: "Datacenter",
    title: "iTechSmart Datacenter — managed hosted cloud",
    blurb:
      "We run it. You own it. iTechSmart-managed infrastructure with your dedicated compute, private ProofLink chain, and the full Nemotron AI stack.",
    tiers: [
      {
        name: "DC Shared",
        price: "from $4,850",
        cadence: "/mo",
        blurb: "Dedicated compute in the iTechSmart DC.",
        features: [
          "Dedicated vCPU + RAM allocation (no noisy neighbors)",
          "iTechSmart-managed OVH DC infrastructure",
          "Full UAIO Suite Professional included",
          "Private ProofLink chain (isolated)",
          "Unlimited endpoints up to capacity",
          "Cloudflare Zero Trust gateway included",
          "99.95% uptime SLA · 4h support response",
        ],
        notIncluded: ["Dedicated bare-metal", "Sovereign jurisdiction"],
        cta: { label: "Get DC Shared", href: "/checkout/dc_shared" },
      },
      {
        name: "DC Private",
        badge: "Private Cloud",
        price: "from $14,550",
        cadence: "/mo",
        blurb: "Dedicated bare-metal, fully isolated.",
        features: [
          "Everything in Shared",
          "Dedicated bare-metal servers",
          "Hardware-level isolation",
          "Custom compliance posture",
        ],
        cta: { label: "Get DC Private", href: "/checkout/dc_private" },
        highlight: true,
      },
      {
        name: "DC Sovereign",
        price: "Custom",
        blurb: "Sovereign jurisdiction and data residency.",
        features: ["Jurisdiction of your choice", "Sovereign ProofLink chain", "Named account team"],
        cta: { label: "Contact for sovereign", href: "mailto:djuane@itechsmart.dev?subject=iTechSmart%20DC%20Sovereign" },
      },
    ],
  },
  {
    id: "white-label",
    label: "White Label",
    title: "White Label — sell UAIO under your brand",
    blurb:
      "Your portal. Your clients. iTechSmart handles the AI, infrastructure, and compliance so you close deals and collect margin.",
    tiers: [
      {
        name: "White Label Starter",
        price: "from $1,940",
        cadence: "/mo",
        blurb: "Up to 25 client tenants, fully isolated.",
        features: [
          "Your logo, domain, and colors",
          "25 client tenants (isolated)",
          "Branded client portal",
          "Per-client ProofLink receipt chain",
          "UAIO Core engine behind your brand",
          "Partner API access",
          "Onboarding playbook + templates",
        ],
        notIncluded: ["Custom SLA per client", "SOC 2 docs package"],
        cta: { label: "Start White Label", href: "/checkout/wl_starter" },
        highlight: true,
      },
      {
        name: "White Label Pro",
        badge: "Full Resale Rights",
        price: "Custom",
        blurb: "Unlimited client tenants, full resale rights.",
        features: [
          "Unlimited client tenants",
          "Full UAIO Suite behind your brand",
          "Full resale rights",
          "Custom SLA per client",
          "SOC 2 documentation package",
        ],
        cta: { label: "Contact partnerships", href: "/checkout/contact?product=wl_pro" },
      },
    ],
  },
  {
    id: "gohighlevel",
    label: "GoHighLevel",
    title: "GoHighLevel bundles — CRM + marketing",
    blurb: "Bundled discounts available with UAIO plans. Standalone reseller pricing 3% below direct.",
    tiers: [
      {
        name: "GHL Bundle",
        price: "Custom",
        blurb: "GoHighLevel standalone or bundled with any UAIO plan.",
        features: ["Bundled discount with UAIO plans", "Reseller pricing 3% below direct", "Setup and migration support"],
        cta: { label: "Contact sales", href: "/checkout/contact?product=ghl_bundle" },
        highlight: true,
      },
    ],
  },
  {
    id: "api",
    label: "Fast API",
    title: "Fast API — developer access",
    blurb:
      "Direct API access to the UAIO platform. Wire any LangGraph, CrewAI, or AutoGen agent into iTechSmart governance and proof in minutes.",
    tiers: [
      {
        name: "API Starter",
        price: "from $485",
        cadence: "/mo",
        blurb: "1,000,000 API calls per month.",
        features: [
          "REST API at api.itechsmart.dev/v1",
          "ProofLink verification endpoints",
          "Incident state + platform status",
          "Standard auth (JWT)",
          "Python + TypeScript SDKs",
          "99.9% uptime SLA",
        ],
        notIncluded: ["MCP Server tools", "A2A Protocol", "Webhooks"],
        cta: { label: "Get API Starter", href: "/checkout/api_starter" },
      },
      {
        name: "API Pro",
        badge: "Most Used",
        price: "from $970",
        cadence: "/mo",
        blurb: "10,000,000 API calls per month.",
        features: [
          "Full REST API access (all 95 routes)",
          "MCP Server tools",
          "A2A Protocol (Beta)",
          "Webhooks",
          "10,000 req/min rate limit",
        ],
        cta: { label: "Get API Pro", href: "/checkout/api_pro" },
        highlight: true,
      },
      {
        name: "API Enterprise",
        price: "Custom",
        blurb: "Unlimited calls, dedicated infrastructure.",
        features: ["Unlimited API calls", "Dedicated rate limits", "Named engineering support"],
        cta: { label: "Contact sales", href: "/checkout/contact?product=api_enterprise" },
      },
    ],
  },
  {
    id: "prooflink",
    label: "ProofLink",
    title: "ProofLink membership — join the proof economy",
    blurb:
      "Access the public ledger. Verify any receipt. Show your auditors proof — not promises. Every subscriber gets a live verify.itechsmart.dev link, shareable with any auditor without calling us.",
    tiers: [
      {
        name: "Basic Member",
        price: "from $499",
        cadence: "/year",
        blurb: "The entry into receipt-sealed operations.",
        features: [
          "Member per-receipt pricing",
          "Growth flat-rate receipt plan",
          "10,000 receipts free",
          "SDK access (Python + TS)",
          "Public ProofLink chain",
        ],
        notIncluded: ["Compliance flat rate", "EU AI Act doc package", "SLA + named account"],
        cta: { label: "Get started", href: "/checkout/prooflink_basic" },
      },
      {
        name: "Pro Member",
        badge: "Most Popular",
        price: "from $1,499",
        cadence: "/year",
        blurb: "Compliance-grade receipts with the EU AI Act pack.",
        features: [
          "Everything in Basic",
          "Compliance flat-rate receipt plan",
          "EU AI Act documentation package",
          "Priority verification endpoints",
        ],
        cta: { label: "Go Pro Member", href: "/checkout/prooflink_pro" },
        highlight: true,
      },
      {
        name: "Elite Member",
        price: "from $3,499",
        cadence: "/year",
        blurb: "Enterprise flat rate with named support.",
        features: ["Everything in Pro", "Enterprise flat-rate receipts", "SLA + named account engineer"],
        cta: { label: "Go Elite", href: "/checkout/prooflink_elite" },
      },
    ],
  },
];
