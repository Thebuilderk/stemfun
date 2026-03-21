/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export to Arweave, GitHub Pages, or any non-Vercel host
  output: 'export',

  // This is the key fix: disables Next.js image optimization
  // Without it, images try to load via /_next/image (which doesn't exist on Arweave)
  images: {
    unoptimized: true,
  },

  // Optional: helps with clean URLs and trailing slashes on static hosts
  trailingSlash: true,

  // Optional: compresses assets during build (reduces file size slightly)
  compress: true,

  // Optional: if your site is served from a subpath on some gateways
  // (usually not needed for stemfun.ar.io, but uncomment if you see path issues)
  // basePath: '/stemfun',
  // assetPrefix: '/stemfun/',
};

export default nextConfig;