/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All imagery is served from /public/images (see src/data/images.ts).
    // No remote domains are needed — this keeps builds fast and avoids
    // depending on third-party image hosts in production.
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
