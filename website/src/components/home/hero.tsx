"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ReceiptCard } from "@/components/ui/receipt-card";
import { GridPattern, Glow } from "@/components/ui/grid-pattern";
import { TextReveal } from "@/components/motion/text-reveal";
import { cta, site } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const drift = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const receiptDrift = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div ref={ref} className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-16">
      <GridPattern />
      <Glow tone="pulse" className="-left-40 top-10 h-[30rem] w-[30rem]" />
      <Glow tone="proof" className="-right-32 bottom-0 h-[26rem] w-[26rem]" />

      <motion.div
        style={reduce ? undefined : { opacity: fade, y: drift }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-12"
      >
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge tone="proof" dot className="mb-7">
              UAIO Loop · 2026-ready autonomous ops
            </Badge>
          </motion.div>

          <h1 className="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-bright sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            <TextReveal text="Your infrastructure" delay={0.1} />
            <br />
            <TextReveal text="fixes itself." delay={0.25} wordClassName="text-gradient" />
            <br />
            <TextReveal text="You get the proof." delay={0.4} />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-fog sm:text-xl"
          >
            iTechSmart is the <strong className="font-semibold text-mist">Unified Autonomous IT Operations</strong>{" "}
            platform: it detects, diagnoses, and fixes infrastructure issues on its own — then cryptographically
            proves every action with a Bitcoin-anchored ProofLink receipt.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={cta.primary.href} size="lg" arrow>
              {cta.primary.label}
            </Button>
            <Button href={site.subdomains.verify} variant="secondary" size="lg" external>
              See live proof
            </Button>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-dim"
          >
            Detect · Decide · Do · Prove — scroll to follow the loop
          </motion.p>
        </div>

        {/* Floating receipt */}
        <motion.div
          style={reduce ? undefined : { y: receiptDrift }}
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <ReceiptCard />
          <p className="mt-4 text-center font-mono text-xs text-dim">
            A real receipt from the public ledger — sealed 2026-07-09
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#loop"
        aria-label="Scroll to the UAIO loop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dim transition-colors hover:text-proof"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="size-5" aria-hidden />
        </motion.span>
      </motion.a>
    </div>
  );
}
