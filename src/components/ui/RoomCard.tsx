import Image from "next/image";
import { Wifi, Snowflake, Trees, BedDouble } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Room } from "@/data/rooms";
import { cn } from "@/lib/utils";

const amenityIcons: Record<string, React.ElementType> = {
  "Wi-Fi": Wifi,
  AC: Snowflake,
  "Garden View": Trees,
  "Private Garden": Trees,
};

export default function RoomCard({
  room,
  className,
}: {
  room: Room;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex shrink-0 flex-col overflow-hidden rounded-md bg-white shadow-card transition-transform duration-180 ease-in-out hover:-translate-y-1.5",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={room.image}
          alt={`${room.name} at Ghion Hotel — ${room.tagline}`}
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-emerald-950/85 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
          ${room.pricePerNight} / night
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-charcoal">{room.name}</h3>
        <p className="mt-1 text-sm text-charcoal-soft">{room.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {room.amenities.slice(0, 4).map((a) => {
            const Icon = amenityIcons[a] ?? BedDouble;
            return (
              <span
                key={a}
                className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-900"
                title={a}
              >
                <Icon size={13} aria-hidden="true" />
                {a}
              </span>
            );
          })}
        </div>

        <div className="mt-6">
          <Button href={`/rooms/${room.slug}`} variant="secondary" size="sm" className="w-full">
            View Room Details
          </Button>
        </div>
      </div>
    </article>
  );
}
