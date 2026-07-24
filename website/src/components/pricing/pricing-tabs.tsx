"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/cn";
import { pricingCategories } from "@/data/pricing";
import { Badge } from "@/components/ui/badge";

/** 13-category pricing browser with sticky tab nav and animated tier cards. */
export function PricingTabs() {
  const [active, setActive] = useState(pricingCategories[0]?.id);
  const category = pricingCategories.find((c) => c.id === active) ?? pricingCategories[0];
  if (!category) return null;

  return (
    <div>
      {/* Tab rail */}
      <div className="sticky top-16 z-30 -mx-5 border-b hairline glass px-5 py-3 sm:-mx-8 sm:px-8">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {pricingCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-all",
                c.id === active
                  ? "border-proof/50 bg-proof/10 text-proof"
                  : "border-line bg-card/40 text-fog hover:border-line-bright hover:text-mist",
              )}
              aria-pressed={c.id === active}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pt-12"
        >
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-bright">{category.title}</h2>
            <p className="mt-3 leading-relaxed text-fog">{category.blurb}</p>
          </div>

          <div
            className={cn(
              "mt-10 grid gap-5",
              category.tiers.length >= 3 ? "lg:grid-cols-3" : category.tiers.length === 2 ? "lg:grid-cols-2 lg:max-w-4xl" : "lg:max-w-xl",
            )}
          >
            {category.tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7 transition-all duration-300",
                  tier.highlight
                    ? "border-proof/40 bg-card shadow-glow-proof"
                    : "hairline bg-card/50 hover:border-line-bright",
                )}
              >
                {tier.badge && (
                  <Badge tone={tier.highlight ? "proof" : "neutral"} className="absolute -top-3 left-6">
                    {tier.badge}
                  </Badge>
                )}
                <h3 className="font-display text-lg font-medium text-bright">{tier.name}</h3>
                <p className="mt-4 font-display text-3xl font-medium tracking-tight text-bright">
                  {tier.price}
                  {tier.cadence && <span className="ml-1 text-sm font-normal text-dim">{tier.cadence}</span>}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fog">{tier.blurb}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-mist">
                      <Check className="mt-0.5 size-4 shrink-0 text-proof" aria-hidden />
                      {f}
                    </li>
                  ))}
                  {tier.notIncluded?.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-dim">
                      <Minus className="mt-0.5 size-4 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta.href}
                  className={cn(
                    "mt-7 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
                    tier.highlight
                      ? "bg-proof text-ink shadow-glow-proof hover:bg-[#5ff0b8]"
                      : "border border-line-bright bg-card/60 text-bright hover:border-proof/50",
                  )}
                >
                  {tier.cta.label}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
