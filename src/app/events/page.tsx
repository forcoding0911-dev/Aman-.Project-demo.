import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import EventLeadForm from "@/components/sections/EventLeadForm";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { Users2, Presentation, PartyPopper, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Conferences & Weddings",
  description:
    "Host conferences, diplomatic summits, and garden weddings at Ghion Hotel Addis Ababa — venues for up to 600 guests.",
  alternates: { canonical: "/events" },
};

const venues = [
  { icon: Presentation, name: "Grand Ballroom", capacity: "600 guests, theatre style", desc: "Full AV setup, simultaneous interpretation booths, and private entrance." },
  { icon: Users2, name: "Executive Boardroom", capacity: "30 delegates", desc: "Private meeting room for negotiations and delegation visits." },
  { icon: PartyPopper, name: "Garden Pavilion", capacity: "300 guests", desc: "Open-air venue set within the botanical gardens, ideal for weddings." },
  { icon: Utensils, name: "Private Dining Hall", capacity: "80 guests, seated", desc: "Dedicated catering team for state dinners and receptions." },
];

export default function EventsPage() {
  return (
    <div className="pt-16 pb-24">
      <div className="relative h-[50vh] min-h-[380px] w-full overflow-hidden">
        <Image
          src={images.gallery.items[6].src}
          alt="Conference hall arranged for a large event at Ghion Hotel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/60" aria-hidden="true" />
        <div className="container-page relative z-10 flex h-full items-end pb-12">
          <Reveal>
            <p className="eyebrow text-gold-400 mb-3">Conferences & Weddings</p>
            <h1 className="text-display-lg text-cream max-w-2xl text-balance">
              Ethiopia's largest hotel garden, built for events
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="container-page mt-16">
        <Reveal>
          <SectionHeading
            eyebrow="Venues"
            title="Four spaces, one dedicated events team"
            description="Every venue is quoted with a single point of contact from proposal through event day."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {venues.map(({ icon: Icon, name, capacity, desc }, i) => (
            <Reveal key={name} delay={(i % 2) * 40}>
              <div className="rounded-md border border-charcoal/10 p-6 h-full">
                <Icon className="text-gold-600" size={28} aria-hidden="true" />
                <p className="mt-3 font-display text-lg">{name}</p>
                <p className="text-sm font-semibold text-emerald-800 mt-1">{capacity}</p>
                <p className="mt-2 text-sm text-charcoal-soft">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Get a Proposal"
              title="Tell us about your event"
              description="Share a few details and our events team responds within one business day with availability and pricing."
            />
          </Reveal>
          <Reveal delay={80}>
            <EventLeadForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
