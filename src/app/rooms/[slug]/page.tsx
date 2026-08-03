import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Wifi, Snowflake, Trees, Wine, Sofa, BedDouble } from "lucide-react";
import { rooms, getRoomBySlug } from "@/data/rooms";
import Button from "@/components/ui/Button";
import BookingSearchBar from "@/components/sections/BookingSearchBar";

const amenityIcons: Record<string, React.ElementType> = {
  "Wi-Fi": Wifi,
  AC: Snowflake,
  "Garden View": Trees,
  "Private Garden": Trees,
  Minibar: Wine,
  Lounge: Sofa,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: room.name,
    description: room.description,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: { images: [room.image] },
  };
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  return (
    <div className="pt-16 pb-24">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="text-sm text-charcoal-soft mb-6">
          <a href="/rooms" className="hover:text-emerald-900">
            Rooms & Suites
          </a>{" "}
          / <span className="text-charcoal">{room.name}</span>
        </nav>

        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 mb-12">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-2 lg:row-span-2 overflow-hidden rounded-md">
            <Image
              src={room.gallery[0]}
              alt={`${room.name} — primary view`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          {room.gallery.slice(1).map((img, i) => (
            <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={img}
                alt={`${room.name} — detail view ${i + 2}`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="eyebrow mb-2">{room.tagline}</p>
            <h1 className="text-display-md">{room.name}</h1>

            <dl className="mt-6 grid grid-cols-3 gap-4 max-w-sm text-sm">
              <div>
                <dt className="text-charcoal-soft">Size</dt>
                <dd className="font-semibold">{room.size}</dd>
              </div>
              <div>
                <dt className="text-charcoal-soft">Guests</dt>
                <dd className="font-semibold">Up to {room.maxGuests}</dd>
              </div>
              <div>
                <dt className="text-charcoal-soft">Bed</dt>
                <dd className="font-semibold">{room.bed}</dd>
              </div>
            </dl>

            <p className="mt-8 text-charcoal-soft leading-relaxed max-w-prose">
              {room.longDescription}
            </p>

            <h2 className="mt-10 font-display text-xl">Amenities</h2>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {room.amenities.map((a) => {
                const Icon = amenityIcons[a] ?? BedDouble;
                return (
                  <li key={a} className="flex items-center gap-2 text-sm">
                    <Icon size={16} className="text-gold-600 shrink-0" aria-hidden="true" />
                    {a}
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 h-fit rounded-md border border-charcoal/10 p-6 shadow-card">
            <p className="text-3xl font-display text-emerald-900">
              ${room.pricePerNight}
              <span className="text-base font-body text-charcoal-soft"> / night</span>
            </p>
            <p className="mt-1 text-xs text-charcoal-soft">
              Taxes and fees calculated at checkout
            </p>
            <div className="mt-6">
              <BookingSearchBar variant="compact" />
            </div>
            <Button href="/contact" variant="ghost" className="mt-4 w-full">
              Ask a Question
            </Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
