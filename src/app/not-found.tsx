import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center py-24">
      <p className="eyebrow mb-3">404</p>
      <h1 className="text-display-md text-balance">
        This page has wandered off into the gardens
      </h1>
      <p className="mt-4 max-w-md text-charcoal-soft">
        The page you're looking for doesn't exist or may have moved. Try one
        of the links below.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Return Home</Button>
        <Button href="/rooms" variant="ghost">
          Browse Rooms
        </Button>
      </div>
    </div>
  );
}
