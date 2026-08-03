import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export default function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 shrink-0", className)}>
      <Image src={images.logo} alt="" width={32} height={32} aria-hidden="true" priority />
      <span
        className={cn(
          "font-display text-2xl font-semibold tracking-tight",
          light ? "text-cream" : "text-emerald-900"
        )}
      >
        Ghion <span className="text-gold-600">Hotel</span>
      </span>
    </Link>
  );
}
