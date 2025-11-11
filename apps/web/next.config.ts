import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Enable polling for file watching (fixes HMR on Linux/WSL)
      // This is necessary because native file watching doesn't work well on Linux
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding after the first change
        ignored: /node_modules/, // Ignore node_modules to reduce CPU usage
      };
    }
    return config;
  },
};

export default nextConfig;

