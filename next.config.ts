import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
