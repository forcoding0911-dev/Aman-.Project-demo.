import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

// Transform + color only (GPU-accelerated, no layout thrash). Hover lift
// runs at 180ms; press feedback (active:scale) runs faster at 120ms so a
// tap always feels immediate even mid-hover-transition.
const base =
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-sm transition-[transform,background-color,box-shadow] duration-180 ease-in-out active:duration-120 active:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-600 text-cream hover:bg-gold-700 shadow-gold hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-emerald-900 text-cream hover:bg-emerald-800 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-emerald-900 hover:text-emerald-900",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
