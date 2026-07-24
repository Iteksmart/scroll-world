import type { ComparePage } from "./compare";

/**
 * Concept + evidence comparison pages. High-intent, honest — each carries a
 * "whenThem" section for when the alternative is genuinely the right call.
 * Grounded in the live platform (ProofLink SHA-256/Ed25519/OpenTimestamps,
 * UAIO loop, Arbiter, MCP). No invented numbers beyond the site's established
 * figures; where unsure, we point to verify.itechsmart.dev.
 */
export const compareExtra: ComparePage[] = [
  {
    slug: "prooflink-vs-audit-logs",
    aliases: ["receipts-vs-audit-logs"],
    competitor: "audit logs",
    metaTitle: "ProofLink vs Audit Logs: Verifiable Evidence vs Mutable Records | iTechSmart",
    metaDescription:
      "Audit logs are mutable and vendor-controlled. ProofLink receipts are hash-chained, signed, and Bitcoin-anchored — verifiable by anyone. See the difference.",
    eyebrow: "Evidence comparison",
    title: "Audit logs record. ProofLink receipts prove.",
    lede: "An audit log is a record the audited party keeps. A ProofLink receipt is a record anyone can verify. That gap — between 'trust our log' and 'check it yourself' — is the whole point.",
    verdict:
      "Keep audit logs for what they're good at: debugging, operational forensics, and high-volume searchable history. For evidence that has to hold up — that an AI or automation action happened as claimed and wasn't altered afterward — receipts are a categorically stronger position, because they're tamper-evident and independently verifiable.",
    rows: [
      { capability: "Tamper-evidence", us: "SHA-256 hash-chained — any edit breaks the chain visibly", them: "Editable by anyone with write access", advantage: "us" },
      { capability: "Independent verification", us: "Anyone checks a receipt at verify.itechsmart.dev, no account", them: "Verifiable only inside the vendor's own system", advantage: "us" },
      { capability: "Proof of time", us: "OpenTimestamps → Bitcoin anchor, independent of us", them: "Trusts the local clock; can be backdated", advantage: "us" },
      { capability: "Completeness of a decision", us: "Decision, rationale, action, and verified outcome in one record", them: "Whatever the app happened to log", advantage: "us" },
      { capability: "High-volume searchable history", us: "Receipts are evidence, not a log-search index", them: "Mature full-text search and retention tooling", advantage: "them" },
      { capability: "Debugging / operational forensics", us: "Not the job — pair receipts with your logs", them: "Exactly what logs are for", advantage: "them" },
    ],
    whenThem: [
      "You need high-volume, full-text searchable operational history for debugging — that's a logging job.",
      "Long-horizon retention and forensic search across everything the system emits is your primary need.",
    ],
    faq: [
      { q: "Do receipts replace my logs?", a: "No. Keep logs for debugging and operational forensics. Receipts are the evidence layer on top — the permanent, provable record of what an AI or automation action actually did." },
      { q: "Why can't a log just be made immutable?", a: "Most 'immutable' logging is access-controlled, which still trusts that no privileged user rewrites history. ProofLink is cryptographically tamper-evident and Bitcoin-anchored, so tampering is detectable by anyone, not merely against policy." },
      { q: "Are receipts accepted as audit evidence?", a: "Tamper-evident, independently verifiable records are a stronger evidentiary position than mutable logs and map to EU AI Act Article 12, SOC 2 monitoring, and HIPAA audit controls." },
    ],
  },
  {
    slug: "prooflink-vs-siem",
    aliases: ["prooflink-vs-siem-evidence"],
    competitor: "SIEM evidence",
    metaTitle: "ProofLink vs SIEM Evidence: Cryptographic Proof vs Correlated Logs | iTechSmart",
    metaDescription:
      "A SIEM correlates and stores security events. ProofLink seals each action as tamper-evident, independently verifiable proof. They complement — here's how.",
    eyebrow: "Evidence comparison",
    title: "A SIEM collects events. ProofLink proves actions.",
    lede: "SIEMs are excellent at ingesting, correlating, and searching security events at scale. But the events they hold are still records the operator controls. ProofLink adds what a SIEM doesn't: cryptographic, independently verifiable proof that a specific action happened and wasn't altered.",
    verdict:
      "This isn't a rip-and-replace. Keep your SIEM as the detection, correlation, and retention layer. Use ProofLink receipts as the tamper-evident evidence layer for autonomous and AI-driven actions — so the story your SIEM tells about a remediation is backed by proof an auditor can verify independently.",
    rows: [
      { capability: "Event ingestion & correlation", us: "Not the job — consumes signals, closes the loop", them: "Core strength; the reason SIEMs exist", advantage: "them" },
      { capability: "Long-term retention & search", us: "Evidence chain, not a search index", them: "Mature retention and hunting tooling", advantage: "them" },
      { capability: "Tamper-evident action records", us: "SHA-256 + Ed25519 + Bitcoin anchor per action", them: "Stored events the operator can alter", advantage: "us" },
      { capability: "Independent verification", us: "Public verifier, no account required", them: "Trust the operator's platform", advantage: "us" },
      { capability: "Proof a remediation actually worked", us: "Verified outcome sealed into the receipt", them: "Records that a rule fired, not that a fix held", advantage: "us" },
      { capability: "Governance of the action itself", us: "Arbiter gates the action before it runs", them: "Detects and alerts; humans act", advantage: "us" },
    ],
    whenThem: [
      "Your primary need is security event collection, correlation, threat hunting, and long-horizon retention — that's the SIEM's home turf.",
      "You already have a SIEM investment and want to add proof, not replace detection.",
    ],
    faq: [
      { q: "Does ProofLink replace my SIEM?", a: "No. It complements it. Your SIEM stays the detection and retention layer; ProofLink adds tamper-evident, independently verifiable proof for the autonomous and AI-driven actions taken in response." },
      { q: "Can ProofLink feed my SIEM?", a: "Receipts are portable records you can reference from incident tickets and reports, giving your SIEM's narrative independently verifiable backing." },
      { q: "Why is a receipt stronger than a stored SIEM event?", a: "A stored event is only as trustworthy as the platform holding it. A receipt is hash-chained and Bitcoin-anchored, so it can't be backdated or quietly edited — and anyone can check it." },
    ],
  },
  {
    slug: "prooflink-vs-manual-change-management",
    aliases: ["prooflink-vs-change-management"],
    competitor: "manual change management",
    metaTitle: "ProofLink vs Manual Change Management: Proof vs Paperwork | iTechSmart",
    metaDescription:
      "Change tickets document intent; they don't prove what happened. ProofLink seals every change as verifiable evidence. Replace paperwork with proof.",
    eyebrow: "Process comparison",
    title: "Change tickets record intent. Receipts prove reality.",
    lede: "A change ticket says what someone planned to do and claimed they did. It's documentation, filled in by the party being audited. A ProofLink receipt is cryptographic evidence of what actually happened — sealed at the moment of the change, not typed up after.",
    verdict:
      "Change-management process still matters for planning, approvals, and communication. But as evidence, tickets are weak: they're manual, after-the-fact, and editable. Pairing your process with ProofLink receipts turns 'we documented it' into 'here's the proof' — and for autonomous changes, the receipt is generated automatically.",
    rows: [
      { capability: "Evidence integrity", us: "Sealed at execution — tamper-evident, anchored", them: "Typed in afterward; editable", advantage: "us" },
      { capability: "Effort per change", us: "Automatic for autonomous actions", them: "Manual ticket writing and closure", advantage: "us" },
      { capability: "Proof the change worked", us: "Verified outcome in the receipt", them: "'Closed' status a human sets", advantage: "us" },
      { capability: "Independent verification", us: "Public — verify.itechsmart.dev", them: "Internal system of record", advantage: "us" },
      { capability: "Planning, approvals, comms", us: "Arbiter/Citadel gate autonomy; pair with your CAB", them: "Mature workflows for human coordination", advantage: "them" },
      { capability: "Human-coordinated change windows", us: "Supported via approval gates", them: "The process is built for exactly this", advantage: "tie" },
    ],
    whenThem: [
      "Highly manual, human-coordinated changes across many teams still need a change-management process for planning and approvals.",
      "Your governance requires a formal CAB workflow — keep it, and back it with receipts.",
    ],
    faq: [
      { q: "Does this replace ITIL change management?", a: "No — it strengthens it. Use your process for planning and approvals; use ProofLink receipts as the tamper-evident evidence that the change happened as approved and worked." },
      { q: "What about autonomous changes?", a: "For actions the platform takes autonomously, the receipt is generated automatically — governed by Arbiter policy first, then sealed with the verified outcome. No ticket writing required." },
      { q: "Can auditors verify a change receipt?", a: "Yes, independently, at verify.itechsmart.dev — which is a stronger position than a change ticket the audited team filled in themselves." },
    ],
  },
  {
    slug: "ai-receipts-vs-logging",
    aliases: ["receipts-vs-logging"],
    competitor: "logging",
    metaTitle: "AI Receipts vs Logging: Proof vs Records | iTechSmart",
    metaDescription:
      "Logging captures what an app writes down. AI receipts prove what an AI did. Learn why receipts are the accountability layer logging can't be.",
    eyebrow: "Concept comparison",
    title: "Logging is what an app writes. A receipt is what it can prove.",
    lede: "Logging and receipts answer different questions. Logging answers 'what did the system record?' A receipt answers 'can you prove this action happened and wasn't changed?' For AI accountability, only the second question matters in an audit.",
    verdict:
      "Logging is essential infrastructure and isn't going anywhere. But it was never designed to be evidence — it's mutable, local, and controlled by the party being audited. AI receipts are purpose-built as the accountability layer: signed, chained, anchored, and publicly verifiable. Use both; don't confuse one for the other.",
    rows: [
      { capability: "Purpose", us: "Evidence — prove an action happened as claimed", them: "Records — capture what the app emits", advantage: "tie" },
      { capability: "Mutability", us: "Tamper-evident; edits break the chain", them: "Freely editable before or after indexing", advantage: "us" },
      { capability: "Verifiable by outsiders", us: "Yes — public verifier, no account", them: "No — internal to the operator", advantage: "us" },
      { capability: "Proof of time", us: "Bitcoin-anchored", them: "Local timestamp", advantage: "us" },
      { capability: "Volume & granularity", us: "One record per meaningful action", them: "High-volume, fine-grained trace data", advantage: "them" },
      { capability: "Debugging value", us: "Not the job", them: "Exactly the job", advantage: "them" },
    ],
    whenThem: [
      "You need fine-grained, high-volume trace data for debugging and performance analysis — that's logging.",
      "Your immediate problem is observability, not evidence.",
    ],
    faq: [
      { q: "Aren't logs enough for AI accountability?", a: "No. Logs are mutable and controlled by the party being audited. AI receipts are tamper-evident and independently verifiable — the difference between a claim and proof." },
      { q: "Should I stop logging?", a: "Never. Keep logging for observability and debugging. Add receipts as the evidence layer for AI and automation actions." },
      { q: "How many receipts does a system generate?", a: "One per meaningful action — not per log line. Receipts are the durable proof of decisions and outcomes, not a firehose of trace data." },
    ],
  },
  {
    slug: "mcp-security-vs-api-security",
    aliases: ["mcp-vs-api-security"],
    competitor: "API security",
    metaTitle: "MCP Security vs API Security: Governing Agent Tool Calls | iTechSmart",
    metaDescription:
      "API security controls who can call an endpoint. MCP security must also govern what an autonomous agent decides to do with it. Learn the difference.",
    eyebrow: "Security comparison",
    title: "API security guards the door. MCP security governs the decision.",
    lede: "API security — auth, rate limits, input validation — is necessary and unchanged. But when an autonomous agent is the caller, a new question appears: not just 'is this call authorized?' but 'should this agent take this action right now?' That's what MCP security adds.",
    verdict:
      "Keep every API-security control you have — they still apply. MCP security is the layer on top for agent-driven tool calls: policy gates on the action itself, human approval where the stakes demand it, and a verifiable receipt of what happened. API security says who may call; MCP security governs what gets done and proves it.",
    rows: [
      { capability: "Authentication & authorization", us: "Assumed — plus per-action policy", them: "Core: keys, OAuth, scopes", advantage: "them" },
      { capability: "Rate limiting & input validation", us: "Complementary", them: "Mature, essential controls", advantage: "them" },
      { capability: "Governing the action's intent", us: "Arbiter gates blast radius, windows, approvals", them: "Out of scope — endpoint doesn't judge intent", advantage: "us" },
      { capability: "Human-in-the-loop on high-impact calls", us: "Citadel approval gates", them: "Not an API-security concern", advantage: "us" },
      { capability: "Proof of what an agent did", us: "ProofLink receipt per governed call", them: "Access logs at best", advantage: "us" },
      { capability: "Safe public evaluation", us: "Read-only, rate-limited demo key", them: "Standard API key management", advantage: "tie" },
    ],
    whenThem: [
      "For the transport and access layer — auth, rate limits, validation — API security is exactly the right tool and MCP security assumes it's in place.",
      "If no autonomous agent is involved, classic API security may be all you need.",
    ],
    faq: [
      { q: "Isn't securing the API enough for MCP?", a: "No. API security controls who can call an endpoint. When the caller is an autonomous agent, you also need to govern whether the action should happen — that's policy gates and receipts, which MCP security adds on top." },
      { q: "Does MCP security replace API keys and OAuth?", a: "No, it assumes them. iTechSmart's MCP server sits behind normal auth and adds Arbiter policy enforcement and ProofLink receipts for the actions agents take." },
      { q: "How do I try it safely?", a: "iTechSmart exposes a read-only, rate-limited public demo key so you can evaluate the governed MCP surface at mcp.itechsmart.dev without touching anything live." },
    ],
  },
  {
    slug: "ai-governance-vs-ai-accountability",
    aliases: ["governance-vs-accountability"],
    competitor: "AI governance",
    metaTitle: "AI Governance vs AI Accountability: Control vs Proof | iTechSmart",
    metaDescription:
      "AI governance decides what AI may do. AI accountability proves what it did. You need both — here's how they fit together in one platform.",
    eyebrow: "Concept comparison",
    title: "Governance decides what's allowed. Accountability proves what happened.",
    lede: "These terms get used interchangeably, but they're two halves of the same responsibility. Governance is control before the fact: policy, approvals, limits. Accountability is proof after the fact: a verifiable record of what the AI actually did. A program with one and not the other has a hole.",
    verdict:
      "You need both, and they reinforce each other. Governance without accountability is policy you can't prove was followed. Accountability without governance is proof of actions you never controlled. iTechSmart delivers the pair: Arbiter and Citadel govern, ProofLink proves — so 'what's allowed' and 'what happened' are the same verified story.",
    rows: [
      { capability: "When it acts", us: "Accountability: after the action (proof)", them: "Governance: before the action (control)", advantage: "tie" },
      { capability: "Core question", us: "'Can you prove what the AI did?'", them: "'What is the AI allowed to do?'", advantage: "tie" },
      { capability: "Mechanism", us: "Hash-chained, anchored ProofLink receipts", them: "Policy gates, approvals, limits", advantage: "tie" },
      { capability: "Fails without the other", us: "Proof of ungoverned actions", them: "Unprovable policy compliance", advantage: "tie" },
      { capability: "In one platform", us: "ProofLink (accountability)", them: "Arbiter + Citadel (governance)", advantage: "tie" },
      { capability: "Independent verification", us: "Yes — public verifier", them: "Enforced internally", advantage: "us" },
    ],
    whenThem: [
      "If you only need to constrain what AI can do and have no audit or proof requirement, governance controls alone may suffice — but that's rare in an enterprise.",
      "Early-stage pilots sometimes start with governance and add accountability as audits loom.",
    ],
    faq: [
      { q: "What's the difference between AI governance and AI accountability?", a: "Governance controls what AI systems are permitted to do (before the action). Accountability proves what they actually did (after the action). iTechSmart does both: Arbiter/Citadel govern, ProofLink proves." },
      { q: "Can I have accountability without governance?", a: "You can prove what happened, but if the actions were never controlled, you're just documenting risk. The two work best together." },
      { q: "Does one platform really do both?", a: "Yes. Arbiter enforces policy and Citadel handles human approval (governance), while ProofLink seals a verifiable receipt of every decision (accountability) — one connected story." },
    ],
  },
];
