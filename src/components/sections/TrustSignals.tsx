import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const reviews = [
  {
    quote:
      "The gardens alone are worth the stay — a genuinely calm, green space in the middle of Addis. Booking directly was simple this time.",
    author: "Verified Google Review",
    rating: 5,
  },
  {
    quote:
      "Hosted a 200-guest conference here. The events team was organized and the ballroom held up well for a full-day program.",
    author: "Verified Google Review",
    rating: 4,
  },
  {
    quote:
      "Rooms are comfortable and quiet, and the staff were attentive throughout a week-long business trip.",
    author: "Verified Google Review",
    rating: 5,
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-cream-100 py-24 lg:py-30">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionHeading
            eyebrow="Guest Trust"
            title="Rated 4.0 stars across 2,700+ verified reviews"
            align="center"
          />
          <div className="flex items-center gap-1 text-gold-600" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
            <Star size={20} className="text-charcoal/20" fill="currentColor" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.author + i} delay={i * 40}>
              <figure className="rounded-md bg-white p-8 shadow-card flex flex-col h-full">
                <div className="flex gap-0.5 text-gold-600 mb-4" aria-hidden="true">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-charcoal-soft leading-relaxed flex-1">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-emerald-900">
                  {review.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
