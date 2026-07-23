import type { Metadata } from "next";
import { Globe, Plug, Handshake, ShieldAlert, Clock3, UserCheck } from "lucide-react";
import { pageMeta, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Marquee } from "@/components/motion/marquee";
import { CtaBanner } from "@/components/ui/cta-banner";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "MCP Server & A2A — Connect Agents to UAIO | iTechSmart",
  description:
    "66 MCP tools, REST API, and Linux Foundation A2A protocol — wire Claude, LangGraph, or CrewAI into the governed, receipt-sealed UAIO pipeline in one call.",
  path: "/mcp",
});

const doors = [
  {
    icon: Globe,
    badge: "LIVE",
    title: "REST API",
    copy: "ProofLink verification, incident state, platform status — direct HTTPS. Use from webhooks, CI pipelines, or any tool that speaks HTTP.",
    link: { label: "api.itechsmart.dev/v1", href: "https://api.itechsmart.dev/v1/health" },
  },
  {
    icon: Plug,
    badge: "66 TOOLS LIVE",
    title: "MCP Server",
    copy: "Any MCP-compatible agent invokes the full UAIO pipeline directly. Connect Claude, LangGraph, CrewAI, or any agent framework.",
    link: { label: "Tool manifest", href: "https://mcp.itechsmart.dev/mcp/tools" },
  },
  {
    icon: Handshake,
    badge: "NOW LIVE",
    title: "A2A Protocol",
    copy: "Linux Foundation Agent-to-Agent protocol on the same endpoint as MCP. Any LangGraph, CrewAI, or AutoGen agent orchestrates through one standard schema.",
    link: { label: "View agent card", href: "https://mcp.itechsmart.dev/.well-known/agent.json" },
  },
];

const tools = [
  { name: "platform_status", emoji: "📈", copy: "Live platform health: container count, service status, receipt count, NIST score. No auth required." },
  { name: "create_receipt", emoji: "📋", copy: "Seals a new ProofLink receipt; returns receipt_id and SHA-256 hash chain link." },
  { name: "verify_receipt", emoji: "🔍", copy: "Verifies by ID: full record, hash-chain validation, Bitcoin anchor status — independent of our infrastructure after the seal." },
  { name: "trigger_remediation", emoji: "🔨", copy: "Governed remediation — Arbiter evaluates policy gates before anything executes." },
  { name: "run_pulse_scan", emoji: "⚡", copy: "Kick off a Pulse scan and get findings plus a sealed receipt back." },
  { name: "query_ledger", emoji: "📜", copy: "Search the public receipt chain by time, event type, or actor." },
];

const governance = [
  {
    icon: ShieldAlert,
    title: "Blast radius control",
    copy: "Define the max scope of any single autonomous action by service, environment, or impact surface. Arbiter blocks anything exceeding the ceiling before it touches production.",
  },
  {
    icon: Clock3,
    title: "Change-freeze awareness",
    copy: "Set windows when autonomous execution is suspended — release days, maintenance windows, business hours. Arbiter enforces them for agent calls too.",
  },
  {
    icon: UserCheck,
    title: "Human-approval thresholds",
    copy: "Actions above your risk line queue for approval — from your agent's perspective it's just a pending state with a receipt at the end.",
  },
];

const agents = ["Claude", "ChatGPT", "Cursor", "LangGraph", "CrewAI", "AutoGen", "Semantic Kernel", "LlamaIndex"];

export default function McpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "MCP & A2A", path: "/mcp" },
          ]),
        )}
      />
      <PageHero
        eyebrow="Developer integration · REST / MCP / A2A"
        eyebrowTone="pulse"
        title="Built for agents, not just dashboards."
        lede="Three ways to invoke the full UAIO pipeline — REST for anything that speaks HTTP, MCP for agent frameworks, and the Linux Foundation A2A protocol for agent-to-agent orchestration. All governed. All receipted."
        actions={[
          { label: "API docs", href: "https://api.itechsmart.dev/docs" },
          { label: "API health — live", href: "https://api.itechsmart.dev/v1/health", variant: "secondary" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Three doors, one pipeline" title="Pick your integration path." />
          <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {doors.map((door) => (
              <StaggerItem key={door.title}>
                <Card interactive className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <door.icon className="size-6 text-pulse" aria-hidden />
                    <Badge tone="proof" dot>{door.badge}</Badge>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-medium text-bright">{door.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">{door.copy}</p>
                  <a
                    href={door.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 font-mono text-sm text-pulse transition-colors hover:text-proof"
                  >
                    {door.link.label} →
                  </a>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="Hello, pipeline"
            title="From zero to a verified receipt in one call."
          />
          <Reveal delay={0.1}>
            <div className="mt-10 max-w-2xl overflow-hidden rounded-2xl border hairline bg-panel font-mono text-sm">
              <div className="border-b hairline px-5 py-3 text-xs text-dim">verify a receipt — curl</div>
              <div className="space-y-4 px-6 py-5">
                <p className="text-dim"># Verify any ProofLink receipt — no auth required</p>
                <p className="text-mist">curl https://api.itechsmart.dev/v1/verify/<span className="text-proof">f0b71cc0970c96e2</span></p>
                <pre className="text-pulse">{`{
  "receipt_id": "f0b71cc0970c96e2",
  "chain_status": "intact",
  "anchored": true,
  "verified": true
}`}</pre>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="Core MCP tools (66 total)"
            title="Every tool invokes the full governed, receipted pipeline."
            lede="All 66 tools are live at mcp.itechsmart.dev. Each call passes Arbiter policy enforcement before execution and returns a ProofLink receipt in the response."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <StaggerItem key={tool.name}>
                <Card className="h-full">
                  <p className="font-mono text-sm text-proof">
                    <span aria-hidden className="mr-2">{tool.emoji}</span>
                    {tool.name}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{tool.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="https://mcp.itechsmart.dev/mcp/tools" external arrow>
                Browse all 66 tools
              </Button>
              <Button href={site.subdomains.mcp} variant="secondary" external>
                MCP endpoint (SSE)
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section divider>
        <Container>
          <SectionHeading
            eyebrow="Governed by design"
            title="Your agent's calls get a policy review before execution."
            lede="The difference between agentic automation and controlled infrastructure is governance. Every side-effecting call passes through Arbiter first."
          />
          <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {governance.map((g) => (
              <StaggerItem key={g.title}>
                <Card interactive className="h-full">
                  <g.icon className="size-6 text-proof" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-medium text-bright">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{g.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
        <div className="mt-16">
          <Marquee slow>
            {agents.map((a) => (
              <span key={a} className="font-display text-2xl font-medium text-dim transition-colors hover:text-fog">
                {a}
              </span>
            ))}
          </Marquee>
        </div>
      </Section>

      <CtaBanner
        title="Wire your agent into governed, receipted execution."
        lede="Read the docs, hit the health endpoint, or talk to the engineers who built the pipeline."
        primary={{ label: "Read the docs", href: "https://api.itechsmart.dev/docs" }}
        secondary={{ label: "Talk to engineering", href: "/contact" }}
        note="REST · MCP · A2A — all governed, all receipted"
      />
    </>
  );
}
