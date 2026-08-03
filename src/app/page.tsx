import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import RoomsShowcase from "@/components/sections/RoomsShowcase";
import EventsPreview from "@/components/sections/EventsPreview";
import TrustSignals from "@/components/sections/TrustSignals";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <RoomsShowcase />
      <EventsPreview />
      <TrustSignals />
      <ContactCTA />
    </>
  );
}
