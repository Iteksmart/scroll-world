import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GridPattern, Glow } from "@/components/ui/grid-pattern";

export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh items-center overflow-hidden pt-16">
      <GridPattern />
      <Glow tone="proof" className="left-1/2 top-1/3 h-80 w-80 -translate-x-1/2" />
      <Container className="relative py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-dim">receipt_not_found</p>
        <h1 className="mt-4 font-display text-6xl font-medium tracking-tight text-bright sm:text-8xl">404</h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-fog">
          This page isn't on the ledger. Unlike our fixes, we can't prove it ever existed.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" arrow>
            Back to the loop
          </Button>
          <Button href="/suite" variant="secondary">
            Explore the suite
          </Button>
        </div>
      </Container>
    </div>
  );
}
