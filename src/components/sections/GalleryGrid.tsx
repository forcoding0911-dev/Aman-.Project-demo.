"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/data/images";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Category = "All" | "Gardens" | "Dining" | "Rooms" | "Events";
const categories: Category[] = ["All", "Gardens", "Dining", "Rooms", "Events"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Category>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = images.gallery.items.filter(
    (img) => filter === "All" || img.category === filter
  );

  const openAt = (i: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveIndex(i);
  };

  const close = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filtered.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-180",
              filter === cat
                ? "bg-emerald-900 text-cream"
                : "bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filtered.map((img, i) => (
          <Reveal key={img.src} delay={(i % 6) * 40} className="mb-4 block">
            <button
              type="button"
              onClick={(e) => openAt(i, e.currentTarget)}
              aria-label={`Open ${img.category} photo ${i + 1} in full view`}
              className={cn(
                "block w-full overflow-hidden rounded-md relative",
                img.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[16/9]"
              )}
            >
              <Image
                src={img.src}
                alt={`${img.category} at Ghion Hotel — photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 ease-out hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {activeIndex !== null && filtered[activeIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${filtered[activeIndex].category} photo, full view`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-emerald-950/95 p-6 animate-fade-in"
          onClick={close}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close full view"
            className="absolute top-6 right-6 text-cream p-2 transition-transform duration-180 hover:scale-110 active:scale-90"
            onClick={close}
          >
            <X size={28} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 text-cream p-2 transition-transform duration-180 hover:scale-110 active:scale-90"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
            }}
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl animate-dialog-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[activeIndex].src}
              alt={`${filtered[activeIndex].category} at Ghion Hotel — full view`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 text-cream p-2 transition-transform duration-180 hover:scale-110 active:scale-90"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
