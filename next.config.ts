import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
