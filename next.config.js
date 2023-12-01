/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ["firebasestorage.googleapis.com", "prathugupta.tech"],
  },
};

module.exports = nextConfig;
