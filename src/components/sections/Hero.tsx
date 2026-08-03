import Image from "next/image";
import BookingSearchBar from "./BookingSearchBar";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      <Image
        src={images.hero.home}
        alt="Ghion Hotel grounds at golden hour, framed by mature botanical gardens"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-emerald-950/10"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 pb-16 pt-40 lg:pb-24">
        <Reveal>
          <p className="eyebrow text-gold-400 mb-4">Addis Ababa · Historic Landmark</p>
          <h1 className="max-w-3xl text-display-md sm:text-display-lg lg:text-display-xl text-cream text-balance">
            A Historic Oasis in the Heart of Addis Ababa
          </h1>
          <p className="mt-6 max-w-xl text-cream/80 text-lg leading-relaxed">
            Decades-old botanical gardens, restored guest rooms, and direct
            booking — no commissions, no third-party delays.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <BookingSearchBar className="mt-10 max-w-4xl" />
        </Reveal>
      </div>
    </section>
  );
}
