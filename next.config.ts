import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite servir imágenes desde /public sin dominios externos
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
