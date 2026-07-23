"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { nav, cta, type NavGroup } from "@/lib/site";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || mobileOpen ? "glass border-b hairline" : "bg-transparent",
      )}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((group) => (
            <NavItem key={group.label} group={group} open={openGroup === group.label} setOpen={setOpenGroup} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="/auth/sign-in" className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-bright">
            Sign in
          </a>
          <Button href={cta.demo.href} variant="ghost" className="h-10 px-4 text-sm">
            Book demo
          </Button>
          <Button href={cta.primary.href} className="h-10 px-5 text-sm" arrow>
            Get started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-mist lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mega menu panel */}
      <AnimatePresence>
        {openGroup && (
          <MegaPanel key={openGroup} group={nav.find((g) => g.label === openGroup)!} />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t hairline lg:hidden"
          >
            <div className="space-y-6 px-5 py-6">
              {nav.map((group) =>
                group.columns ? (
                  <div key={group.label}>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{group.label}</p>
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {group.columns.flatMap((col) =>
                        col.links.map((link) => (
                          <Link
                            key={`${col.title}-${link.label}`}
                            href={link.href}
                            className="rounded-lg px-3 py-2 text-sm text-mist hover:bg-card hover:text-bright"
                          >
                            {link.label}
                          </Link>
                        )),
                      )}
                    </div>
                  </div>
                ) : (
                  <Link key={group.label} href={group.href!} className="block text-base font-medium text-bright">
                    {group.label}
                  </Link>
                ),
              )}
              <div className="flex flex-col gap-3 border-t hairline pt-6">
                <Button href={cta.primary.href} arrow>
                  {cta.primary.label}
                </Button>
                <Button href={cta.demo.href} variant="secondary">
                  {cta.demo.label}
                </Button>
                <a href="/auth/sign-in" className="py-2 text-center text-sm text-fog hover:text-bright">
                  Sign in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  group,
  open,
  setOpen,
}: {
  group: NavGroup;
  open: boolean;
  setOpen: (label: string | null) => void;
}) {
  if (!group.columns) {
    return (
      <Link
        href={group.href!}
        className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-bright"
        onMouseEnter={() => setOpen(null)}
      >
        {group.label}
      </Link>
    );
  }
  return (
    <button
      className={cn(
        "flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors",
        open ? "text-bright" : "text-mist hover:text-bright",
      )}
      onMouseEnter={() => setOpen(group.label)}
      onClick={() => setOpen(open ? null : group.label)}
      aria-expanded={open}
    >
      {group.label}
      <ChevronDown className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")} aria-hidden />
    </button>
  );
}

function MegaPanel({ group }: { group: NavGroup }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-16 hidden border-b hairline glass lg:block"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-10 px-12 py-10">
        {group.columns!.map((col) => (
          <div key={col.title}>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{col.title}</p>
            <ul className="space-y-1">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-card"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-bright group-hover:text-proof">
                      {link.label}
                      {link.badge && (
                        <Badge tone="proof" className="px-2 py-0 text-[9px]">
                          {link.badge}
                        </Badge>
                      )}
                    </span>
                    {link.description && <span className="mt-0.5 text-[13px] text-fog">{link.description}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
