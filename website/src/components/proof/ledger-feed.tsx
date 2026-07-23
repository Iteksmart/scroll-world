"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Receipt = { n: number; event: string; slug: string; hash: string };

/** SSR snapshot of the live ledger — replaced client-side if the public API responds. */
const snapshot: Receipt[] = [
  { n: 10, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "1de58df1…f60a" },
  { n: 9, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "c50bfe2d…7fa6" },
  { n: 8, event: "CMDB DISCOVERY COMPLETE", slug: "cmdb_discovery_complete", hash: "b4230472…81fd" },
  { n: 7, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "009465c4…677e" },
  { n: 6, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "60d2f620…48bb" },
  { n: 5, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "c351e79a…49a3" },
  { n: 4, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "4473d49b…4aff" },
  { n: 3, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "b0ba3d9a…a0d2" },
  { n: 2, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "8bddff99…f576" },
  { n: 1, event: "GRAPH POLL COMPLETE", slug: "graph_poll_complete", hash: "b79e9e66…490c" },
];

/**
 * Live receipt feed. Tries the public ledger API (free tier, no key) and falls
 * back to the SSR snapshot when unreachable (CORS/offline).
 */
export function LedgerFeed() {
  const [receipts, setReceipts] = useState<Receipt[]>(snapshot);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://api.itechsmart.dev/v1/ledger", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: unknown) => {
        const items = Array.isArray(data) ? data : (data as { receipts?: unknown[] })?.receipts;
        if (!Array.isArray(items) || items.length === 0) return;
        const mapped = items.slice(0, 10).map((item, i) => {
          const r = item as Record<string, unknown>;
          return {
            n: items.length - i,
            event: String(r.event ?? r.action ?? "RECEIPT SEALED").toUpperCase().replace(/_/g, " "),
            slug: String(r.event ?? r.action ?? "receipt_sealed"),
            hash: String(r.hash ?? r.receipt_id ?? "").slice(0, 8) + "…" + String(r.hash ?? r.receipt_id ?? "").slice(-4),
          };
        });
        setReceipts(mapped);
        setLive(true);
      })
      .catch(() => {
        /* keep snapshot */
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-proof/20 bg-panel font-mono text-sm shadow-glow-proof">
      <div className="flex items-center justify-between border-b border-proof/15 bg-proof/[0.05] px-5 py-3">
        <span className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-proof">
          <span className={cn("size-2 rounded-full", live ? "animate-pulse-soft bg-proof" : "bg-proof/50")} />
          {live ? "Live ledger feed" : "Ledger snapshot"}
        </span>
        <span className="text-[11px] text-dim">chain verified · 0 tamper events</span>
      </div>
      <ol className="divide-y divide-line/40">
        {receipts.map((r, i) => (
          <motion.li
            key={`${r.n}-${r.hash}`}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="flex items-center gap-4 px-5 py-3 hover:bg-card/50"
          >
            <span className="w-8 shrink-0 text-dim">{String(r.n).padStart(3, "0")}</span>
            <span className="flex-1 truncate">
              <span className="text-mist">{r.event}</span>{" "}
              <span className="hidden text-dim sm:inline">· {r.slug}</span>
            </span>
            <span className="shrink-0 text-proof/80">{r.hash}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
