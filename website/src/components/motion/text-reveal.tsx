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

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden>
            <motion.span
              className={`inline-block will-change-transform ${wordClassName ?? ""}`}
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: delay + i * 0.045, ease }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
