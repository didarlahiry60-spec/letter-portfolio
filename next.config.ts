import type { NextConfig } from "next";

const repoName = "my-letter-portfolio-";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? `/${repoName}` : ""),
};

export default nextConfig;
