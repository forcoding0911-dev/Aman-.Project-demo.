import Image from "next/image";
import { Users2, Presentation, PartyPopper } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/images";

const capacities = [
  { icon: Presentation, label: "Grand Ballroom", value: "Up to 600 guests" },
  { icon: Users2, label: "Executive Boardroom", value: "Up to 30 delegates" },
  { icon: PartyPopper, label: "Garden Pavilion", value: "Up to 300 guests" },
];

export default function EventsPreview() {
  return (
    <section className="container-page py-24 lg:py-30">
      <Reveal>
        <SectionHeading
          eyebrow="Conferences & Weddings"
          title="Ethiopia's largest hotel garden, built for events"
          description="From diplomatic summits to garden weddings — our conference and events team plans every detail, backed by decades of institutional hosting experience."
          align="center"
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Reveal delay={80} className="lg:row-span-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden rounded-md shadow-card">
            <Image
              src={images.gallery.items[6].src}
              alt="Grand event hall set up for a conference at Ghion Hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
          {capacities.map(({ icon: Icon, label, value }, i) => (
            <Reveal key={label} delay={i * 40}>
              <div className="rounded-md border border-charcoal/10 bg-white p-6 text-center h-full">
                <Icon className="mx-auto text-gold-600" size={28} aria-hidden="true" />
                <p className="mt-3 font-display text-lg">{label}</p>
                <p className="mt-1 text-sm text-charcoal-soft">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="lg:col-span-2">
          <div className="rounded-md bg-emerald-900 p-8 text-cream flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-display text-xl">Planning a conference or wedding?</p>
              <p className="mt-1 text-cream/70 text-sm max-w-md">
                Send your event details and our planning team will respond
                within one business day with availability and a proposal.
              </p>
            </div>
            <Button href="/events" variant="primary" className="shrink-0">
              Request Event Proposal
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
