import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GardenDivider from "@/components/ui/GardenDivider";
import GalleryGrid from "@/components/sections/GalleryGrid";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { Trees, Utensils, Dumbbell, Wifi, ParkingCircle, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Gardens & Amenities",
  description:
    "Discover the botanical gardens, dining, and facilities at Ghion Hotel Addis Ababa — the city's largest hotel grounds.",
  alternates: { canonical: "/amenities" },
};

const amenities = [
  { icon: Trees, name: "Botanical Gardens", desc: "Decades-old grounds with shaded walking paths." },
  { icon: Utensils, name: "Multiple Dining Venues", desc: "Ethiopian and international cuisine, indoor and garden seating." },
  { icon: Waves, name: "Outdoor Pool", desc: "Open-air pool set within the garden grounds." },
  { icon: Dumbbell, name: "Fitness Facilities", desc: "On-site gym for guests and long-stay business travelers." },
  { icon: Wifi, name: "Property-Wide Wi-Fi", desc: "High-speed connectivity across rooms and public areas." },
  { icon: ParkingCircle, name: "Secure Parking", desc: "On-site parking with attended access control." },
];

export default function AmenitiesPage() {
  return (
    <div className="pt-16">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Gardens & Amenities"
            title="The largest private gardens of any hotel in Addis Ababa"
            description="Mature trees, open lawns, and quiet walking paths — the asset that first defined Ghion Hotel, restored as its centerpiece."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map(({ icon: Icon, name, desc }, i) => (
            <Reveal key={name} delay={(i % 3) * 40}>
              <div className="rounded-md border border-charcoal/10 p-6 h-full">
                <Icon className="text-gold-600" size={28} aria-hidden="true" />
                <p className="mt-3 font-display text-lg">{name}</p>
                <p className="mt-1 text-sm text-charcoal-soft">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <GardenDivider className="mt-20" />
        </Reveal>

        <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-center mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-card">
              <Image
                src={images.food.spotlight1}
                alt="Traditional Ethiopian dining at Ghion Hotel"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-card translate-y-8">
              <Image
                src={images.food.spotlight2}
                alt="International dining options at Ghion Hotel"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Dining at Ghion</p>
            <h2 className="text-display-sm md:text-display-md text-balance">
              Ethiopian tradition, served alongside international menus
            </h2>
            <p className="mt-4 text-charcoal-soft leading-relaxed">
              Multiple venues across the property — from a formal indoor
              dining room to open-air garden seating — serve traditional
              Ethiopian dishes alongside international menus built for
              longer business stays and diplomatic hosting.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="The grounds, dining, and public spaces"
            align="center"
            className="mx-auto mt-24"
          />
        </Reveal>

        <div className="mt-12 pb-24">
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
}
