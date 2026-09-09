import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Required by `output: "export"` — there is no image optimizer on GitHub Pages.
    unoptimized: true,
  },
};

export default nextConfig;
