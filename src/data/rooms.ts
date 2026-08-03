export type Room = {
  slug: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  currency: "USD";
  size: string;
  maxGuests: number;
  bed: string;
  amenities: string[];
  description: string;
  longDescription: string;
  /** Card thumbnail + first gallery image. Replace the file at this path to update everywhere. */
  image: string;
  /** Room detail page gallery, in display order. */
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: "garden-view-deluxe",
    name: "Garden View Deluxe",
    tagline: "Wake up over the historic botanical grounds",
    pricePerNight: 145,
    currency: "USD",
    size: "32 m²",
    maxGuests: 2,
    bed: "1 King or 2 Twin",
    amenities: ["Wi-Fi", "AC", "Garden View", "Work Desk"],
    description:
      "Our signature room, framed by floor-to-ceiling windows overlooking the hotel's namesake gardens.",
    longDescription:
      "The Garden View Deluxe pairs warm, contemporary interiors with the hotel's most valuable asset — direct views over mature indigenous gardens planted decades ago. Reworked in soft cream linens with imperial emerald accents, the room balances heritage character with the comfort international business travelers expect: reliable high-speed Wi-Fi, a dedicated work desk, and blackout drapery for rest between meetings.",
    image: "/images/rooms/room-1.jpg",
    gallery: [
      "/images/rooms/room-1.jpg",
      "/images/rooms/room-1-b.jpg",
      "/images/rooms/room-1-c.jpg",
    ],
  },
  {
    slug: "imperial-suite",
    name: "Imperial Suite",
    tagline: "A separate living room, fit for diplomatic visits",
    pricePerNight: 265,
    currency: "USD",
    size: "58 m²",
    maxGuests: 3,
    bed: "1 King + Sofa Bed",
    amenities: ["Wi-Fi", "AC", "Garden View", "Lounge", "Minibar"],
    description:
      "A separated bedroom and sitting room designed for extended stays and private meetings.",
    longDescription:
      "The Imperial Suite is the hotel's largest guest accommodation — a full sitting room separated from the bedroom, historically favored by visiting dignitaries. The redesign keeps the room's grand proportions while replacing dated furnishings with a considered mix of Ethiopian textile accents, a private meeting table, and a fully stocked minibar. Ideal for guests who need a discreet space to receive visitors.",
    image: "/images/rooms/room-2.jpg",
    gallery: [
      "/images/rooms/room-2.jpg",
      "/images/rooms/room-2-b.jpg",
      "/images/rooms/room-2-c.jpg",
    ],
  },
  {
    slug: "classic-twin",
    name: "Classic Twin",
    tagline: "Practical comfort for business travel",
    pricePerNight: 98,
    currency: "USD",
    size: "26 m²",
    maxGuests: 2,
    bed: "2 Twin",
    amenities: ["Wi-Fi", "AC", "Work Desk"],
    description: "A well-proportioned twin room built for short, efficient business stays.",
    longDescription:
      "The Classic Twin is our most accessible room category, rebuilt for reliability rather than excess: fast Wi-Fi verified for video calls, blackout curtains, and a work desk positioned near natural light. A dependable option for colleagues traveling together or single business travelers on shorter visits.",
    image: "/images/rooms/room-3.jpg",
    gallery: [
      "/images/rooms/room-3.jpg",
      "/images/rooms/room-3-b.jpg",
      "/images/rooms/room-3-c.jpg",
    ],
  },
  {
    slug: "presidential-garden-villa",
    name: "Presidential Garden Villa",
    tagline: "A private villa set inside the gardens themselves",
    pricePerNight: 420,
    currency: "USD",
    size: "110 m²",
    maxGuests: 4,
    bed: "2 King",
    amenities: ["Wi-Fi", "AC", "Private Garden", "Butler Service", "Lounge", "Minibar"],
    description: "Freestanding villa accommodation with a private garden terrace and butler service.",
    longDescription:
      "Set apart from the main hotel building within the gardens, the Presidential Garden Villa offers full privacy: two bedrooms, a private outdoor terrace, dedicated butler service, and a secure entrance suited to heads of delegation or wedding party principals. This is the flagship unit for the hotel's events and diplomatic hosting program.",
    image: "/images/rooms/room-4.jpg",
    gallery: [
      "/images/rooms/room-4.jpg",
      "/images/rooms/room-4-b.jpg",
      "/images/rooms/room-4-c.jpg",
    ],
  },
];

export function getRoomBySlug(slug: string) {
  return rooms.find((r) => r.slug === slug);
}
