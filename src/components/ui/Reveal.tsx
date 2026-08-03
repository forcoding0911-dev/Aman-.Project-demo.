"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-reveal wrapper — the site's one scroll animation, used consistently
 * everywhere instead of a different effect per section. Fires once per
 * element (never re-animates on re-scroll) so it reads as functional
 * hierarchy, not decoration. Hand-rolled on IntersectionObserver rather
 * than an animation library — one small effect, zero extra dependency.
 *
 * Spec: fade + 20px rise, 450ms, decelerate curve, triggers at 15% visible.
 * Use `delay` (in ms, multiples of 80) to stagger sibling elements.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
      className={cn(!visible && "opacity-0", visible && "animate-reveal-up", className)}
    >
      {children}
    </div>
  );
}
