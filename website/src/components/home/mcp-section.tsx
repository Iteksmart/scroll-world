import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/motion/marquee";
import { site } from "@/lib/site";

const agents = ["Claude", "LangGraph", "CrewAI", "AutoGen", "OpenAI Agents", "Semantic Kernel", "LlamaIndex", "n8n"];

export function McpSection() {
  return (
    <Section divider className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="66 MCP tools · live"
              eyebrowTone="pulse"
              title="Point any AI agent at a pipeline that can prove itself."
              lede="Claude, LangGraph, CrewAI — any MCP or A2A client can drive the governed, proof-sealed UAIO pipeline. 66 tools, cryptographic receipts, public ledger."
            />
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={site.subdomains.mcp} arrow external>
                  Open MCP docs
                </Button>
                <Button href="/mcp" variant="secondary">
                  MCP &amp; A2A overview
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border hairline bg-panel/95 font-mono text-sm shadow-card">
              <div className="flex items-center justify-between border-b hairline px-5 py-3">
                <span className="text-xs text-dim">agent-gateway</span>
                <Badge tone="pulse" dot>
                  SSE · streaming
                </Badge>
              </div>
              <div className="space-y-4 px-6 py-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-dim"># MCP endpoint (SSE)</p>
                  <p className="mt-1 break-all text-pulse">{site.subdomains.mcp}/sse</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-dim"># Public demo key · read-only</p>
                  <p className="mt-1 break-all text-mist">Authorization: Bearer MCP-SECRETEYE-123456</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-dim"># Discover</p>
                  <p className="mt-1 text-mist">
                    GET <span className="text-proof">/mcp/tools</span> · GET{" "}
                    <span className="text-proof">/.well-known/agent.json</span>{" "}
                    <span className="text-dim">(A2A card)</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
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
  );
}
