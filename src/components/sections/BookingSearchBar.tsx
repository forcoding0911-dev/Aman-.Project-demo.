"use client";

import { useId, useState } from "react";
import { CalendarDays, Users, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** "floating" is the full 4-column hero/rooms-page bar. "compact" stacks
   *  vertically for use inside the room detail sidebar. */
  variant?: "floating" | "compact";
};

export default function BookingSearchBar({ className, variant = "floating" }: Props) {
  const uid = useId();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo-only: in production this posts to the reservation API and routes
    // the guest into the checkout flow. Simulated here for the prototype.
    window.setTimeout(() => setSubmitting(false), 900);
  }

  const isCompact = variant === "compact";

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Check room availability"
      className={cn(
        "grid gap-3 rounded-md",
        isCompact
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] bg-cream/95 backdrop-blur-md p-4 shadow-float border border-cream/60",
        className
      )}
    >
      <label
        className={cn(
          "flex flex-col gap-1 px-3 py-1",
          !isCompact && "border-b sm:border-b-0 sm:border-r border-charcoal/10"
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
          Check-in
        </span>
        <span className="flex items-center gap-2 text-charcoal">
          <CalendarDays size={16} className="text-gold-600 shrink-0" aria-hidden="true" />
          <input
            type="date"
            required
            aria-label="Check-in date"
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </span>
      </label>

      <label
        className={cn(
          "flex flex-col gap-1 px-3 py-1",
          !isCompact && "border-b sm:border-b-0 lg:border-r border-charcoal/10"
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
          Check-out
        </span>
        <span className="flex items-center gap-2 text-charcoal">
          <CalendarDays size={16} className="text-gold-600 shrink-0" aria-hidden="true" />
          <input
            type="date"
            required
            aria-label="Check-out date"
            className="w-full bg-transparent text-sm focus:outline-none"
          />
        </span>
      </label>

      <label className="flex flex-col gap-1 px-3 py-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
          Guests
        </span>
        <span className="flex items-center gap-2 text-charcoal">
          <Users size={16} className="text-gold-600 shrink-0" aria-hidden="true" />
          <select
            defaultValue="2"
            aria-label="Number of guests"
            id={`${uid}-guests`}
            className="w-full bg-transparent text-sm focus:outline-none"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4+ Guests</option>
          </select>
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "flex items-center justify-center gap-2 rounded-sm bg-gold-600 px-6 py-3 text-sm font-semibold text-cream shadow-gold transition-all duration-300 hover:bg-gold-700 disabled:opacity-60",
          isCompact && "w-full"
        )}
      >
        <Search size={16} aria-hidden="true" />
        {submitting ? "Checking…" : "Check Availability"}
      </button>
    </form>
  );
}
