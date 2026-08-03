/**
 * IMAGE MANIFEST
 * ------------------------------------------------------------------
 * Every image the site references lives under /public/images and is
 * declared here ONCE. To swap in real photography, replace the file
 * at the given path (keep the same filename) — no component code
 * needs to change.
 *
 * Folder guide:
 *   /images/hero    full-bleed hero backdrops
 *   /images/rooms   room card + room detail gallery photography
 *   /images/gallery amenities/gardens/dining/events gallery grid
 *   /images/food    dining & culinary spotlight photography
 *   /images/team    staff / leadership portraits
 *   /images/logo    brand mark (SVG, used in header/footer/favicon source)
 *   /images/icons   generated favicon + apple-touch-icon
 */

export const images = {
  hero: {
    home: "/images/hero/hero.jpg", // Hero.tsx — homepage full-bleed backdrop
  },
  logo: "/images/logo/logo.svg", // Logo.tsx — header, footer, root layout icon
  gallery: {
    // GalleryGrid.tsx — /amenities masonry grid, filterable by category
    // Also reused by BrandStory.tsx (homepage) and EventsPreview.tsx
    items: [
      { src: "/images/gallery/gallery-1.jpg", category: "Gardens", orientation: "landscape" },
      { src: "/images/gallery/gallery-2.jpg", category: "Gardens", orientation: "portrait" },
      { src: "/images/gallery/gallery-3.jpg", category: "Dining", orientation: "landscape" },
      { src: "/images/gallery/gallery-4.jpg", category: "Dining", orientation: "portrait" },
      { src: "/images/gallery/gallery-5.jpg", category: "Rooms", orientation: "landscape" },
      { src: "/images/gallery/gallery-6.jpg", category: "Rooms", orientation: "portrait" },
      { src: "/images/gallery/gallery-7.jpg", category: "Events", orientation: "landscape" },
      { src: "/images/gallery/gallery-8.jpg", category: "Events", orientation: "portrait" },
    ],
  },
  food: {
    // AmenitiesPage.tsx — "Dining at Ghion" spotlight panel
    spotlight1: "/images/food/food-1.jpg",
    spotlight2: "/images/food/food-2.jpg",
  },
  team: {
    generalManager: "/images/team/team-1.jpg", // ContactPage.tsx — "Speak with our team" card
  },
} as const;
