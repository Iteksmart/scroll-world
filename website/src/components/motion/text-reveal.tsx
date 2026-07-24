"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type TextRevealProps = {
  /** Plain text; revealed word-by-word from behind a mask. */
  text: string;
  className?: string;
  /**
   * Class applied to each word span. Required for `text-gradient`-style
   * background-clip effects — clipping on the outer tag doesn't reach the
   * nested word spans, so the words would render transparent (invisible).
   */
  wordClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/** Unseen.co-style masked word reveal for headlines. */
export function TextReveal({ text, className, wordClassName, delay = 0, as: Tag = "span" }: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <Tag className={className}>
        {wordClassName ? <span className={wordClassName}>{text}</span> : text}
      </Tag>
    );
  }

  // One observer on the wrapper, words staggered via variants: per-word
  // whileInView observers can freeze a word mid-flight when hydration jank
  // coincides with the animation start (seen on /suite, mobile viewport).
  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={i}>
            <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
              <motion.span
                className={`inline-block will-change-transform ${wordClassName ?? ""}`}
                variants={{ hidden: { y: "110%" }, visible: { y: 0, transition: { duration: 0.85, ease } } }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
