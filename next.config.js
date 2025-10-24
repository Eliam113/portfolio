// next.config.js

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // required for static export
  basePath: isProd ? "/portfolio" : "", // GitHub Pages subpath
  images: { unoptimized: true }, // disables image optimization (not supported on GH Pages)
};

module.exports = nextConfig;;
