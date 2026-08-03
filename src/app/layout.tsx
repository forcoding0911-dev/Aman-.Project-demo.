import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBookingBar from "@/components/layout/MobileBookingBar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Historic Hotel & Gardens, Addis Ababa`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Ghion Hotel Addis Ababa",
    "Historic Hotel Addis Ababa",
    "Hotels near Meskel Square",
    "Addis Ababa conference venue",
    "Addis Ababa garden hotel",
  ],
  openGraph: {
    title: `${site.fullName} | Historic Hotel & Gardens, Addis Ababa`,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Historic Hotel & Gardens`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: site.fullName,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.street,
    addressLocality: site.location.city,
    addressRegion: site.location.subCity,
    addressCountry: "ET",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.location.lat,
    longitude: site.location.lng,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Botanical Gardens" },
    { "@type": "LocationFeatureSpecification", name: "Conference Facilities" },
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:rounded-md focus:bg-emerald-900 focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBookingBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
