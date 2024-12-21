import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/winter-boba",
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'contribute.hackclub.com',
      },
    ],
  },
};

export default nextConfig;
