/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This is the key line – enables static HTML export during `next build`
  // Optional: if you want a different output folder (e.g. 'dist' instead of 'out')
  // distDir: 'dist',
};

export default nextConfig;  // Use export default for ESM / .mjs
// OR module.exports = nextConfig; for CommonJS / .js


