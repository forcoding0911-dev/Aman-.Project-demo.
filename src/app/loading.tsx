function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded bg-charcoal/10 ${className}`}
    >
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="container-page py-24">
      <SkeletonBlock className="h-10 w-2/3 max-w-lg" />
      <SkeletonBlock className="mt-4 h-4 w-1/2 max-w-md" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonBlock key={i} className="aspect-[4/3]" />
        ))}
      </div>
    </div>
  );
}
