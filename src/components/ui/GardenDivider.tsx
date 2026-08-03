import { cn } from "@/lib/utils";

/**
 * Signature element: a single continuous line-art frond, referencing the
 * hotel's namesake gardens. Used sparingly as a section transition instead
 * of a generic rule/gradient — the one recognizable visual "signature" of
 * the redesign, per the brand story (historic garden oasis).
 */
export default function GardenDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center py-2", className)} aria-hidden="true">
      <svg
        width="220"
        height="28"
        viewBox="0 0 220 28"
        fill="none"
        className="text-gold-600"
      >
        <path
          d="M2 14 C 40 4, 70 24, 110 14 C 150 4, 180 24, 218 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M60 12 C 63 6, 68 6, 70 12 C 68 10, 63 10, 60 12Z" fill="currentColor" />
        <path d="M150 16 C 153 10, 158 10, 160 16 C 158 14, 153 14, 150 16Z" fill="currentColor" />
      </svg>
    </div>
  );
}
