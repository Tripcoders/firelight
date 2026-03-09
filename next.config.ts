import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Netlify-specific configuration
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
