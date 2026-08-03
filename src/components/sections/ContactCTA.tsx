import { MapPin, Phone, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

export default function ContactCTA() {
  const mapSrc = `https://www.google.com/maps?q=${site.location.lat},${site.location.lng}&hl=en&z=15&output=embed`;

  return (
    <section className="container-page py-24 lg:py-30">
      <Reveal className="grid gap-10 lg:grid-cols-2 rounded-lg overflow-hidden shadow-card">
        <div className="bg-emerald-900 text-cream p-10 lg:p-14 flex flex-col justify-center">
          <p className="eyebrow text-gold-400 mb-3">Visit or Reserve</p>
          <h2 className="text-display-md text-balance">
            Direct booking means no commission, no delay
          </h2>
          <p className="mt-4 text-cream/75 leading-relaxed">
            Reach reception directly for rates, group bookings, or special
            requests — every channel below routes straight to our front
            desk.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-gold-400 shrink-0" aria-hidden="true" />
              {site.location.street}, {site.location.subCity}, {site.location.city}
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold-400 shrink-0" aria-hidden="true" />
              <a href={site.contact.phoneHref} className="hover:text-gold-300">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold-400 shrink-0" aria-hidden="true" />
              <a href={site.contact.emailHref} className="hover:text-gold-300">
                {site.contact.email}
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Contact the Hotel
            </Button>
          </div>
        </div>

        <div className="min-h-[320px] lg:min-h-full">
          <iframe
            title="Map showing Ghion Hotel Addis Ababa location"
            src={mapSrc}
            className="h-full w-full min-h-[320px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  );
}
