import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["images.unsplash.com", "seal-mwco.bbb.org"],
  },
  webpack: (config, { dev }) => {
    if (!dev && process.env.VERCEL === "1") {
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
