"use client";

import { NumberTicker } from "@/components/motion/number-ticker";
import { useLiveReceipts } from "@/lib/use-live-receipts";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The "Receipts sealed" stat tile — counts the live public ledger and links
 * to the verifier. Falls back to the documented baseline when the ledger
 * API isn't reachable from the visitor's browser.
 */
export function LiveReceiptsStat({ className }: { className?: string }) {
  const { count, live } = useLiveReceipts();

  return (
    <a
      href={site.subdomains.verify}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group block p-8 transition-colors hover:bg-card sm:p-10", className)}
      aria-label={`${count.toLocaleString()} receipts sealed — verify on the public ledger`}
    >
      <p className="font-display text-4xl font-medium tracking-tight text-bright sm:text-5xl">
        {/* key remounts the ticker when the live count lands, so it animates to the new value */}
        <NumberTicker key={count} value={count} suffix="+" className="tabular-nums" />
      </p>
      <p className="mt-3 flex items-center gap-2 text-sm font-medium text-mist">
        Receipts sealed
        <span
          className={cn(
            "size-1.5 rounded-full",
            live ? "animate-pulse-soft bg-proof" : "bg-dim/60",
          )}
          aria-hidden
        />
      </p>
      <p className="mt-1 text-xs text-dim transition-colors group-hover:text-proof">
        {live ? "live from the public ledger — tap to verify" : "90,000+ publicly verifiable — tap to verify"}
      </p>
    </a>
  );
}
