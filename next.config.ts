import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Serve AVIF first (20% smaller), WebP as fallback — browsers auto-negotiate
    formats: ["image/avif", "image/webp"],
    // Qualities used by <Image quality={n}> props across the site
    qualities: [75, 85, 90],
    // Cache optimized images for 31 days instead of the default 4 hours
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
