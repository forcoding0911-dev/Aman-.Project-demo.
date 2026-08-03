"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow] duration-220 ease-in-out",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-page flex items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-10">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-gold-700",
                pathname === item.href ? "text-emerald-900" : "text-charcoal"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/rooms" size="sm">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center p-2 text-emerald-900"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile fullscreen overlay drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 z-40 bg-cream transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col items-center justify-center gap-8 px-6"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-3xl text-emerald-900"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/rooms" size="lg" className="mt-4">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
