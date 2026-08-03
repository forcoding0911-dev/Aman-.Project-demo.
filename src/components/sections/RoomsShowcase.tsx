import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/ui/RoomCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { rooms } from "@/data/rooms";

export default function RoomsShowcase() {
  return (
    <section className="bg-emerald-50/40 py-24 lg:py-30">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Rooms & Suites"
            title="Four ways to stay, one standard of comfort"
            description="From efficient business rooms to a freestanding garden villa — every category has been rebuilt around what international guests actually need."
          />
          <Button href="/rooms" variant="ghost" className="shrink-0">
            View All Rooms
          </Button>
        </Reveal>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {rooms.map((room, i) => (
            <Reveal
              key={room.slug}
              delay={i * 80}
              className="w-[85%] xs:w-[70%] sm:w-[45%] lg:w-[24%] shrink-0 snap-start"
            >
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
