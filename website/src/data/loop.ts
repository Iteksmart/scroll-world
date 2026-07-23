export type LoopStep = {
  n: string;
  icon: string;
  title: string;
  copy: string;
  terminal: { k: string; v: string; tone?: "proof" | "ember" | "pulse" }[];
  chips: string[];
};

/** The 10-step UAIO loop — the product's core narrative, scrubbed by scroll on the home page. */
export const loopSteps: LoopStep[] = [
  {
    n: "01",
    icon: "🔍",
    title: "Detect",
    copy: "Pulse Scanner continuously monitors your entire stack — infra, services, databases, logs.",
    terminal: [
      { k: "event", v: "ALERT · CPU_SPIKE", tone: "ember" },
      { k: "node", v: "edge-a17 · confidence 0.97" },
      { k: "ingest(alert)", v: "✓", tone: "proof" },
    ],
    chips: ["Pulse Scanner", "Real-time", "66 MCP tools"],
  },
  {
    n: "02",
    icon: "🎫",
    title: "Ticket created",
    copy: "Every detected event instantly spawns a structured ticket with full context, metadata, and audit trail.",
    terminal: [
      { k: "ticket_id", v: "TKT-2026-09847" },
      { k: "severity", v: "P1 · auto-classified", tone: "ember" },
      { k: "context", v: "stack trace + logs attached" },
    ],
    chips: ["ITSM", "Hash-chained trail"],
  },
  {
    n: "03",
    icon: "⚡",
    title: "Route by autonomy",
    copy: "The UAIO Brain picks the execution mode — manual, semi, or full auto — based on policy, confidence, and blast radius.",
    terminal: [
      { k: "mode", v: "manual · semi · full auto" },
      { k: "policy", v: "staged" },
      { k: "approved", v: "→ full auto ✓", tone: "proof" },
    ],
    chips: ["Human-in-the-loop gate", "Arbiter governance"],
  },
  {
    n: "04",
    icon: "🛡",
    title: "Digital Twin gate",
    copy: "Before anything touches production, the Digital Twin simulates the fix and calculates blast radius. No safe path? Escalate to a human.",
    terminal: [
      { k: "simulation", v: "running…", tone: "pulse" },
      { k: "blast_radius", v: "low · 2 services" },
      { k: "safe_path", v: "found ✓", tone: "proof" },
    ],
    chips: ["Simulate before execute", "Blast-radius scored"],
  },
  {
    n: "05",
    icon: "⚙️",
    title: "Execute fix",
    copy: "Deterministic execution with full evidence capture. Every command logged, timestamped, attributed.",
    terminal: [
      { k: "action", v: "restart_service(edge-a17)" },
      { k: "agent", v: "OctoAI · tx_9f3b" },
      { k: "status", v: "executing… complete ✓", tone: "proof" },
    ],
    chips: ["Deterministic", "Evidence-captured", "Retry on failure"],
  },
  {
    n: "06",
    icon: "✅",
    title: "Verify success",
    copy: "Independent verification confirms the fix actually worked — not just that the command ran. Failure loops back with a new strategy.",
    terminal: [
      { k: "check", v: "CPU ↓ 18% → healthy", tone: "proof" },
      { k: "latency", v: "p99 restored · < 120ms" },
      { k: "verdict", v: "SUCCESS ✓", tone: "proof" },
    ],
    chips: ["Verified", "Auto-retry if failed"],
  },
  {
    n: "07",
    icon: "🔒",
    title: "Seal ProofLink",
    copy: "A cryptographic SHA-256 receipt is sealed and anchored to Bitcoin via OpenTimestamps — independently verifiable by anyone.",
    terminal: [
      { k: "receipt", v: "76a7d0bee971496c" },
      { k: "hash", v: "2d23832d…b749d" },
      { k: "sealed", v: "SHA-256 · Ed25519 · OTS→Bitcoin ✓", tone: "proof" },
    ],
    chips: ["Tamper-evident", "Bitcoin-anchored"],
  },
  {
    n: "08",
    icon: "📋",
    title: "Document + close",
    copy: "The receipt attaches to the original ticket automatically. Complete audit trail — what, when, where, why, who.",
    terminal: [
      { k: "ticket", v: "TKT-2026-09847 → CLOSED", tone: "proof" },
      { k: "receipt", v: "attached ✓", tone: "proof" },
      { k: "audit", v: "what · when · where · why · who" },
    ],
    chips: ["Audit-ready", "Compliance-grade"],
  },
  {
    n: "09",
    icon: "🧠",
    title: "Learn",
    copy: "What worked, what didn't. The UAIO Brain updates its policy graph with outcome weights from this resolution.",
    terminal: [
      { k: "outcome", v: "restart_service → +1 weight", tone: "proof" },
      { k: "pattern", v: "CPU_SPIKE · edge-a* → stored" },
      { k: "model", v: "updated · Δ confidence +0.03" },
    ],
    chips: ["Policy graph", "Outcome-weighted"],
  },
  {
    n: "10",
    icon: "🔄",
    title: "Sync brains",
    copy: "OctoAI and Hermes synchronize learnings across every environment. Each future decision is informed by this run — the loop never stops.",
    terminal: [
      { k: "synced", v: "OctoAI ↔ Hermes", tone: "pulse" },
      { k: "scope", v: "all environments" },
      { k: "feeds", v: "→ future decisions ↑", tone: "proof" },
    ],
    chips: ["Loop complete", "→ back to Detect"],
  },
];
