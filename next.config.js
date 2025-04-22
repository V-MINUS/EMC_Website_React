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
    // This allows the Next.js Image component to handle any external source paths
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
