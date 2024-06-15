/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "dream-git-main-zeke-voigts-projects.vercel.app"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
