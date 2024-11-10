import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com'], // Allow images from dummyimage.com
  },
};
