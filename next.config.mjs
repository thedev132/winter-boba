const nextConfig = {
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
