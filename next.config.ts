import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  // output: 'export', // Comment out for development with hot reloading
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);
