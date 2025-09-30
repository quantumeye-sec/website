/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  images: { unoptimized: true },

  // GH Pages serves under /website
  basePath: isProd ? '/website' : '',
  assetPrefix: isProd ? '/website/' : '',

  // Avoid 404s on static hosts for nested routes
  trailingSlash: true,
};

export default nextConfig;

