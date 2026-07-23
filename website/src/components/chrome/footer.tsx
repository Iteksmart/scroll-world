import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import { footerColumns, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t hairline bg-panel/60">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-fog">
              {site.legalName} — the Unified Autonomous IT Operations (UAIO) platform. Autonomous detection, governed
              remediation, cryptographic proof.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="proof" dot>
                Proof ledger live
              </Badge>
              <Badge tone="pulse">66 MCP tools</Badge>
            </div>
            <div className="mt-6 space-y-1.5 font-mono text-xs text-dim">
              <p>
                <a className="transition-colors hover:text-proof" href={site.subdomains.verify} target="_blank" rel="noopener noreferrer">
                  verify.itechsmart.dev
                </a>{" "}
                — public receipt verifier
              </p>
              <p>
                <a className="transition-colors hover:text-proof" href={site.subdomains.mcp} target="_blank" rel="noopener noreferrer">
                  mcp.itechsmart.dev
                </a>{" "}
                — agent gateway (MCP · A2A)
              </p>
              <p>
                <a className="transition-colors hover:text-proof" href={site.subdomains.prooflink} target="_blank" rel="noopener noreferrer">
                  prooflink.itechsmart.dev
                </a>{" "}
                — receipt platform
              </p>
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-fog transition-colors hover:text-bright">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t hairline pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} {site.legalName} All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-dim">
            <Link href="/privacy" className="transition-colors hover:text-fog">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-fog">
              Terms
            </Link>
            <Link href="/security" className="transition-colors hover:text-fog">
              Security
            </Link>
            <Link href="/credibility" className="transition-colors hover:text-fog">
              Credibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
