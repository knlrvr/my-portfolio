import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    env: {
      COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || 'dev',
      REPO_URL: 'https://github.com/knlrvr/my-portfolio',
    },
};

export default nextConfig;
