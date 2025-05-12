/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily disable TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily disable ESLint errors during build
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 