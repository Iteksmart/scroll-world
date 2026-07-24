/**
 * On-brand schematic SVG diagrams — one consistent visual language across the
 * platform. Server-rendered inline so the markup (and its text labels) is in the
 * HTML for search engines and AI crawlers that parse images and structure.
 *
 * Palette (from globals.css): proof #3ce8a4, pulse #4cc3f7, ember #ffc857,
 * alert #ff6b81, violet #a78bfa, card #0e1524, line #2b3a5c, bright #f6f9fc,
 * fog #8ea0ba.
 */
import type { ReactNode, ReactElement } from "react";

const C = {
  proof: "#3ce8a4",
  proofDim: "#22b57c",
  pulse: "#4cc3f7",
  ember: "#ffc857",
  alert: "#ff6b81",
  violet: "#a78bfa",
  card: "#0e1524",
  raise: "#131c2e",
  line: "#2b3a5c",
  bright: "#f6f9fc",
  fog: "#8ea0ba",
  dim: "#71829e",
};

type NodeProps = { x: number; y: number; w?: number; h?: number; label: string; sub?: string; accent?: string };

function Node({ x, y, w = 150, h = 56, label, sub, accent = C.line }: NodeProps) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={C.card} stroke={accent} strokeWidth={1.5} />
      <text x={x + w / 2} y={sub ? y + h / 2 - 4 : y + h / 2 + 5} textAnchor="middle" fill={C.bright} fontSize={15} fontWeight={600} fontFamily="ui-sans-serif, system-ui">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 15} textAnchor="middle" fill={C.fog} fontSize={11} fontFamily="ui-sans-serif, system-ui">
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = C.pulse }: { x1: number; y1: number; x2: number; y2: number; color?: string }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={1.75} markerEnd="url(#arrow)" />;
}

function Defs() {
  return (
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX={8} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={C.pulse} />
      </marker>
    </defs>
  );
}

function Frame({ title, viewBox, children }: { title: string; viewBox: string; children: ReactNode }) {
  return (
    <svg role="img" aria-label={title} viewBox={viewBox} width="100%" style={{ height: "auto", maxWidth: 760, display: "block", margin: "0 auto" }} xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <Defs />
      {children}
    </svg>
  );
}

/* ---- 1. UAIO loop ---- */
function UaioLoop() {
  const steps = [
    { label: "Sense", sub: "telemetry", accent: C.pulse },
    { label: "Analyze", sub: "OctoAI reasoning", accent: C.pulse },
    { label: "Decide", sub: "risk-weighted", accent: C.violet },
    { label: "Act", sub: "governed fix", accent: C.ember },
    { label: "Verify", sub: "seal receipt", accent: C.proof },
  ];
  const cx = 380, cy = 195, r = 135, w = 132, h = 52;
  const pts = steps.map((_, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / steps.length;
    return { x: cx + r * Math.cos(a) - w / 2, y: cy + r * Math.sin(a) - h / 2, ax: cx + r * Math.cos(a), ay: cy + r * Math.sin(a) };
  });
  return (
    <Frame title="The UAIO loop: Sense, Analyze, Decide, Act, Verify — closing the loop autonomously" viewBox="0 0 760 400">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.line} strokeWidth={1} strokeDasharray="4 6" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill={C.bright} fontSize={17} fontWeight={700} fontFamily="ui-sans-serif, system-ui">UAIO loop</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fill={C.fog} fontSize={12} fontFamily="ui-sans-serif, system-ui">every cycle → 1 receipt</text>
      {pts.map((p, i) => {
        const n = pts[(i + 1) % pts.length];
        const midA = Math.atan2(n.ay - cy, n.ax - cx);
        void midA;
        return <path key={`a${i}`} d={`M ${p.ax} ${p.ay} A ${r} ${r} 0 0 1 ${n.ax} ${n.ay}`} fill="none" stroke={C.pulse} strokeWidth={1.5} opacity={0.5} markerEnd="url(#arrow)" />;
      })}
      {pts.map((p, i) => (
        <Node key={i} x={p.x} y={p.y} w={w} h={h} label={steps[i].label} sub={steps[i].sub} accent={steps[i].accent} />
      ))}
    </Frame>
  );
}

