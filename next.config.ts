import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // distDir: "build",
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
