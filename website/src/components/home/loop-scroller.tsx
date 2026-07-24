"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { loopSteps } from "@/data/loop";
import { Badge } from "@/components/ui/badge";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * The signature scroll-scrubbed section: a sticky stage where scroll position
 * drives the 10-step UAIO loop — one continuous "flight" through the pipeline,
 * no cuts (scroll-world technique, rendered in code instead of video).
 */
export function LoopScroller() {
  const reduce = useReducedMotion();
  if (reduce) return <LoopStatic />;
  return <LoopScrubbed />;
}

function LoopScrubbed() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(loopSteps.length - 1, Math.floor(v * loopSteps.length));
    setActive(idx);
  });

  // The orbital ring rotates through the whole journey; the beam dash flows.
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const step = loopSteps[active];

  return (
    <div ref={trackRef} className="relative" style={{ height: `${loopSteps.length * 60}vh` }}>
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden">
        {/* progress rail */}
        <div className="pointer-events-none absolute left-5 top-1/2 hidden h-56 w-px -translate-y-1/2 bg-line sm:left-10 lg:block">
          <motion.div className="w-px origin-top bg-proof" style={{ scaleY: railScale, height: "100%" }} />
        </div>

        {/* rotating orbit backdrop */}
        <motion.div
          aria-hidden
          style={{ rotate: ringRotate }}
          className="pointer-events-none absolute left-1/2 top-1/2 size-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/50 [mask-image:radial-gradient(circle,black_30%,transparent_72%)]"
        >
          <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-proof shadow-glow-proof" />
          <div className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-pulse" />
        </motion.div>

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          {/* Left: step meta */}
          <div className="relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
              The UAIO loop · step {step.n} / 10
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -26 }}
                transition={{ duration: 0.45, ease }}
              >
                <h3 className="mt-4 font-display text-4xl font-medium tracking-tight text-bright sm:text-5xl lg:text-6xl">
                  <span aria-hidden className="mr-3">{step.icon}</span>
                  {step.title}
                </h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-fog">{step.copy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.chips.map((chip) => (
                    <Badge key={chip} tone={active === 6 ? "proof" : "neutral"}>
                      {chip}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* step dots */}
            <div className="mt-10 flex items-center gap-2">
              {loopSteps.map((s, i) => (
                <div
                  key={s.n}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    i === active ? "w-8 bg-proof" : i < active ? "w-3 bg-proof/40" : "w-3 bg-line",
                  )}
                />
              ))}
            </div>
          </div>

          {/* Right: terminal card */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.n}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -18 }}
                transition={{ duration: 0.45, ease }}
                className="overflow-hidden rounded-2xl border hairline bg-panel/95 shadow-card"
              >
                <div className="flex items-center gap-2 border-b hairline px-5 py-3">
                  <span className="size-2.5 rounded-full bg-alert/70" />
                  <span className="size-2.5 rounded-full bg-ember/70" />
                  <span className="size-2.5 rounded-full bg-proof/70" />
                  <span className="ml-3 font-mono text-xs text-dim">uaio · step-{step.n.toLowerCase()}</span>
                </div>
                <div className="space-y-3 px-6 py-6 font-mono text-sm">
                  {step.terminal.map((row, i) => (
                    <motion.div
                      key={row.k}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
                      className="flex items-baseline justify-between gap-6"
                    >
                      <span className="text-dim">{row.k}:</span>
                      <span
                        className={cn(
                          "text-right",
                          row.tone === "proof" && "text-proof",
                          row.tone === "ember" && "text-ember",
                          row.tone === "pulse" && "text-pulse",
                          !row.tone && "text-mist",
                        )}
                      >
                        {row.v}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {/* flowing beam under the card */}
                <svg aria-hidden className="h-1.5 w-full" preserveAspectRatio="none" viewBox="0 0 400 4">
                  <line
                    x1="0"
                    y1="2"
                    x2="400"
                    y2="2"
                    stroke="url(#beamGrad)"
                    strokeWidth="3"
                    strokeDasharray="24 14"
                    className="animate-beam"
                  />
                  <defs>
                    <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#4cc3f7" />
                      <stop offset="100%" stopColor="#3ce8a4" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Reduced-motion / no-JS-friendly fallback: a plain vertical timeline. */
function LoopStatic() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-5 py-10 sm:px-8">
      {loopSteps.map((step) => (
        <div key={step.n} className="rounded-2xl border hairline bg-card/70 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Step {step.n}</p>
          <h3 className="mt-2 font-display text-2xl font-medium text-bright">
            <span aria-hidden className="mr-2">{step.icon}</span>
            {step.title}
          </h3>
          <p className="mt-3 text-fog">{step.copy}</p>
        </div>
      ))}
    </div>
  );
}

// Hydration guard: framer's sticky scrub needs the window; render static first paint.
export function LoopScrollerSafe() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ height: `${loopSteps.length * 60}vh` }} />;
  return <LoopScroller />;
}

/**
 * Server-rendered, visually-hidden copy of all 10 steps so crawlers and
 * screen readers get the full loop narrative — the animated scrub only ever
 * shows one step at a time in the DOM.
 */
export function LoopSeoFallback() {
  return (
    <ol className="sr-only">
      {loopSteps.map((step) => (
        <li key={step.n}>
          <h3>
            Step {step.n}: {step.title}
          </h3>
          <p>{step.copy}</p>
        </li>
      ))}
    </ol>
  );
}
