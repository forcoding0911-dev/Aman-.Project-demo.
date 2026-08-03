import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/ui/RoomCard";
import BookingSearchBar from "@/components/sections/BookingSearchBar";
import Reveal from "@/components/ui/Reveal";
import { rooms } from "@/data/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Browse Ghion Hotel's Garden View Deluxe, Imperial Suite, Classic Twin, and Presidential Garden Villa — book directly, no commission.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <div className="pt-16">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Rooms & Suites"
            title="Every room, rebuilt around what guests actually need"
            description="Transparent nightly pricing, verified amenities, and direct availability — no third-party booking fees."
          />
        </Reveal>

        <Reveal delay={80}>
          <BookingSearchBar className="mt-10" />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-24">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} delay={(i % 3) * 40}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