/* ---- 2. ProofLink receipt lifecycle ---- */
function ReceiptLifecycle() {
  const steps = [
    { label: "Action", sub: "+ rationale", accent: C.pulse },
    { label: "SHA-256", sub: "hash", accent: C.violet },
    { label: "Ed25519", sub: "sign", accent: C.violet },
    { label: "Chain", sub: "link prev", accent: C.ember },
    { label: "Bitcoin", sub: "anchor", accent: C.proof },
    { label: "Verify", sub: "anyone, public", accent: C.proof },
  ];
  const w = 108, h = 58, gap = 20, y = 130;
  return (
    <Frame title="ProofLink receipt lifecycle: action, hash, sign, chain, Bitcoin-anchor, publicly verify" viewBox="0 0 760 260">
      <text x={380} y={44} textAnchor="middle" fill={C.bright} fontSize={17} fontWeight={700} fontFamily="ui-sans-serif, system-ui">ProofLink receipt lifecycle</text>
      <text x={380} y={66} textAnchor="middle" fill={C.fog} fontSize={12} fontFamily="ui-sans-serif, system-ui">tamper-evident from creation to independent verification</text>
      {steps.map((s, i) => {
        const x = 30 + i * (w + gap);
        return (
          <g key={i}>
            <Node x={x} y={y} w={w} h={h} label={s.label} sub={s.sub} accent={s.accent} />
            {i < steps.length - 1 && <Arrow x1={x + w} y1={y + h / 2} x2={x + w + gap} y2={y + h / 2} />}
          </g>
        );
      })}
    </Frame>
  );
}

/* ---- 3. AI accountability stack ---- */
function AccountabilityStack() {
  const layers = [
    { label: "Proof — ProofLink receipts", sub: "SHA-256 · Ed25519 · Bitcoin-anchored", accent: C.proof },
    { label: "Governance — Arbiter + Citadel", sub: "policy gates · human approval", accent: C.ember },
    { label: "Simulation — Digital Twin", sub: "blast-radius · rollback confidence", accent: C.violet },
    { label: "Reasoning — OctoAI", sub: "cause analysis · decision rationale", accent: C.pulse },
    { label: "Signal — telemetry & MCP", sub: "infra, services, agent tool calls", accent: C.pulse },
  ];
  const w = 520, h = 50, gap = 12, x = 120;
  return (
    <Frame title="AI accountability stack: signal, reasoning, simulation, governance, and proof layers" viewBox="0 0 760 360">
      <text x={380} y={30} textAnchor="middle" fill={C.bright} fontSize={17} fontWeight={700} fontFamily="ui-sans-serif, system-ui">The AI accountability stack</text>
      {layers.map((l, i) => {
        const y = 50 + i * (h + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx={9} fill={C.card} stroke={l.accent} strokeWidth={1.5} />
            <rect x={x} y={y} width={5} height={h} rx={2} fill={l.accent} />
            <text x={x + 20} y={y + h / 2 - 3} fill={C.bright} fontSize={14} fontWeight={600} fontFamily="ui-sans-serif, system-ui">{l.label}</text>
            <text x={x + 20} y={y + h / 2 + 14} fill={C.fog} fontSize={11} fontFamily="ui-sans-serif, system-ui">{l.sub}</text>
          </g>
        );
      })}
    </Frame>
  );
}

