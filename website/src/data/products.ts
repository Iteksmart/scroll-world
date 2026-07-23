export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: "core" | "intelligence" | "security" | "operations" | "hardware";
  features: { title: string; copy: string }[];
  stats?: { value: string; label: string }[];
  /** Featured products get large bento tiles on / and /suite. */
  featured?: boolean;
  free?: boolean;
};

export const products: Product[] = [
  {
    slug: "uaio",
    name: "UAIO Platform",
    tagline: "Detect, decide, do, prove",
    summary:
      "Unified Autonomous IT Operations: one system that observes, reasons, executes governed remediation, and proves every action with immutable receipts.",
    category: "core",
    featured: true,
    features: [
      {
        title: "Observability that states facts",
        copy: "Deterministic, signal-first detection across the full stack. Facts, not noise — the alert is the input, and the verified fix is the output.",
      },
      {
        title: "Reasoning with confidence scores",
        copy: "AI root-cause analysis with confidence scores and simulated fixes. No black boxes — every decision shows its work.",
      },
      {
        title: "Governed automation",
        copy: "Autonomous execution inside policy gates you control: manual → approval → full auto. Nothing runs outside policy.",
      },
      {
        title: "Immutable receipts",
        copy: "Hash-chained cryptographic proof of every action, anchored to Bitcoin. The part nobody else has.",
      },
      {
        title: "Simulated before executed",
        copy: "Fixes are rehearsed against a Digital Twin before touching production — 98% blast-radius accuracy, thousands of simulations per fix.",
      },
      {
        title: "Built for regulated estates",
        copy: "SDVOSB (CAGE 172W2, UEI ZCPFX4N86G36), FISMA-aligned logging, air-gapped Citadel tier, and EU AI Act Article 12 compliance by architecture.",
      },
    ],
    stats: [
      { value: "−86%", label: "MTTR — from 4.2 hours to 36 minutes" },
      { value: "87%", label: "autonomous-resolution target" },
      { value: "121,400+", label: "receipts sealed" },
      { value: "90,000+", label: "publicly verifiable" },
    ],
  },
  {
    slug: "prooflink",
    name: "ProofLink",
    tagline: "The AI accountability layer",
    summary:
      "Every AI action sealed as a SHA-256, Ed25519-signed receipt, hash-chained and Bitcoin-anchored via OpenTimestamps — publicly verifiable, no account required.",
    category: "core",
    featured: true,
    features: [
      {
        title: "A running ledger, not a PDF",
        copy: "Every other AI-accountability standard is a spec document. ProofLink is live in production: 121,400+ receipts sealed, 90,000+ publicly verifiable right now.",
      },
      {
        title: "Five questions, one receipt",
        copy: "WHAT, WHEN, WHERE, WHY, WHO — every autonomous action answers all five at the moment of execution, with a confidence score attached.",
      },
      {
        title: "Tamper one, the rest break",
        copy: "Each receipt hashes to the next and the chain terminates in Bitcoin via OpenTimestamps. Not even iTechSmart can rewrite history.",
      },
      {
        title: "Verify without an account",
        copy: "Paste any receipt ID at verify.itechsmart.dev. Recompute the hash, re-derive the canonical form, check the Ed25519 signature yourself. No NDA, no trust required.",
      },
      {
        title: "EU AI Act Article 12, by architecture",
        copy: "Automatic, tamper-evident logging becomes law on August 2, 2026 — €15M or 3% of global turnover. Your ELK stack doesn't qualify. This does.",
      },
      {
        title: "Connect anything, prove everything",
        copy: "66 MCP tools at mcp.itechsmart.dev, REST at api.itechsmart.dev, Python and TypeScript SDKs, plus connectors for AWS, Kubernetes, Prometheus, ServiceNow, Splunk, and Wazuh. Every connected action seals a receipt.",
      },
    ],
    stats: [
      { value: "121,400+", label: "receipts sealed" },
      { value: "90,000+", label: "publicly verifiable" },
      { value: "2,100+", label: "v3 strict-verifiable receipts" },
      { value: "86%", label: "faster MTTR" },
    ],
  },
  {
    slug: "prooflink-ai",
    name: "ProofLink AI",
    tagline: "Talk to iTechSmart",
    summary:
      "iTechSmart's voice-enabled assistant. Ask anything about the UAIO platform, ProofLink receipts, products, or pricing — type or speak, and hear replies aloud.",
    category: "intelligence",
    features: [
      {
        title: "Talk or type — it speaks back",
        copy: "Voice input from the mic, spoken replies from the speaker toggle. Ask a question out loud and hear the answer read back.",
      },
      {
        title: "Four personas",
        copy: "Oracle, Sentinel, Cipher, and Aegis — switchable voice and visual personas wrapped around the same grounded assistant.",
      },
      {
        title: "Grounded in the platform",
        copy: "Answers about UAIO, ProofLink cryptographic receipts, products, and pricing — powered by the iTechSmart NGC chain.",
      },
      {
        title: "Honest fine print",
        copy: "'AI can make mistakes' is printed right under the input. Evidence-first applies to our own assistant too.",
      },
    ],
  },
  {
    slug: "prooflinkplus",
    name: "ProofLinkPlus",
    tagline: "Article 12 record-keeping for your AI",
    summary:
      "ProofLink proves iTechSmart's own actions. ProofLinkPlus proves yours — a tamper-evident, cryptographically signed ledger for the LLM transactions inside any high-risk AI app, built for EU AI Act Article 12 automated record-keeping.",
    category: "security",
    features: [
      {
        title: "A separate product, an isolated ledger",
        copy: "Your AI app — the one calling OpenAI, Anthropic, or any other model — sends each LLM transaction to ProofLinkPlus, which seals it into a tamper-evident, signed record in your own tenant-isolated ledger.",
      },
      {
        title: "Seal → Chain → Anchor → Verify",
        copy: "Each transaction (prompt, model, response metadata) becomes an Ed25519-signed, hash-chained receipt, anchored via OpenTimestamps so existence and order cannot be backdated — and independently verifiable by an auditor who trusts neither you nor us.",
      },
      {
        title: "Built for high-risk AI teams",
        copy: "Where 'we kept some logs' is not enough and an auditor has to reconstruct exactly what the AI did — Article 12's automated, tamper-evident logging, as tooling.",
      },
      {
        title: "Honest scope",
        copy: "ProofLinkPlus is record-keeping tooling — not a guarantee of full EU AI Act compliance, which also requires risk management, data governance, human oversight, and documentation. It records real capabilities only.",
      },
      {
        title: "Live today",
        copy: "The ledger is live at prooflinkplus.itechsmart.dev — see it, and verify a receipt yourself.",
      },
    ],
    stats: [
      { value: "Ed25519", label: "signed, hash-chained receipts" },
      { value: "OTS", label: "OpenTimestamps anchoring" },
    ],
  },
  {
    slug: "pulse",
    name: "Pulse",
    tagline: "The free 60-second scan",
    summary:
      "A free scan that finds issues in 60 seconds, watches the system fix them, and seals a cryptographic receipt proving what was found. No account required.",
    category: "operations",
    featured: true,
    free: true,
    features: [
      {
        title: "Seven live scenarios",
        copy: "Security scan, rogue CPU process, memory pressure, disk-space threshold, service down, cascading-alert correlation, and live self-healing — each runs in seconds.",
      },
      {
        title: "Self-healing, proven live",
        copy: "Kill a critical container and watch Nemotron detect the failure, restart it, verify health, and generate a ProofLink receipt — fully autonomously.",
      },
      {
        title: "One binary, zero dependencies",
        copy: "Windows .exe (8 MB), macOS .command (6 KB), Linux .sh (7 KB), or one curl | bash. Runs locally — no data is collected.",
      },
      {
        title: "Select, detect, remediate, prove",
        copy: "Signal Cortex ingests telemetry, Reasoning Cortex builds the action plan, the agent executes it, and every action is hashed into a tamper-proof receipt.",
      },
      {
        title: "Your first receipt is yours to keep",
        copy: "No credit card, no account. Run the scan, keep the receipt, verify it at verify.itechsmart.dev.",
      },
    ],
    stats: [
      { value: "60s", label: "from download to first finding" },
      { value: "$0", label: "free — no account, no card" },
    ],
  },
  {
    slug: "octoai",
    name: "OctoAI",
    tagline: "The 8-agent cognitive engine",
    summary:
      "The cognitive engine behind every UAIO decision: eight specialized agents across seven layers analyze, decide, and drive action in real time. No black boxes.",
    category: "intelligence",
    featured: true,
    features: [
      {
        title: "Eight specialized agents",
        copy: "Logic, Physics, Systems, Code, Knowledge, Strategy, Creative, Reflect — an agent hive that reasons together on every incident.",
      },
      {
        title: "Seven cognitive layers",
        copy: "Signal Cortex, Agent Hive, Reasoning Cortex, Context + Memory, Synthesis Core, Action Engine, Verification Layer — L1 to L7, deterministic where it counts.",
      },
      {
        title: "Governed by Arbiter",
        copy: "Every decision passes a policy gate before execution. Staged remediation — manual → approval → autonomous — with full audit logging of every action taken.",
      },
      {
        title: "Closes the loop",
        copy: "Most AI-for-IT tools observe. OctoAI understands the issue, decides what should happen, drives autonomous resolution, and verifies the outcome.",
      },
      {
        title: "Receipted, always",
        copy: "Every action generates a cryptographically verifiable receipt of exactly what was done, when, and why.",
      },
      {
        title: "Learns from every incident",
        copy: "Outcomes feed back into the decision models — refining, adapting to your environment, and improving with every resolution.",
      },
    ],
    stats: [
      { value: "8", label: "specialized cognitive agents" },
      { value: "7", label: "cognitive layers (L1–L7)" },
      { value: "87%", label: "autonomous-resolution target" },
      { value: "90,000+", label: "receipts sealed, publicly verifiable" },
    ],
  },
  {
    slug: "hermes",
    name: "Hermes",
    tagline: "The agent-coalition command center",
    summary:
      "A live command center for iTechSmart's coalition of 90 agents — platform, sales, engineering, security, and docs — with every agent action receipted on ProofLink.",
    category: "intelligence",
    features: [
      {
        title: "90 agents, one roster",
        copy: "Platform, sales, engineering, security, and docs agents — from incident-commander and threat-hunter to doc-sentinel — visible and directable from a single screen.",
      },
      {
        title: "Live activity stream",
        copy: "Watch the coalition work in real time. DM a single agent or broadcast to all of them from the composer.",
      },
      {
        title: "Receipts, not vibes",
        copy: "8,219+ ProofLink receipts sealed by the coalition, independently verifiable, alongside a 96/100 NIST CSF score.",
      },
      {
        title: "Demo mode by default",
        copy: "Explore with simulated responses out of the box, then connect your own Hermes API or Slack webhook to go live.",
      },
    ],
    stats: [
      { value: "90", label: "agents in the coalition" },
      { value: "8,219+", label: "receipts sealed by agents" },
    ],
  },
  {
    slug: "citadel",
    name: "Citadel",
    tagline: "Sovereign, air-gapped UAIO",
    summary:
      "Security-hardened, AI-native UAIO for critical infrastructure: sovereign, air-gap ready, with post-quantum cryptography and an AI-native Arbiter enforcing zero trust.",
    category: "security",
    features: [
      {
        title: "Two deployment models",
        copy: "Cloud Edition on AWS, Azure, GCP, or private cloud with full Helm and GitOps support — or a 4U on-prem appliance: hardened, encrypted, pre-configured to run with zero external dependencies.",
      },
      {
        title: "Post-quantum identity",
        copy: "OpenQuantumSafe for post-quantum secure authentication, passwordless WebAuthn (FIDO2) login, and optional HSM/TPM hardware backing.",
      },
      {
        title: "Immutable base",
        copy: "A declarative, tamper-resistant OS layer (Fedora CoreOS or NixOS) with containers on Docker, Podman, or Kubernetes.",
      },
      {
        title: "Full SIEM stack, integrated",
        copy: "Wazuh, Suricata, Arkime, OSQuery, and TheHive — detection through forensics through response, wired in from day one.",
      },
      {
        title: "AI-native log analysis",
        copy: "Weaviate vector search plus local vLLM inference for semantic search, anomaly detection, and contextual log analysis. Insights, not just logs.",
      },
      {
        title: "Zero trust everywhere",
        copy: "WireGuard tunnels, FRRouting SD-WAN, Calico or Istio service mesh, MinIO encrypted storage, Vault-managed secrets — end-to-end segmentation by default.",
      },
    ],
  },
  {
    slug: "itsm",
    name: "ITSM",
    tagline: "Every incident, cryptographically receipted",
    summary:
      "IT service management with a hash-chained audit trail: every incident created, updated, escalated, or resolved seals a ProofLink receipt anyone can verify.",
    category: "operations",
    features: [
      {
        title: "Incident intake, receipted",
        copy: "POST /api/v1/incidents accepts title, description, severity, assignee, and tenant — and seals an incident_created receipt the moment the ticket exists.",
      },
      {
        title: "Multi-tenant by default",
        copy: "Every incident scoped to a tenant_id, with cross-tenant queries filtered at the API layer. Postgres-backed for predictable performance at scale.",
      },
      {
        title: "Live to Supreme",
        copy: "Incidents flow straight into the autonomous remediation loop — severity and context drive auto-vs-manual routing, with 5 decision-point receipts per remediation.",
      },
      {
        title: "Auditors verify, not trust",
        copy: "Every ITSM action is on the public ledger. Pull the JSON, verify the hash chain, recompute the SHA-256 yourself at verify.itechsmart.dev.",
      },
      {
        title: "Live API surface",
        copy: "REST plus WebSocket at itsm.itechsmart.dev: health checks, paginated listing and filtering, create, update with auditable diffs, and a /ws live activity stream.",
      },
    ],
    stats: [
      { value: "716+", label: "receipts on chain from system:itsm" },
      { value: "5", label: "receipts sealed per remediation" },
    ],
  },
  {
    slug: "shield",
    name: "Shield",
    tagline: "The AI-content detector that proves it",
    summary:
      "A free browser extension that flags AI-generated text in real time and seals every detection to your ProofLink audit trail — 100% client-side.",
    category: "security",
    features: [
      {
        title: "Multi-signal detection",
        copy: "Perplexity, burstiness, and watermark analysis run directly in your browser, with confidence scores highlighted inline.",
      },
      {
        title: "Nothing leaves your device",
        copy: "No upload required. Detection is 100% client-side — only the sealed receipt reaches your ledger.",
      },
      {
        title: "Receipts for compliance",
        copy: "Every detection sealed to your ProofLink ledger: SHA-256 chained, timestamped, exportable for compliance reports.",
      },
      {
        title: "Zero config",
        copy: "Install once on Chrome, Edge, or Arc. Shield runs silently in the background; activate on any page with a single click.",
      },
    ],
    stats: [
      { value: "100%", label: "client-side — no data leaves your device" },
      { value: "$0", label: "free — no subscription" },
    ],
  },
  {
    slug: "supreme",
    name: "Supreme",
    tagline: "The AI remediation engine",
    summary:
      "The AI engine inside UAIO: detects, diagnoses, and resolves incidents autonomously on Nemotron Super 49B with OSCAR and EpiCache — then hands you the receipt.",
    category: "operations",
    features: [
      {
        title: "Detect, diagnose, resolve",
        copy: "Streams alerts from Prometheus, Wazuh, and the rest of your stack; diagnoses root cause with system context and history; executes the fix — with approval or fully autonomous, per your policy.",
      },
      {
        title: "Governed by Arbiter",
        copy: "Every autonomous action is governed by the Arbiter, iTechSmart's AI governance layer, for safety, policy compliance, and human-in-the-loop trust.",
      },
      {
        title: "OSCAR: 8x throughput",
        copy: "KV-cache compression delivers 8x job throughput and 8x memory reduction on the same hardware. No GPU upgrade required.",
      },
      {
        title: "EpiCache: +40% accuracy",
        copy: "Episodic memory adds 40% accuracy at 3.5x lower peak memory, stacked on Nemotron Super 49B.",
      },
      {
        title: "Safe command execution",
        copy: "Secure SSH, WinRM, or Netmiko, with all actions sandboxed and logged. Run cloud AI or a local instance for full data sovereignty and air-gapped operations.",
      },
      {
        title: "Simulated before it ships",
        copy: "Digital Twin simulation at 98% blast-radius accuracy — fixes are rehearsed before they touch production.",
      },
    ],
    stats: [
      { value: "8x", label: "job throughput with OSCAR" },
      { value: "+40%", label: "accuracy with EpiCache" },
      { value: "98%", label: "Digital Twin blast-radius accuracy" },
      { value: "86%", label: "MTTR reduction vs baseline" },
    ],
  },
  {
    slug: "aiis",
    name: "AIIS",
    tagline: "How UAIO thinks",
    summary:
      "Autonomous Infrastructure Intelligence System — the cognitive pipeline that ingests telemetry, maps root cause, ranks remediation paths, and drives execution before a human opens a ticket.",
    category: "intelligence",
    features: [
      {
        title: "Seven layers, signal to proof",
        copy: "Signal ingestion, pattern recognition, root-cause mapping, decision ranking, governance gate, execution handoff, proof generation — each autonomous, each auditable.",
      },
      {
        title: "Root cause, not symptoms",
        copy: "Traces dependencies across the service graph to find the actual source, then ranks remediation paths by risk score, blast radius, and confidence.",
      },
      {
        title: "The Arbiter gate",
        copy: "Layer 5 routes every decision through the Arbiter for policy compliance before any action executes.",
      },
      {
        title: "Not an LLM wrapper",
        copy: "LLMs generate text. AIIS generates decisions — from live infrastructure telemetry, with governance gates and a cryptographic receipt for every decision, including rejected alternatives.",
      },
      {
        title: "Phase 3 of the loop",
        copy: "Pulse detects, Digital Twin simulates, AIIS and OctoAI decide, the Suite fixes, ProofLink proves, and the loop learns.",
      },
    ],
    stats: [
      { value: "7", label: "cognitive layers, signal to proof" },
      { value: "6", label: "phases in the UAIO loop it powers" },
    ],
  },
  {
    slug: "aicp",
    name: "AICP",
    tagline: "Autonomous IT with Cryptographic Proof",
    summary:
      "The software category iTechSmart created: detect IT failures, remediate autonomously, and seal every action with a SHA-256 receipt anchored to Bitcoin. Forever verifiable.",
    category: "security",
    features: [
      {
        title: "Four criteria, all required",
        copy: "Detect autonomously, remediate without intervention, receipt every action, anchor to public infrastructure. Partial automation is not AICP.",
      },
      {
        title: "Receipts, not logs",
        copy: "Logs can be edited, deleted, or never written. AICP receipts are generated at execution time and Bitcoin-anchored via OpenTimestamps — no retroactive edits, by anyone.",
      },
      {
        title: "When the board asks 'how do you know?'",
        copy: "Without AICP, you can't answer. With AICP, you hand them a URL.",
      },
      {
        title: "Built for regulated stacks",
        copy: "HIPAA and HL7 traceability for healthcare, immutable FedRAMP, FISMA, and CMMC audit trails for government, and per-client proof for MSPs — without an army of analysts.",
      },
      {
        title: "Invented in production",
        copy: "\"We didn't discover AICP on a whiteboard. We built it, deployed it, and proved it in production.\" — DJuane Jackson, CEO & Founder, 24-year U.S. Army veteran.",
      },
    ],
    stats: [
      { value: "218", label: "containers in production" },
      { value: "90,000+", label: "receipts anchored, publicly verifiable" },
      { value: "96/100", label: "NIST CSF (self-assessed)" },
      { value: "<60s", label: "to your first receipt via Pulse" },
    ],
  },
  {
    slug: "gsm",
    name: "GSM",
    tagline: "Your infrastructure just fixed itself",
    summary:
      "The UAIO loop in production: incidents detected and resolved autonomously in seconds, with cryptographic proof auditors verify independently. No tickets. No 2 AM pages.",
    category: "operations",
    features: [
      {
        title: "The 2:47 AM story",
        copy: "A container crashed in production. Detected at 02:47:03, fix simulated by 02:47:09, executed at 02:47:21, receipt sealed at 02:47:34. Downtime: 31 seconds. Humans involved: zero.",
      },
      {
        title: "One closed loop",
        copy: "Detect → Decide → Fix → Prove. Real-time signal ingestion across cloud, on-prem, and Kubernetes — deterministic, no black-box guessing.",
      },
      {
        title: "Simulated before executed",
        copy: "Every fix is tested against a digital twin before it touches production, then runs inside guardrails you set: manual → approval → full auto.",
      },
      {
        title: "No logs. No screenshots. Just math.",
        copy: "Real production incidents resolved autonomously, with receipts signed, hash-chained, and anchored to Bitcoin. In public, right now.",
      },
    ],
    stats: [
      { value: "31s", label: "downtime in the live incident" },
      { value: "0", label: "humans involved" },
      { value: "218", label: "verified production containers" },
      { value: "−86%", label: "MTTR — 4.2h → 36min" },
    ],
  },
  {
    slug: "hl7",
    name: "HL7",
    tagline: "Self-healing clinical interfaces",
    summary:
      "Autonomous HL7 monitoring that detects, diagnoses, and heals healthcare integration failures before they reach the patient — HIPAA-aware and receipt-verified.",
    category: "operations",
    features: [
      {
        title: "HL7-aware AI",
        copy: "Understands the structure of HL7 v2.x messages — MSH, PID, OBR, OBX segments and more — to interpret message flow, not just socket state.",
      },
      {
        title: "Zero-touch incident response",
        copy: "Retries failed messages, restarts stalled services, and re-establishes dropped connections — all without human intervention. No more late-night paging.",
      },
      {
        title: "Hospital-scale throughput",
        copy: "Handles thousands of transactions per second across multi-site EHRs, labs, radiology systems, and third-party vendors.",
      },
      {
        title: "Real-time diagnostics",
        copy: "AI-powered root-cause analysis pinpoints bottlenecks, stalled messages, and integration-engine misfires as they happen.",
      },
      {
        title: "HIPAA-grade protection built in",
        copy: "Every action sandbox-validated and logged for audit, with end-to-end encryption and role-based access — sealed with a ProofLink receipt.",
      },
    ],
    stats: [
      { value: "20s", label: "interface remediation" },
      { value: "100/100", label: "HIPAA posture (self-assessed)" },
      { value: "FHIR R4", label: "+ HL7 v2/v3 parser" },
      { value: "PHI-safe", label: "no-PII receipt chain" },
    ],
  },
  {
    slug: "rack-node",
    name: "Rack-Node",
    tagline: "The 1U autonomous appliance",
    summary:
      "A self-contained 1U appliance running the full UAIO stack with local ProofLink receipt sealing. Air-gap ready for enterprise, healthcare, and government datacenters.",
    category: "hardware",
    features: [
      {
        title: "Zero trust native",
        copy: "Secure boot, TPM 2.0, SPIFFE node identity, and mTLS-native communication. No implicit trust exists anywhere in the stack.",
      },
      {
        title: "Enterprise-grade internals",
        copy: "16–32 core CPU, 128GB–512GB ECC RAM, NVMe RAID with AES-256 at-rest encryption, dual 10GbE with optional 25GbE uplink, and out-of-band management.",
      },
      {
        title: "Dedicated immutable ledger partition",
        copy: "Cryptographically signed audit evidence sealed locally in real time, on a partition reserved for compliance evidence.",
      },
      {
        title: "Hub → Ninja → Agent",
        copy: "Integrates directly with the UAIO control plane through the distributed execution framework, from orchestration and policy down to hardware.",
      },
      {
        title: "Federated mesh",
        copy: "Rack-Nodes and Thin Client nodes form an mTLS-authenticated cluster: synchronized remediation state, replicated compliance evidence, peer-assisted remediation. No node operates alone.",
      },
      {
        title: "Air-gapped and classified-ready",
        copy: "Deployable inside isolated, classified environments without compromising autonomy or security posture. FedRAMP-ready, NIST-aligned, HL7-compatible.",
      },
    ],
    stats: [
      { value: "60%", label: "faster remediation" },
      { value: "40%", label: "reduction in repeat failures" },
      { value: "30", label: "days to infrastructure stabilization" },
      { value: "100%", label: "audit-ready evidence logging" },
    ],
  },
  {
    slug: "thin-clients",
    name: "Thin Clients",
    tagline: "The autonomous edge node",
    summary:
      "Edge nodes that turn any site into a self-healing, UAIO-powered environment — built for MSP, government, healthcare, and hybrid deployments.",
    category: "hardware",
    features: [
      {
        title: "Serious edge hardware",
        copy: "Intel i7 or Xeon embedded, 32–64GB ECC RAM, 1–4TB NVMe, TPM 2.0 hardware root of trust, secure boot with encrypted disk, and triple 4K display output.",
      },
      {
        title: "Zero-touch remediation, anywhere",
        copy: "Persistent, secure access to distributed infrastructure — without complex firewall modifications or VPNs.",
      },
      {
        title: "Fleet management for MSPs",
        copy: "A node at every client site: multi-tenant autonomous operations, SPIFFE-based node identity, centralized SLA reporting, and automated client-facing audit receipts.",
      },
      {
        title: "UAIO native",
        copy: "Hub → Ninja → Agent chain, local AI inference engine, deterministic Signal Cortex, Prometheus-first telemetry, GitOps and IaC compatible.",
      },
      {
        title: "Part of the mesh",
        copy: "Thin Clients offload intensive tasks to Rack-Nodes dynamically — an encrypted, federated execution mesh with consensus-based health verification.",
      },
    ],
    stats: [
      { value: "0.4ms", label: "node latency" },
      { value: "−60%", label: "MTTR reduction at the edge" },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
