/**
 * SEO/GEO pillar pages — the "AI Accountability Layer" cluster.
 *
 * These target the high-intent, pain-first searches people (and AI assistants)
 * actually run — "how do I prove what my AI did", "AI audit trail", "verify AI
 * decisions" — and route them to the ProofLink-first framing. Every claim here
 * is grounded in the live platform: SHA-256 hash-chained, Ed25519-signed,
 * OpenTimestamps/Bitcoin-anchored receipts, publicly verifiable at
 * verify.itechsmart.dev; the UAIO Sense→Analyze→Decide→Act→Verify loop; OctoAI
 * reasoning; Arbiter/Citadel governance; Digital Twin simulation; MCP surface.
 */
import type { LandingPage } from "./landings";

export const landingsPillars: LandingPage[] = [
  {
    slug: "what-is-ai-accountability",
    metaTitle: "What Is AI Accountability? A Definition for Enterprises | iTechSmart",
    metaDescription:
      "AI accountability means being able to prove what an AI system did, why, and whether it worked. Learn the definition, why it matters, and how cryptographic receipts make AI actions verifiable.",
    keywords: [
      "AI accountability",
      "what is AI accountability",
      "AI accountability platform",
      "accountable AI",
      "AI trust layer",
    ],
    eyebrow: "AI Accountability Layer",
    title: "What is AI accountability?",
    lede: "AI accountability is the ability to prove — independently and after the fact — what an AI system did, why it decided to, and whether the outcome was correct. Not a dashboard you're asked to trust. Proof anyone can check.",
    actions: [
      { label: "Verify a real AI action", href: "https://verify.itechsmart.dev" },
      { label: "See how ProofLink works", href: "/prooflink", variant: "secondary" },
    ],
    blocks: [
      { type: "diagram", name: "accountability-stack", caption: "The AI accountability stack — proof sits on top of governed, simulated, reasoned signal." },
      {
        type: "intro",
        eyebrow: "Definition",
        title: "Accountability is proof, not promises",
        copy: "AI accountability is the property of an AI system whereby every consequential action it takes is recorded as tamper-evident, independently verifiable evidence — capturing the decision, its rationale, the action taken, and the verified result. The test is simple: if a regulator, auditor, or customer asks 'prove what your AI did,' can you show evidence they can check without trusting you? Most AI platforms cannot. iTechSmart is built so the answer is always yes: every autonomous action seals a cryptographic ProofLink receipt.",
      },
      {
        type: "checklist",
        eyebrow: "The bar",
        title: "What real AI accountability requires",
        lede: "Logging that the vendor controls is not accountability. These five properties are.",
        good: [
          "Provable: every action produces a signed, hash-chained record",
          "Independent: verifiable without trusting the vendor's dashboard",
          "Complete: decision, rationale, action, and verified outcome in one record",
          "Tamper-evident: any after-the-fact edit visibly breaks the chain",
          "Public: anyone can check a receipt at verify.itechsmart.dev",
        ],
        bad: [
          "'Trust our audit dashboard' — the party being audited owns the evidence",
          "Screenshots and exported CSVs that could be edited before you see them",
          "Explainability decks with no cryptographic link to what actually ran",
          "Logs that rotate away exactly when an incident needs reconstructing",
        ],
      },
      {
        type: "steps",
        eyebrow: "How iTechSmart makes AI accountable",
        title: "From action to independent proof",
        items: [
          { title: "Act under governance", copy: "Every autonomous decision passes Arbiter policy gates — blast-radius limits, change-freeze windows, and human-approval thresholds — before it executes." },
          { title: "Seal a receipt", copy: "The action, its reasoning, and the verified outcome are hashed with SHA-256, Ed25519-signed, and chained to the previous receipt." },
          { title: "Anchor to Bitcoin", copy: "An OpenTimestamps attestation anchors the receipt to the Bitcoin blockchain, so its existence-at-time is provable independently of iTechSmart." },
          { title: "Verify anywhere", copy: "Anyone pastes the receipt ID at verify.itechsmart.dev and checks the chain themselves — no account, no trust in us required." },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI accountability, FAQ",
        items: [
          { q: "What is AI accountability?", a: "The ability to prove what an AI system did, why, and whether it worked — with evidence that can be verified independently of the vendor. iTechSmart delivers it by sealing a cryptographic ProofLink receipt for every autonomous action." },
          { q: "Why does AI accountability matter now?", a: "As AI systems take real actions on infrastructure, money, and records, 'the model decided' is not an acceptable audit answer. Regulations like the EU AI Act (Article 12) require tamper-evident logging of automated decisions, and enterprise buyers increasingly demand provable, not merely explainable, AI." },
          { q: "How is accountability different from explainability?", a: "Explainability describes how a model reached an answer. Accountability proves what the system actually did in production and ties it to a verifiable record. You need both — but only accountability holds up in an audit, because it can't be edited after the fact." },
          { q: "Can I verify iTechSmart's claims myself?", a: "Yes — that's the entire design. Go to verify.itechsmart.dev, paste any receipt ID, and check the SHA-256 hash chain and Bitcoin anchor yourself." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Make your AI provable",
    ctaLede: "Accountability isn't a feature you bolt on later — it's the layer every autonomous action passes through. Start with a free Pulse scan or verify a live receipt.",
  },

  {
    slug: "ai-audit-trail",
    metaTitle: "AI Audit Trail: Tamper-Evident Records for Every AI Action | iTechSmart",
    metaDescription:
      "An AI audit trail records every action an AI system takes so it can be reconstructed and verified later. Learn what makes an audit trail trustworthy — and why cryptographic receipts beat mutable logs.",
    keywords: [
      "AI audit trail",
      "AI audit logs",
      "immutable audit trail",
      "AI audit trail software",
      "AI activity log",
    ],
    eyebrow: "AI Accountability Layer",
    title: "The AI audit trail, done right",
    lede: "An audit trail you can edit is not an audit trail. iTechSmart records every AI action as a SHA-256 hash-chained, Bitcoin-anchored receipt — a permanent, reconstructable, independently verifiable record.",
    actions: [
      { label: "Inspect the live ledger", href: "https://verify.itechsmart.dev" },
      { label: "Receipts vs logs", href: "/receipts-not-logs", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Definition",
        title: "What an AI audit trail is — and isn't",
        copy: "An AI audit trail is the chronological, verifiable record of every action an AI system takes: what it observed, what it decided, what it did, and what resulted. Traditional trails are application logs — mutable text files owned by the party being audited, which is exactly who you cannot rely on to keep them honest. iTechSmart's audit trail is a cryptographic ledger: each entry is signed and chained to the last, so the record reconstructs the full history of autonomous operations and any tampering is immediately visible.",
      },
      {
        type: "checklist",
        eyebrow: "Trustworthy vs theatre",
        title: "What separates a real audit trail from log theatre",
        good: [
          "Hash-chained: each record cryptographically references the previous one",
          "Signed: Ed25519 binds every entry to the system that produced it",
          "Anchored: OpenTimestamps proves each entry existed at a point in time",
          "Reconstructable: detection → decision → action → outcome, end to end",
          "Independently checkable at verify.itechsmart.dev — no vendor trust needed",
        ],
        bad: [
          "Log files that rotate, truncate, or get 'cleaned up' before an audit",
          "Write access that lets history be rewritten after an incident",
          "Timestamps that are only as trustworthy as the local clock",
          "Evidence that lives entirely inside the vendor's own systems",
        ],
      },
      {
        type: "features",
        eyebrow: "Where it maps",
        title: "One audit trail, many frameworks",
        lede: "The same cryptographic record satisfies evidence requirements across regimes.",
        items: [
          { title: "EU AI Act — Article 12", copy: "Automatic, tamper-evident logging of high-risk AI system events, with post-hoc reconstruction — exactly what ProofLink receipts provide." },
          { title: "SOC 2", copy: "Change-management and monitoring evidence that auditors can verify independently rather than taking on trust." },
          { title: "HIPAA", copy: "Audit controls (§164.312(b)) for systems touching ePHI, with an immutable record of automated actions." },
          { title: "NIST CSF", copy: "Detect, Respond, and Recover evidence tied to concrete, verifiable actions rather than narrative attestations." },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI audit trail, FAQ",
        items: [
          { q: "What is an AI audit trail?", a: "A chronological, verifiable record of every action an AI system takes. iTechSmart produces one as a hash-chained ledger of cryptographic receipts, so the full history of autonomous operations can be reconstructed and checked independently." },
          { q: "Why not just use my existing logs?", a: "Logs are mutable and controlled by the party being audited. Keep them for debugging — but for evidence, a tamper-evident, independently verifiable trail is a far stronger position and is increasingly what regulators require." },
          { q: "How long are records retained?", a: "Receipts are permanent entries on the hash chain and are Bitcoin-anchored, so their existence-at-time is provable indefinitely, independent of iTechSmart's retention." },
          { q: "Can an AI audit trail be faked?", a: "Not retroactively. Editing any entry breaks the hash chain visibly, and the Bitcoin anchor fixes each entry in time — fabricating history would mean rewriting a public blockchain." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Turn your AI activity into evidence",
    ctaLede: "Every autonomous action, permanently recorded and independently verifiable. Start free with a Pulse scan or check a live receipt now.",
  },

  {
    slug: "ai-governance",
    metaTitle: "AI Governance for Enterprises: Policy, Oversight & Proof | iTechSmart",
    metaDescription:
      "Enterprise AI governance means controlling what AI systems are allowed to do, keeping humans in the loop, and proving every action. Learn the framework and how iTechSmart enforces it end to end.",
    keywords: [
      "AI governance",
      "enterprise AI governance",
      "AI governance platform",
      "AI governance framework",
      "responsible AI",
      "trustworthy AI",
    ],
    eyebrow: "AI Accountability Layer",
    title: "AI governance for enterprises",
    lede: "Governance is more than a policy document. It's the enforcement layer that decides what your AI may do, keeps a human in the loop where it matters, and proves every action after the fact.",
    actions: [
      { label: "How governance works", href: "/prooflink" },
      { label: "EU AI Act readiness", href: "/eu-ai-act", variant: "secondary" },
    ],
    blocks: [
      { type: "diagram", name: "arbiter-flow", caption: "Arbiter gates every action — approve, hold for a human, or block — and receipts the outcome." },
      {
        type: "intro",
        eyebrow: "Definition",
        title: "Governance is enforcement plus evidence",
        copy: "Enterprise AI governance is the combination of policy (what AI systems are permitted to do), oversight (where humans must approve), and accountability (provable evidence of what happened). A framework that stops at written policy is unenforced. iTechSmart makes governance operational: the Arbiter enforces policy gates on every autonomous action, Citadel binds identity and human approval, the Digital Twin simulates before anything touches production, and ProofLink seals a verifiable receipt of the whole decision.",
      },
      {
        type: "features",
        eyebrow: "The control plane",
        title: "Four layers that turn policy into practice",
        items: [
          { title: "Arbiter — policy gates", copy: "Every side-effecting action is evaluated against your policy first: blast-radius ceilings, time-window restrictions, change-freeze awareness, and human-approval thresholds. Anything over the line is blocked, not executed." },
          { title: "Citadel — human oversight", copy: "Identity binding and approval workflows keep a person in the loop for high-impact actions, with each approval captured as part of the receipt." },
          { title: "Digital Twin — pre-execution simulation", copy: "Proposed fixes run against a behavioral model of your infrastructure first, scoring blast radius and rollback confidence before anything real changes." },
          { title: "ProofLink — the evidence layer", copy: "Approved, blocked, or queued — every governance decision is sealed as a cryptographic receipt, giving you an audit trail with no extra instrumentation." },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Governance that holds up",
        title: "What an enterprise AI governance program needs",
        good: [
          "Enforced policy gates on every autonomous action, not just guidance",
          "Human-in-the-loop approval for high-blast-radius changes",
          "Pre-execution simulation to catch bad actions before they run",
          "Tamper-evident evidence for every decision, verifiable independently",
          "Mapping to EU AI Act, SOC 2, HIPAA, and NIST controls out of the box",
        ],
        bad: [
          "A governance policy that lives in a PDF and is enforced by hope",
          "Autonomy with no blast-radius ceiling or change-freeze awareness",
          "Approvals that leave no verifiable trace",
          "Evidence that only exists inside the system being governed",
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI governance, FAQ",
        items: [
          { q: "What is enterprise AI governance?", a: "The policy, oversight, and accountability controls that determine what AI systems may do and prove what they did. iTechSmart enforces all three: Arbiter gates policy, Citadel handles human approval, and ProofLink provides verifiable evidence." },
          { q: "How is this different from an AI policy document?", a: "A document states intent; governance enforces it. iTechSmart evaluates every autonomous action against your policy in real time and blocks anything that exceeds your defined limits before it can execute." },
          { q: "Does governance slow autonomy down?", a: "No — low-risk actions proceed autonomously, and only actions that cross your thresholds pause for human approval. You set where the line is." },
          { q: "How does this map to the EU AI Act?", a: "ProofLink covers Article 12 tamper-evident logging; Arbiter and Citadel provide the human-oversight controls; the Digital Twin supports risk management. See our EU AI Act readiness page for the full mapping." },
        ],
      },
    ],
    ctaTitle: "Operationalize your AI governance",
    ctaLede: "Move from policy documents to enforced, provable control. Talk to us about mapping iTechSmart to your governance and compliance requirements.",
  },

  {
    slug: "how-to-verify-ai-decisions",
    metaTitle: "How to Verify AI Decisions (Independently) | iTechSmart",
    metaDescription:
      "You can verify what an AI system decided and did without trusting the vendor. Here's how cryptographic receipts let anyone check an AI decision at verify.itechsmart.dev.",
    keywords: [
      "verify AI decisions",
      "AI decision verification",
      "AI action verification",
      "how to verify AI",
      "AI verification platform",
    ],
    eyebrow: "AI Accountability Layer",
    title: "How to verify an AI decision",
    lede: "Not 'read the vendor's report and trust it.' Actually verify it — check the cryptographic record of what the AI decided and did, yourself, without an account.",
    actions: [
      { label: "Verify a receipt now", href: "https://verify.itechsmart.dev" },
      { label: "What's in a receipt", href: "/prooflink", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The problem",
        title: "Most 'AI verification' is just trust with extra steps",
        copy: "When a platform says its AI made the right call, you're usually being asked to trust a dashboard the vendor controls. Real verification means you can independently confirm what the system decided, what it did, and when — without relying on the vendor's word. iTechSmart makes every autonomous decision verifiable by sealing it into a cryptographic receipt you can check against a public hash chain and a Bitcoin anchor.",
      },
      {
        type: "steps",
        eyebrow: "Do it yourself",
        title: "Verifying an AI decision in four steps",
        items: [
          { title: "Get the receipt ID", copy: "Every autonomous action returns a ProofLink receipt ID. It's included in API responses, MCP tool results, and incident records." },
          { title: "Open the public verifier", copy: "Go to verify.itechsmart.dev — no login, no account, no trust in iTechSmart required." },
          { title: "Check the chain", copy: "Paste the ID. The verifier shows the decision, action, and outcome, and confirms the SHA-256 hash chain is intact and the receipt hasn't been altered." },
          { title: "Confirm the anchor", copy: "The OpenTimestamps attestation proves the receipt existed at its stated time, fixed to the Bitcoin blockchain independently of us." },
        ],
      },
      {
        type: "checklist",
        eyebrow: "What you can confirm",
        title: "What verification actually tells you",
        good: [
          "The exact action the AI took, and the reasoning recorded with it",
          "That the record hasn't been edited since it was sealed",
          "That the receipt existed at its claimed time (Bitcoin-anchored)",
          "That the outcome was verified — not just that a command was sent",
          "All of it, without trusting iTechSmart's dashboard",
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "Verifying AI decisions, FAQ",
        items: [
          { q: "Can I really verify without an account?", a: "Yes. The public verifier at verify.itechsmart.dev takes a receipt ID and checks the chain for you. No login, no trust in iTechSmart required — that's the design." },
          { q: "What does a verified receipt prove?", a: "That a specific AI action, with its recorded reasoning and verified outcome, happened and hasn't been altered since — anchored in time to Bitcoin." },
          { q: "What if the outcome was wrong?", a: "The receipt records the verified real-world outcome, not just 'command sent.' If a fix didn't actually resolve the issue, the record shows that too — no false 'resolved' states." },
          { q: "Does this work for AI agents I built?", a: "Yes. Agents can seal actions via the iTechSmart MCP server, so decisions made by Claude, ChatGPT, or your own agents become independently verifiable." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Stop trusting. Start verifying.",
    ctaLede: "Pick a live receipt and check it yourself. If 'trust our dashboard' was ever good enough, you wouldn't be reading this.",
  },

  {
    slug: "ai-receipts",
    metaTitle: "AI Receipts: Cryptographic Proof for Every AI Action | iTechSmart",
    metaDescription:
      "An AI receipt is a signed, tamper-evident record proving what an AI did. Learn what's inside a ProofLink receipt and why receipts beat logs for AI accountability.",
    keywords: [
      "AI receipts",
      "cryptographic proof for AI",
      "AI proof",
      "receipts for AI",
      "AI action receipt",
      "ProofLink",
    ],
    eyebrow: "AI Accountability Layer",
    title: "Receipts for AI",
    lede: "Your AI worked. Show me the receipt. Every autonomous action iTechSmart takes produces a SHA-256, Ed25519-signed, Bitcoin-anchored record — proof, not a promise.",
    actions: [
      { label: "See a real receipt", href: "https://verify.itechsmart.dev" },
      { label: "The ProofLink product", href: "/prooflink", variant: "secondary" },
    ],
    blocks: [
      { type: "diagram", name: "receipt-lifecycle", caption: "How a ProofLink receipt is sealed — from action to independent verification." },
      {
        type: "intro",
        eyebrow: "Definition",
        title: "An AI receipt is proof an action happened as claimed",
        copy: "A receipt is to an AI action what a payment receipt is to a transaction: a compact, signed record that it happened, when, and with what result — that a third party can check. A ProofLink receipt captures the detection, the decision and its rationale, the action taken, and the verified outcome, then hashes and signs the whole thing and anchors it to Bitcoin. The difference from a log is the difference from a promise: a receipt can be verified by anyone, and it can't be quietly rewritten.",
      },
      {
        type: "features",
        eyebrow: "Anatomy",
        title: "What's inside a ProofLink receipt",
        items: [
          { title: "The action & rationale", copy: "What the system did and why — the decision context, not just a command string." },
          { title: "SHA-256 hash + chain link", copy: "A cryptographic fingerprint of the record, chained to the previous receipt so tampering is visible." },
          { title: "Ed25519 signature", copy: "Binds the receipt to the system that produced it, so provenance is cryptographic, not asserted." },
          { title: "Bitcoin anchor", copy: "An OpenTimestamps attestation fixing the receipt in time, independent of iTechSmart." },
        ],
      },
      {
        type: "stats",
        eyebrow: "At production scale",
        title: "This isn't a demo",
        items: [
          { value: "90,000+", label: "Receipts publicly verifiable", note: "Open ledger, open verifier" },
          { value: "SHA-256", label: "Hash-chained", note: "Ed25519-signed, SCITT-compatible" },
          { value: "Bitcoin", label: "Anchor of record", note: "OpenTimestamps attestation" },
          { value: "Public", label: "No account to verify", note: "verify.itechsmart.dev" },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI receipts, FAQ",
        items: [
          { q: "What is an AI receipt?", a: "A signed, tamper-evident record proving what an AI system did, when, and with what verified result. iTechSmart's are called ProofLink receipts and are publicly verifiable at verify.itechsmart.dev." },
          { q: "How is a receipt different from a log?", a: "A log is a mutable text file the vendor controls. A receipt is hash-chained, signed, and Bitcoin-anchored — independently verifiable and impossible to rewrite retroactively." },
          { q: "Can my own AI agents generate receipts?", a: "Yes. Through the iTechSmart MCP server, agents built on Claude, ChatGPT, or your own stack can seal ProofLink receipts for their actions." },
          { q: "What can I do with a receipt?", a: "Hand it to an auditor, attach it to an incident record, or let a customer verify it themselves. It's portable, permanent evidence that an AI action happened as claimed." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Get receipts for your AI",
    ctaLede: "Proof beats promises with every stakeholder that matters — auditors, regulators, and customers. Verify a live receipt or start a free Pulse scan.",
  },

  {
    slug: "immutable-ai-audit-logs",
    metaTitle: "Immutable AI Audit Logs: Why Tamper-Evidence Matters | iTechSmart",
    metaDescription:
      "Immutable audit logs can't be altered after the fact. Learn why AI systems need tamper-evident logging and how hash-chained, Bitcoin-anchored receipts deliver it.",
    keywords: [
      "immutable audit logs",
      "immutable AI audit logs",
      "tamper-evident logs",
      "tamper-proof audit trail",
      "write-once audit log",
    ],
    eyebrow: "AI Accountability Layer",
    title: "Immutable audit logs for AI",
    lede: "'Immutable' shouldn't mean 'we promise not to edit it.' It should mean editing it is cryptographically impossible to hide. That's the difference between a log and a ProofLink receipt.",
    actions: [
      { label: "Check the tamper-evident chain", href: "https://verify.itechsmart.dev" },
      { label: "Receipts vs logs", href: "/receipts-not-logs", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Definition",
        title: "Immutable means tamper-evident, not 'access-controlled'",
        copy: "Many 'immutable' logging products just restrict who can edit the log. That's access control — useful, but it still means someone can rewrite history, and you're trusting policy to stop them. True immutability is cryptographic: each record is hashed and chained to the last, so altering any entry changes its hash and breaks every link after it, visibly. iTechSmart's audit records are hash-chained, Ed25519-signed, and Bitcoin-anchored, so tampering isn't just against the rules — it's mathematically detectable.",
      },
      {
        type: "checklist",
        eyebrow: "Real vs claimed",
        title: "What makes a log genuinely immutable",
        good: [
          "Hash-chained: editing one record breaks the chain for all that follow",
          "Signed: each entry is cryptographically bound to its producer",
          "Externally anchored: OpenTimestamps ties records to Bitcoin",
          "Verifiable by outsiders, not just readable by insiders",
        ],
        bad: [
          "'Immutable' that just means write-restricted by an admin policy",
          "Append-only storage the vendor can still reset or migrate",
          "Retention that quietly expires evidence you may later need",
          "No way for a third party to detect that a record changed",
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "Immutable AI audit logs, FAQ",
        items: [
          { q: "What are immutable AI audit logs?", a: "Records of AI actions that cannot be altered after the fact without detection. iTechSmart delivers this cryptographically — hash-chained, signed, and Bitcoin-anchored receipts, not merely access-restricted logs." },
          { q: "Isn't access control enough?", a: "No. Access control relies on trusting that no one with privileges rewrites history. Cryptographic tamper-evidence removes that trust requirement entirely: any change is visible to anyone who checks." },
          { q: "How does Bitcoin anchoring help?", a: "An OpenTimestamps attestation proves a record existed at a specific time, fixed to a public blockchain — so no one, including iTechSmart, can backdate or fabricate an entry." },
          { q: "Do immutable logs meet compliance requirements?", a: "Tamper-evident logging maps directly to EU AI Act Article 12, SOC 2 monitoring, and HIPAA audit controls — and is a stronger evidentiary position than mutable logs." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Make your audit logs provable",
    ctaLede: "Stop trusting that no one edited the record. Prove it. Verify a live receipt or start free with a Pulse scan.",
  },

  {
    slug: "ai-agent-governance",
    metaTitle: "AI Agent Governance: Control & Verify Autonomous Agents | iTechSmart",
    metaDescription:
      "AI agent governance controls what autonomous agents (including MCP agents) are allowed to do and proves every action. Learn how to govern Claude, ChatGPT, and custom agents.",
    keywords: [
      "AI agent governance",
      "govern AI agents",
      "MCP agent governance",
      "autonomous agent oversight",
      "AI agent audit",
    ],
    eyebrow: "AI Accountability Layer",
    title: "Governance for AI agents",
    lede: "Agents that can take real actions need real guardrails. iTechSmart gates what any agent — Claude, ChatGPT, or your own — is allowed to do, and seals a verifiable receipt for every call.",
    actions: [
      { label: "Connect over MCP", href: "/mcp" },
      { label: "How governance works", href: "/prooflink", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The problem",
        title: "An agent with tools is an agent with consequences",
        copy: "The moment an AI agent can call tools that change infrastructure, spend money, or touch records, 'it's just a model' stops being true. Agent governance is the layer that decides which actions an agent may take, enforces limits before anything executes, keeps a human in the loop where the stakes demand it, and proves what happened. iTechSmart applies the same Arbiter policy gates and ProofLink receipts to agent tool calls as to its own autonomous operations.",
      },
      {
        type: "features",
        eyebrow: "How agents are governed",
        title: "Guardrails that travel with every tool call",
        items: [
          { title: "Policy gates on every side-effecting call", copy: "Arbiter evaluates blast radius, time windows, and approval thresholds before an agent's action executes — and blocks anything over the line." },
          { title: "Human-in-the-loop where it matters", copy: "High-impact actions pause for approval through Citadel, with the approval captured in the receipt." },
          { title: "A receipt for every action", copy: "Approved, blocked, or queued, each agent decision is sealed as a ProofLink receipt — an audit trail with no extra instrumentation." },
          { title: "Works across agent frameworks", copy: "Point any MCP or A2A client — Claude, ChatGPT, LangGraph, CrewAI — at the governed surface at mcp.itechsmart.dev." },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI agent governance, FAQ",
        items: [
          { q: "What is AI agent governance?", a: "The controls that decide what autonomous agents may do, enforce those limits before execution, and prove every action. iTechSmart applies policy gates and cryptographic receipts to agent tool calls." },
          { q: "Can I govern agents I didn't build?", a: "Yes. Any MCP- or A2A-compatible agent — including Claude and ChatGPT — can be routed through iTechSmart's governed, receipted surface at mcp.itechsmart.dev." },
          { q: "What happens when an agent tries something risky?", a: "Arbiter checks it against your policy first. Actions that exceed your blast-radius, time-window, or approval limits are blocked or held for human approval — and the decision is receipted either way." },
          { q: "How do I audit what an agent did?", a: "Every governed agent action seals a ProofLink receipt, publicly verifiable at verify.itechsmart.dev, giving you a tamper-evident record of the agent's behavior." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Put guardrails on your agents",
    ctaLede: "Autonomy without governance is just risk with good marketing. Connect your agents over MCP and receipt every action.",
  },

  {
    slug: "mcp-security",
    metaTitle: "MCP Security: Governing & Verifying Model Context Protocol Agents | iTechSmart",
    metaDescription:
      "MCP lets AI agents call real tools — which is exactly why MCP security matters. Learn how policy gates and cryptographic receipts secure Model Context Protocol tool calls.",
    keywords: [
      "MCP security",
      "Model Context Protocol security",
      "secure MCP server",
      "MCP agent security",
      "MCP tool call governance",
    ],
    eyebrow: "AI Accountability Layer",
    title: "MCP security, in practice",
    lede: "The Model Context Protocol gives agents hands. Security is what decides whether those hands can reach production — and proves what they touched. iTechSmart governs and receipts every MCP tool call.",
    actions: [
      { label: "Explore the MCP surface", href: "/mcp" },
      { label: "Agent governance", href: "/ai-agent-governance", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Why it matters",
        title: "MCP turns tool access into a security boundary",
        copy: "MCP (Model Context Protocol) standardizes how AI agents call external tools. That's powerful — and it's the whole risk surface: a tool call can restart a service, move data, or spend money. MCP security is about controlling which calls are allowed, enforcing that control before execution, and proving what actually ran. iTechSmart's MCP server puts every side-effecting call through Arbiter policy enforcement and returns a ProofLink receipt in the response, so agent tool use is both governed and auditable.",
      },
      {
        type: "checklist",
        eyebrow: "Securing MCP",
        title: "What a secure MCP deployment looks like",
        good: [
          "Policy enforcement before any side-effecting tool call executes",
          "Blast-radius, time-window, and approval controls on high-impact tools",
          "A cryptographic receipt returned with each governed call",
          "A discoverable, documented tool surface with least-privilege defaults",
          "Read-only, rate-limited public access for safe evaluation",
        ],
        bad: [
          "Agents wired directly to production tools with no policy layer",
          "Tool calls that leave no verifiable record of what happened",
          "All-or-nothing credentials with no per-action limits",
          "No way to prove, after an incident, which call caused what",
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "MCP security, FAQ",
        items: [
          { q: "Why is MCP a security concern?", a: "Because MCP tool calls can take real actions on infrastructure, data, and money. Without a policy and proof layer, an agent's tool access is an unguarded path to production." },
          { q: "How does iTechSmart secure MCP calls?", a: "Every side-effecting tool call passes Arbiter policy gates before it runs, and returns a ProofLink receipt — so calls are governed before execution and verifiable after." },
          { q: "Can I try it safely?", a: "Yes. iTechSmart exposes a read-only, rate-limited public demo key so you can evaluate the MCP surface at mcp.itechsmart.dev without touching anything live." },
          { q: "Does this work with A2A agents too?", a: "Yes. The same governed, receipted surface is available over the A2A protocol, with a discoverable agent card at mcp.itechsmart.dev." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Secure your agent tool calls",
    ctaLede: "Govern every MCP action and get a receipt for it. Explore the surface with a read-only public key.",
  },

  {
    slug: "ai-remediation-platform",
    metaTitle: "AI Remediation Platform: Autonomous, Governed, Verified Fixes | iTechSmart",
    metaDescription:
      "An AI remediation platform detects, decides, and fixes infrastructure issues autonomously. Learn how governed, simulation-checked, receipted remediation actually works.",
    keywords: [
      "AI remediation platform",
      "autonomous remediation",
      "AI incident response",
      "automated remediation",
      "self-healing infrastructure",
    ],
    eyebrow: "Autonomous Operations",
    title: "The AI remediation platform",
    lede: "Detection is table stakes. Remediation is the hard part — doing it autonomously, within policy, verified as actually fixed. That's the UAIO loop, and every step leaves a receipt.",
    actions: [
      { label: "See self-healing in action", href: "/self-healing-infrastructure" },
      { label: "UAIO vs AIOps", href: "/compare/uaio-vs-aiops", variant: "secondary" },
    ],
    blocks: [
      { type: "diagram", name: "uaio-loop", caption: "The UAIO loop — every cycle detects, decides, simulates, acts, and seals a receipt." },
      {
        type: "intro",
        eyebrow: "Definition",
        title: "Remediation means fixing it — and proving it stayed fixed",
        copy: "Most 'AI operations' tools stop at detection and alerting; a human still executes the fix. An AI remediation platform closes the loop: it detects the issue, reasons about the cause, simulates the fix, executes it under governance, and verifies the real-world outcome — not just that a command was sent. iTechSmart runs this as the UAIO loop (Sense → Analyze → Decide → Act → Verify), with Arbiter policy gates on every action and a ProofLink receipt sealing the verified result.",
      },
      {
        type: "steps",
        eyebrow: "The loop",
        title: "How governed autonomous remediation works",
        items: [
          { title: "Sense", copy: "Continuous telemetry ingestion across infrastructure, services, databases, and logs surfaces issues in real time." },
          { title: "Analyze & Decide", copy: "OctoAI's reasoning engine identifies the likely cause and selects a risk-weighted remediation — with the rationale recorded." },
          { title: "Simulate", copy: "The Digital Twin runs the proposed fix against a behavioral model first, scoring blast radius and rollback confidence before anything real changes." },
          { title: "Act under governance", copy: "Arbiter enforces your policy gates; the fix executes only within your defined limits, pausing for human approval when thresholds demand." },
          { title: "Verify & seal", copy: "The platform confirms the issue is actually resolved — no false 'resolved' states — and seals a ProofLink receipt of the verified outcome." },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI remediation, FAQ",
        items: [
          { q: "What is an AI remediation platform?", a: "Software that autonomously detects, decides, and fixes infrastructure issues — and verifies the fix worked. iTechSmart does this via the governed UAIO loop, receipting every action." },
          { q: "How is this different from AIOps?", a: "AIOps aggregates logs and detects anomalies, then hands off to a human to fix. iTechSmart executes the governed fix itself and cryptographically proves the verified outcome." },
          { q: "Is autonomous remediation safe?", a: "It's gated. Arbiter enforces blast-radius and approval limits, the Digital Twin simulates before execution, and high-impact actions pause for human approval. You decide where autonomy ends." },
          { q: "How do I know a fix actually worked?", a: "The platform verifies the real-world outcome and seals it in a receipt — so you get proof of resolution, not just proof that a command was issued." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "See remediation that proves itself",
    ctaLede: "Detect, fix, and prove — autonomously and within policy. Start with a free Pulse scan or watch the loop run.",
  },

  {
    slug: "ai-root-cause-analysis",
    metaTitle: "AI Root Cause Analysis: From Symptom to Verified Fix | iTechSmart",
    metaDescription:
      "AI root cause analysis identifies why an incident happened, not just that it did. Learn how reasoning plus simulation turns RCA into a governed, verified remediation.",
    keywords: [
      "AI root cause analysis",
      "automated root cause analysis",
      "AI RCA",
      "incident root cause",
      "AI incident analysis",
    ],
    eyebrow: "Autonomous Operations",
    title: "AI root cause analysis",
    lede: "Alerts tell you something broke. Root cause analysis tells you why — and iTechSmart goes one step further: it acts on the cause under governance and proves the fix.",
    actions: [
      { label: "How the loop reasons", href: "/octoai" },
      { label: "See remediation", href: "/ai-remediation-platform", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Definition",
        title: "RCA is about cause, not symptoms",
        copy: "Root cause analysis is the practice of finding the underlying reason an incident occurred, rather than treating the symptom that triggered the alert. Traditional tooling stops at correlation — it clusters alerts and hands you a dashboard. iTechSmart's OctoAI reasoning engine analyzes telemetry in context to identify the likely cause, records its rationale (the 5 W's — what, when, where, why, and what-next), and can carry that analysis straight into a governed, simulation-checked remediation.",
      },
      {
        type: "features",
        eyebrow: "Why AI helps",
        title: "What reasoning adds to RCA",
        items: [
          { title: "Context, not just correlation", copy: "OctoAI weighs telemetry, topology, and history together instead of clustering alerts by timestamp." },
          { title: "Recorded rationale", copy: "The 'why' is captured with the decision — so the analysis is auditable, not a black box." },
          { title: "Simulation before action", copy: "The Digital Twin tests the proposed fix against a model of your infrastructure, so RCA leads to a safe change, not a guess." },
          { title: "Proof of resolution", copy: "The verified outcome is sealed in a ProofLink receipt — closing the loop from cause to confirmed fix." },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI root cause analysis, FAQ",
        items: [
          { q: "What is AI root cause analysis?", a: "Using AI reasoning to identify why an incident happened, not just that it did. iTechSmart's OctoAI engine analyzes telemetry in context, records its rationale, and can drive a governed remediation." },
          { q: "How is this better than alert correlation?", a: "Correlation groups symptoms; root cause analysis explains them. iTechSmart weighs context and history to identify the likely cause and records the reasoning behind it." },
          { q: "Does RCA lead to an automatic fix?", a: "It can — under governance. The proposed fix is simulated on the Digital Twin and gated by Arbiter policy before execution, with the verified outcome receipted." },
          { q: "Is the analysis auditable?", a: "Yes. The decision rationale is captured with the action and sealed into a verifiable receipt, so the 'why' can be reviewed later." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Get to the cause — and prove the fix",
    ctaLede: "From symptom to verified resolution, with the reasoning on record. Start free with a Pulse scan.",
  },

  {
    slug: "digital-twin-infrastructure",
    metaTitle: "Digital Twin for Infrastructure: Simulate Before You Remediate | iTechSmart",
    metaDescription:
      "A digital twin simulates infrastructure changes before they run — scoring blast radius and rollback confidence. Learn how pre-execution simulation makes autonomous operations safe.",
    keywords: [
      "digital twin infrastructure",
      "infrastructure digital twin",
      "blast radius simulation",
      "pre-execution simulation",
      "safe autonomous remediation",
    ],
    eyebrow: "Autonomous Operations",
    title: "A digital twin for your infrastructure",
    lede: "The safest autonomous fix is the one you tested first. iTechSmart's Digital Twin runs every proposed remediation against a behavioral model of your estate before a single real change is made.",
    actions: [
      { label: "How remediation stays safe", href: "/ai-remediation-platform" },
      { label: "Talk to us", href: "/contact", variant: "secondary" },
    ],
    blocks: [
      { type: "diagram", name: "digital-twin", caption: "Simulate the fix on the twin, gate on the result, then act on production." },
      {
        type: "intro",
        eyebrow: "Definition",
        title: "Simulate the fix before it touches production",
        copy: "A digital twin is a behavioral model of your live infrastructure that a platform can test changes against without touching the real thing. In autonomous operations, it's the safety mechanism that separates 'confident automation' from 'reckless automation.' Before iTechSmart executes any remediation, the Digital Twin runs it in simulation — scoring blast radius, rollback confidence, and compliance risk — so the platform acts on evidence, not optimism.",
      },
      {
        type: "checklist",
        eyebrow: "Why it matters",
        title: "What pre-execution simulation buys you",
        good: [
          "Blast-radius scored before a change runs, not discovered after",
          "Rollback confidence estimated so risky fixes are caught early",
          "Compliance and policy risk evaluated as part of the decision",
          "A safety gate between autonomous decisions and production reality",
        ],
        bad: [
          "Automation that executes fixes and hopes for the best",
          "Discovering blast radius only when the change has already landed",
          "No modeled prediction of whether a fix can be safely undone",
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "Digital twin, FAQ",
        items: [
          { q: "What is an infrastructure digital twin?", a: "A behavioral model of your live environment that changes can be simulated against before they run. iTechSmart uses it to test proposed remediations and score their risk first." },
          { q: "What does the twin evaluate?", a: "Blast radius, rollback confidence, and compliance risk — the factors that determine whether an autonomous fix is safe to execute." },
          { q: "Does simulation slow remediation down?", a: "Simulation runs fast and is the reason autonomous remediation can be trusted — it catches unsafe changes before they reach production, so you gain speed without gaining risk." },
          { q: "How does the twin fit the UAIO loop?", a: "It's the Simulate step between Decide and Act — the check that turns a proposed fix into a safe, governed action, with the whole decision receipted." },
        ],
      },
    ],
    ctaTitle: "Never remediate blind",
    ctaLede: "Simulate first, act with confidence, prove the outcome. Talk to us about the Digital Twin for your estate.",
  },

  {
    slug: "ai-compliance-soc2",
    metaTitle: "AI Compliance for SOC 2: Verifiable Evidence, Not Screenshots | iTechSmart",
    metaDescription:
      "SOC 2 needs evidence auditors can trust. Learn how cryptographic receipts turn AI and automation activity into independently verifiable SOC 2 evidence.",
    keywords: [
      "AI SOC 2",
      "SOC 2 evidence",
      "SOC 2 automation",
      "AI compliance SOC 2",
      "compliance automation",
      "security receipts",
    ],
    eyebrow: "Compliance",
    title: "AI compliance for SOC 2",
    lede: "SOC 2 lives or dies on evidence. Screenshots and exported CSVs are the weak link. iTechSmart produces evidence an auditor can verify independently — because it's cryptographic.",
    actions: [
      { label: "How receipts map to controls", href: "/prooflink" },
      { label: "Compliance overview", href: "/security", variant: "secondary" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "The evidence problem",
        title: "Most SOC 2 evidence asks the auditor to trust you",
        copy: "SOC 2 is about demonstrating that controls operate over time. The typical evidence — screenshots, exported logs, change tickets — shares one weakness: it's produced and held by the party being audited, and it could have been edited before the auditor saw it. iTechSmart changes the evidentiary basis. Every automated action seals a ProofLink receipt that's hash-chained, signed, and Bitcoin-anchored, so change-management and monitoring evidence is independently verifiable rather than taken on trust.",
      },
      {
        type: "features",
        eyebrow: "Where receipts help",
        title: "Cryptographic evidence across SOC 2 criteria",
        items: [
          { title: "Change management", copy: "Every autonomous change carries a verifiable receipt of what happened, under what policy, with what outcome." },
          { title: "Monitoring", copy: "Detection and response actions are receipted, giving auditable evidence that controls actually operated." },
          { title: "Logical access & approvals", copy: "Human approvals captured through Citadel are bound into the receipt, evidencing oversight." },
          { title: "Integrity", copy: "Tamper-evident, externally anchored records mean evidence can't be quietly altered before an audit." },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "AI & SOC 2, FAQ",
        items: [
          { q: "How does iTechSmart help with SOC 2?", a: "It turns automated and AI-driven activity into cryptographic evidence — hash-chained, signed, Bitcoin-anchored receipts that auditors can verify independently, strengthening change-management and monitoring evidence." },
          { q: "Is a receipt stronger than a screenshot?", a: "Considerably. A screenshot can be edited and can't be independently verified. A receipt is tamper-evident and checkable by anyone at verify.itechsmart.dev." },
          { q: "Does this replace my SOC 2 auditor?", a: "No. It gives your auditor stronger, verifiable evidence for the controls in scope — it doesn't replace the audit itself." },
          { q: "What other frameworks does this support?", a: "The same receipts map to EU AI Act Article 12 logging, HIPAA audit controls, and NIST CSF evidence — one evidence layer, many frameworks." },
        ],
      },
      { type: "receipt" },
    ],
    ctaTitle: "Give your auditor evidence they can verify",
    ctaLede: "Trade screenshots for cryptographic proof. Talk to us about mapping ProofLink receipts to your SOC 2 controls.",
  },
];
