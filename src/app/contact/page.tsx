import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ghion Hotel Addis Ababa directly by phone, email, or WhatsApp — Ras Desta Damtew Street, Kirkos Sub-City.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${site.location.lat},${site.location.lng}&hl=en&z=15&output=embed`;

  return (
    <div className="pt-16 pb-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Reach the front desk directly"
            description="Every contact method below routes to hotel reception — no call centers, no booking intermediaries."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-md">
              <iframe
                title="Map showing Ghion Hotel Addis Ababa location"
                src={mapSrc}
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-gold-600 shrink-0" aria-hidden="true" />
                <span>
                  {site.location.street}, {site.location.subCity}
                  <br />
                  {site.location.city}, {site.location.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold-600 shrink-0" aria-hidden="true" />
                <a href={site.contact.phoneHref} className="hover:text-emerald-900">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold-600 shrink-0" aria-hidden="true" />
                <a href={site.contact.emailHref} className="hover:text-emerald-900">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={20} className="text-gold-600 shrink-0" aria-hidden="true" />
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-900"
                >
                  Message on WhatsApp
                </a>
              </li>
            </ul>

            <div className="mt-10 flex items-center gap-4 rounded-md border border-charcoal/10 p-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={images.team.generalManager}
                  alt="Portrait of the Ghion Hotel General Manager"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-base text-charcoal">General Manager's Office</p>
                <p className="text-sm text-charcoal-soft">
                  Group bookings and delegation visits are handled directly by our management team.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
