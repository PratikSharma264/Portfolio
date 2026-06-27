import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" produces a minimal, self-contained server bundle in
  // .next/standalone — this is what the Dockerfile in this repo uses.
  // It has no effect on `vercel deploy` or `next dev`/`next start` directly.
  output: "standalone",
};

export default nextConfig;
