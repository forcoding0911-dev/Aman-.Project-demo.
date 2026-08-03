import Image from "next/image";
import Button from "@/components/ui/Button";
import GardenDivider from "@/components/ui/GardenDivider";
import Reveal from "@/components/ui/Reveal";


export default function BrandStory() {
  return (
    <section className="container-page py-24 lg:py-30">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-3">The Garden Oasis</p>
          <h2 className="text-display-md lg:text-display-lg text-balance">
            Grounds that have outlasted every renovation trend in the city
          </h2>
          <p className="mt-6 text-charcoal-soft text-lg leading-relaxed">
            Long before Addis Ababa's skyline grew around it, Ghion Hotel's
            gardens were already mature. Generations of diplomats, artists,
            and travelers have walked these same botanical grounds — a rare
            asset no new hotel in the city can replicate.
          </p>
          <p className="mt-4 text-charcoal-soft text-lg leading-relaxed">
            This redesign keeps that history intact while rebuilding
            everything guests interact with: a direct booking engine, secure
            payments, and rooms restored with the same warmth the property
            has always been known for.
          </p>
          <div className="mt-8">
            <Button href="/amenities" variant="ghost">
              Explore the Gardens & Amenities
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-card translate-y-8">
            <Image
              src="/images/gallery/gallery-2.jpg"
              alt="Garden pathway on the Ghion Hotel grounds"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-card">
            <Image
              src="/images/gallery/gallery-4.jpg"
              alt="Historic hotel architecture detail"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-card col-span-2">
            <Image
              src="/images/gallery/gallery-1.jpg"
              alt="Ghion Hotel lobby blending traditional and modern design"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <Reveal>
        <GardenDivider className="mt-20" />
      </Reveal>
    </section>
  );
}
