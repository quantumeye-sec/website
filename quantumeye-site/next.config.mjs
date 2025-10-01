// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages: https://quantumeye-sec.github.io/website
  basePath: '/website',
  assetPrefix: '/website/',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

