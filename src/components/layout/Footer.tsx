import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-cream/80">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            {site.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-400 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-500">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
              <span>
                {site.location.street}, {site.location.subCity}
                <br />
                {site.location.city}, {site.location.country}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold-500" />
              <a href={site.contact.phoneHref} className="hover:text-gold-400 transition-colors">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold-500" />
              <a href={site.contact.emailHref} className="hover:text-gold-400 transition-colors">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p>Redesign concept — portfolio case study.</p>
        </div>
      </div>
    </footer>
  );
}
