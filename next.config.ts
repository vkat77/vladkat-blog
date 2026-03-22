import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow unoptimized local images in development
    unoptimized: true,
  },
};

export default nextConfig;
