export const site = {
  name: "Ghion Hotel",
  fullName: "Ghion Hotel Addis Ababa",
  tagline: "A Historic Oasis in the Heart of Addis Ababa",
  description:
    "A landmark Addis Ababa hotel set within decades-old botanical gardens — now reopening direct, commission-free booking for international travelers, diplomats, and conference organizers.",
  url: "https://ghionhotel.com.et",
  location: {
    street: "Ras Desta Damtew Street",
    subCity: "Kirkos Sub-City",
    city: "Addis Ababa",
    country: "Ethiopia",
    lat: 9.010793,
    lng: 38.759452,
  },
  contact: {
    phone: "+251 11 551 3222",
    phoneHref: "tel:+251115513222",
    email: "info@ghionhotel.com",
    emailHref: "mailto:info@ghionhotel.com",
    whatsapp: "+251 11 551 3222",
    whatsappHref: "https://wa.me/251115513222",
  },
  nav: [
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Gardens & Amenities", href: "/amenities" },
    { label: "Conferences & Weddings", href: "/events" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