/* ---- 4. Arbiter decision flow ---- */
function ArbiterFlow() {
  return (
    <Frame title="Arbiter decision flow: every action is policy-gated, then approved, held for a human, or blocked — and receipted either way" viewBox="0 0 760 320">
      <text x={380} y={30} textAnchor="middle" fill={C.bright} fontSize={17} fontWeight={700} fontFamily="ui-sans-serif, system-ui">Arbiter decision flow</text>
      <Node x={40} y={130} w={140} h={56} label="Proposed action" sub="autonomous or agent" accent={C.pulse} />
      <g>
        <polygon points="300,158 360,120 420,158 360,196" fill={C.card} stroke={C.ember} strokeWidth={1.5} />
        <text x={360} y={154} textAnchor="middle" fill={C.bright} fontSize={13} fontWeight={600} fontFamily="ui-sans-serif, system-ui">Policy</text>
        <text x={360} y={170} textAnchor="middle" fill={C.fog} fontSize={11} fontFamily="ui-sans-serif, system-ui">gate</text>
      </g>
      <Arrow x1={180} y1={158} x2={296} y2={158} />
      <Node x={560} y={40} w={160} h={52} label="Approve" sub="execute in policy" accent={C.proof} />
      <Node x={560} y={132} w={160} h={52} label="Hold for human" sub="Citadel approval" accent={C.ember} />
      <Node x={560} y={224} w={160} h={52} label="Block" sub="over blast-radius" accent={C.alert} />
      <Arrow x1={420} y1={150} x2={556} y2={66} color={C.proof} />
      <Arrow x1={420} y1={158} x2={556} y2={158} color={C.ember} />
      <Arrow x1={420} y1={166} x2={556} y2={250} color={C.alert} />
      <text x={360} y={292} textAnchor="middle" fill={C.proof} fontSize={12} fontWeight={600} fontFamily="ui-sans-serif, system-ui">Every outcome — approved, held, or blocked — seals a ProofLink receipt.</text>
    </Frame>
  );
}

/* ---- 5. Digital Twin process ---- */
function DigitalTwin() {
  return (
    <Frame title="Digital Twin process: simulate a fix, score blast radius and rollback, gate on the result, then act on production" viewBox="0 0 760 300">
      <text x={380} y={30} textAnchor="middle" fill={C.bright} fontSize={17} fontWeight={700} fontFamily="ui-sans-serif, system-ui">Digital Twin: simulate before you remediate</text>
      <Node x={30} y={120} w={130} h={58} label="Proposed fix" sub="from Decide" accent={C.pulse} />
      <rect x={210} y={96} width={200} height={110} rx={12} fill={C.raise} stroke={C.violet} strokeWidth={1.5} />
      <text x={310} y={120} textAnchor="middle" fill={C.violet} fontSize={13} fontWeight={700} fontFamily="ui-sans-serif, system-ui">Digital Twin</text>
      <text x={310} y={144} textAnchor="middle" fill={C.fog} fontSize={11} fontFamily="ui-sans-serif, system-ui">behavioral model of your estate</text>
      <text x={310} y={168} textAnchor="middle" fill={C.fog} fontSize={11} fontFamily="ui-sans-serif, system-ui">• blast radius</text>
      <text x={310} y={186} textAnchor="middle" fill={C.fog} fontSize={11} fontFamily="ui-sans-serif, system-ui">• rollback confidence · policy risk</text>
      <Arrow x1={160} y1={149} x2={206} y2={149} />
      <g>
        <polygon points="470,120 520,90 570,120 520,150" fill={C.card} stroke={C.ember} strokeWidth={1.5} />
        <text x={520} y={124} textAnchor="middle" fill={C.bright} fontSize={12} fontWeight={600} fontFamily="ui-sans-serif, system-ui">safe?</text>
      </g>
      <Arrow x1={410} y1={135} x2={466} y2={120} />
      <Node x={620} y={92} w={120} h={52} label="Act" sub="production" accent={C.proof} />
      <Node x={620} y={188} w={120} h={52} label="Escalate" sub="no false fix" accent={C.alert} />
      <Arrow x1={560} y1={112} x2={616} y2={116} color={C.proof} />
      <Arrow x1={520} y1={150} x2={618} y2={210} color={C.alert} />
    </Frame>
  );
}

const DIAGRAMS: Record<string, () => ReactElement> = {
  "uaio-loop": UaioLoop,
  "receipt-lifecycle": ReceiptLifecycle,
  "accountability-stack": AccountabilityStack,
  "arbiter-flow": ArbiterFlow,
  "digital-twin": DigitalTwin,
};

export type DiagramName = keyof typeof DIAGRAMS;
export const diagramNames = Object.keys(DIAGRAMS) as DiagramName[];

export function Diagram({ name }: { name: DiagramName }) {
  const D = DIAGRAMS[name];
  if (!D) return null;
  return <D />;
}
