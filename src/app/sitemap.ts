import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { rooms } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/rooms", "/amenities", "/events", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const roomRoutes = rooms.map((room) => ({
    url: `${site.url}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...roomRoutes];
}
