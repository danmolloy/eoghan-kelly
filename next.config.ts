import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "fillmurray.lucidinternets.com"
      }
    ]
  }
};

export default nextConfig;
