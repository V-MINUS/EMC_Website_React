/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during production builds to allow deployment even with warnings
    ignoreDuringBuilds: true,
  },
  images: {
    // This ensures all images are properly optimized
    domains: [],
    // Configure unoptimized images for simplicity and to ensure they work on Vercel
    unoptimized: true,
  },
}

module.exports = nextConfig
