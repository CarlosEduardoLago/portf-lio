import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isPages
    ? {
        basePath: "/portf-lio",
        assetPrefix: "/portf-lio/",
      }
    : {}),
};

export default nextConfig;
