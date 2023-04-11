/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "js"],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
