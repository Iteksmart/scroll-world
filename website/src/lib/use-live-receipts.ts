"use client";

import { useEffect, useState } from "react";

/** Documented baseline shown until (and unless) a live count arrives. */
export const RECEIPT_BASELINE = 121_400;

/**
 * Public, no-auth endpoints that can report the sealed-receipt count,
 * tried in order. Shapes differ, so the parser searches for any
 * receipt-ish numeric field.
 */
const CANDIDATES = [
  "https://verify.itechsmart.dev/api/stats",
  "https://api.itechsmart.dev/v1/health",
  "https://api.itechsmart.dev/v1/ledger",
];

/** Only trust a live number that's at least the publicly-verified floor —
 * some endpoints report a subset of the chain. */
const FLOOR = 90_000;

function findReceiptCount(node: unknown, depth = 0): number | null {
  if (depth > 4 || node == null) return null;
  if (typeof node === "number") return node >= FLOOR ? node : null;
  if (Array.isArray(node)) return null;
  if (typeof node === "object") {
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      if (/receipt|sealed|ledger|chain/i.test(key)) {
        if (typeof value === "number" && value >= FLOOR) return value;
        if (typeof value === "string") {
          const n = parseInt(value.replace(/[^0-9]/g, ""), 10);
          if (Number.isFinite(n) && n >= FLOOR) return n;
        }
        const nested = findReceiptCount(value, depth + 1);
        if (nested) return nested;
      }
    }
    for (const value of Object.values(node as Record<string, unknown>)) {
      const nested = findReceiptCount(value, depth + 1);
      if (nested) return nested;
    }
  }
  return null;
}

/**
 * Live sealed-receipt count from the public ledger, falling back to the
 * documented baseline when no endpoint is reachable (CORS/offline).
 */
export function useLiveReceipts(): { count: number; live: boolean } {
  const [state, setState] = useState({ count: RECEIPT_BASELINE, live: false });

  useEffect(() => {
    let cancelled = false;

    const cached = sessionStorage.getItem("its-live-receipts");
    if (cached) {
      const n = Number(cached);
      if (Number.isFinite(n) && n >= FLOOR) setState({ count: n, live: true });
    }

    (async () => {
      for (const url of CANDIDATES) {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 4000);
          const res = await fetch(url, { signal: controller.signal });
          clearTimeout(timer);
          if (!res.ok) continue;
          const data = await res.json();
          const count = findReceiptCount(data);
          if (count && !cancelled) {
            sessionStorage.setItem("its-live-receipts", String(count));
            setState({ count, live: true });
            return;
          }
        } catch {
          /* try the next candidate */
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
