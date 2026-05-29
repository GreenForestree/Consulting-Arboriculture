"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Subtle background shift after the user scrolls past the hero edge
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled || open
          ? "bg-cream-50/90 backdrop-blur border-b border-forest-700/10"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Logo withSlogan />

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-tight transition-colors",
                    active
                      ? "text-forest-900"
                      : "text-forest-900/70 hover:text-forest-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={site.contact.phoneHref}
              className="text-sm font-medium text-forest-900/80 hover:text-forest-900"
            >
              {site.contact.phone}
            </a>
            <Button href="/contact" size="md">Request consultation</Button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-forest-900 hover:bg-forest-700/5"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden bg-cream-50 transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100 border-b border-forest-700/10" : "max-h-0 opacity-0",
        )}
        aria-hidden={!open}
      >
        <Container>
          <nav aria-label="Mobile" className="py-6 flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-3 rounded-lg text-lg font-serif",
                    active
                      ? "bg-forest-700/5 text-forest-900"
                      : "text-forest-900/80 hover:bg-forest-700/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-forest-700/10">
              <a href={site.contact.phoneHref} className="px-3 text-sm font-medium text-forest-900/80">
                {site.contact.phone}
              </a>
              <Button href="/contact" size="lg" className="w-full">Request consultation</Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
