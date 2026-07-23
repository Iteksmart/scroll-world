"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type NumberTickerProps = {
  value: number;
  /** Digits after the decimal point. */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/** Springs from 0 to `value` when scrolled into view. */
export function NumberTicker({ value, decimals = 0, prefix = "", suffix = "", className }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 34, stiffness: 90 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const format = (v: number) =>
      `${prefix}${Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(v)}${suffix}`;

    if (reduce) {
      if (ref.current) ref.current.textContent = format(value);
      return;
    }
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = format(v);
    });
    return unsub;
  }, [spring, prefix, suffix, decimals, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
