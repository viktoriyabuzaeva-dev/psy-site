/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure clean build
  distDir: '.next',
  trailingSlash: false,
}

module.exports = nextConfig
