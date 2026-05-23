import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["images.unsplash.com", "seal-mwco.bbb.org"],
  },
};

export default nextConfig;
