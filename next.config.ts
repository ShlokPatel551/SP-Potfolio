import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.credly.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
