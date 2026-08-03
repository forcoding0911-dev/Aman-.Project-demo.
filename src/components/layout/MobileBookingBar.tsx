import Button from "@/components/ui/Button";

export default function MobileBookingBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-charcoal/10 bg-cream/95 backdrop-blur-md px-4 py-3">
      <Button href="/rooms" size="lg" className="w-full">
        Book Now
      </Button>
    </div>
  );
}
