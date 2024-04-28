/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["replicate.delivery"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // other configurations
};

module.exports = nextConfig;
