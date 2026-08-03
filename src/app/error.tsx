"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center py-24">
      <p className="eyebrow mb-3">Something went wrong</p>
      <h1 className="text-display-md text-balance">
        We couldn't load this page
      </h1>
      <p className="mt-4 max-w-md text-charcoal-soft">
        Please try again, or contact the front desk directly if the problem
        continues.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button href="/" variant="ghost">
          Return Home
        </Button>
      </div>
    </div>
  );
}
