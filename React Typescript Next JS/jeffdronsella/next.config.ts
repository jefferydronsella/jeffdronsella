import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  exportTrailingSlash: true,
  /* config options here */
};

export default nextConfig;
