import type { NextConfig } from "next";

// EXPORT=1 builds a plain static site in ./out (for Netlify drag-and-drop or any static host).
const isExport = process.env.EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" as const, trailingSlash: false } : {}),
  images: isExport ? { unoptimized: true } : { formats: ["image/avif", "image/webp"] },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
