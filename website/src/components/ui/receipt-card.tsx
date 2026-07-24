import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type Row = { k: string; v: string; tone?: "proof" | "ember" | "default" };

const defaultRows: Row[] = [
  { k: "receipt", v: "76a7d0bee971496c" },
  { k: "action", v: "HUMAN-APPROVED restart_container → ok", tone: "proof" },
  { k: "actor", v: "uaio-twin-service" },
  { k: "timestamp", v: "2026-07-09T12:51:42Z" },
  { k: "chain_pos", v: "#98234 · prev fa288c06…" },
  { k: "hash", v: "2d23832d…b749d" },
  { k: "sealed", v: "SHA-256 · Ed25519 · OTS→Bitcoin", tone: "proof" },
];

/** The signature ProofLink receipt — brand artifact used across the site. */
export function ReceiptCard({ rows = defaultRows, className, verifyHref }: { rows?: Row[]; className?: string; verifyHref?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-proof/25 bg-panel/90 font-mono text-[13px] shadow-glow-proof",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-proof/20 bg-proof/[0.06] px-5 py-3">
        <span className="flex items-center gap-2 text-proof">
          <ShieldCheck className="size-4" aria-hidden />
          ProofLink Receipt
        </span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-proof/70">SHA-256 sealed</span>
      </div>
      <dl className="space-y-2.5 px-5 py-5">
        {rows.map((row) => (
          <div key={row.k} className="flex items-baseline justify-between gap-6">
            <dt className="shrink-0 text-dim">{row.k}</dt>
            <dd
              className={cn(
                "truncate text-right",
                row.tone === "proof" ? "text-proof" : row.tone === "ember" ? "text-ember" : "text-mist",
              )}
            >
              {row.v}
            </dd>
          </div>
        ))}
      </dl>
      <div className="border-t hairline px-5 py-3">
        <a
          href={verifyHref ?? `${site.subdomains.verify}/76a7d0bee971496c`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-pulse transition-colors hover:text-proof"
        >
          🔎 Verify this receipt yourself →
        </a>
      </div>
      {/* corner shimmer */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-proof/10 blur-3xl" />
    </div>
  );
}
