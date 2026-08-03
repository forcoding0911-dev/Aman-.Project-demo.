import type { Config } from "tailwindcss";

/**
 * GHION HOTEL — DESIGN SYSTEM TOKENS
 * ------------------------------------------------
 * Brand direction: "Historic Oasis, Modernized"
 * Locked palette + type per project brief (Imperial Emerald / Warm Gold / Cream).
 * Everything else (spacing scale, radii, motion, breakpoints) derived to support
 * an editorial-luxury layout with generous whitespace and a garden-line signature motif.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        emerald: {
          950: "#04231a",
          900: "#064e3b",
          800: "#0a6b52",
          700: "#0f8768",
          600: "#15a37e",
          100: "#e3f3ee",
          50: "#f2f9f6",
        },
        gold: {
          700: "#b45309",
          600: "#d97706",
          500: "#e58e1f",
          200: "#f4d9a8",
          100: "#faeacb",
        },
        cream: {
          DEFAULT: "#fdfbf7",
          100: "#f7f2e9",
          200: "#f0e8d8",
        },
        charcoal: {
          DEFAULT: "#1f2937",
          light: "#3d4654",
          soft: "#5b6472",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.04", letterSpacing: "-0.01em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-md": ["2.5rem", { lineHeight: "1.12" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "1440px",
        prose: "68ch",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "14px",
        lg: "22px",
        xl: "32px",
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(6, 78, 59, 0.25)",
        float: "0 20px 60px -15px rgba(6, 78, 59, 0.35)",
        gold: "0 8px 24px -8px rgba(217, 119, 6, 0.45)",
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, #d97706, transparent)",
      },
      keyframes: {
        /* Scroll reveal + page entrance — fade + 20px rise, functional not decorative */
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        /* Skeleton loading shimmer — communicates progress, not decoration.
           Animates transform only (not background-position) to stay GPU-accelerated. */
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        /* Form validation feedback — small, fast, functional */
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-6px)" },
          "75%": { transform: "translateX(6px)" },
        },
        /* Success confirmation — smaller rise, faster than scroll-reveal */
        "success-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        /* Page transition — fade + 8px rise on every route change */
        "page-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        /* Dialog/lightbox open — scale + fade, no slide */
        "dialog-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 450ms cubic-bezier(0,0,0.2,1) forwards",
        shimmer: "shimmer 1.2s linear infinite",
        shake: "shake 300ms ease-in-out",
        "success-in": "success-in 250ms ease-out forwards",
        "page-in": "page-in 300ms ease-out forwards",
        "dialog-in": "dialog-in 220ms ease-out forwards",
        "fade-in": "fade-in 220ms ease-out forwards",
      },
      transitionTimingFunction: {
        /* Material "decelerate" curve — used for scroll-triggered motion */
        decelerate: "cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        120: "120ms",
        180: "180ms",
        220: "220ms",
      },
    },
  },
  plugins: [],
};

export default config;
