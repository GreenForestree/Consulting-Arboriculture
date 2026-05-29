"use client";

import { createElement, useEffect, useRef, useState, type JSX } from "react";
import { cn } from "@/lib/utils";

type Tag = keyof JSX.IntrinsicElements;

// Reveal-on-scroll wrapper. Defers to globals.css [data-reveal] styles for the
// actual animation, and is a no-op under prefers-reduced-motion (handled in CSS).
export function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If IO isn't available (older browsers), just show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      "data-reveal": true,
      "data-visible": visible ? "true" : undefined,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
      className: cn(className),
    },
    children,
  );
}
