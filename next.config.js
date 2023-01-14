/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cataas.com',
        port: '',
        pathname: '/cat/**',
      },
    ],
  },
}

module.exports = nextConfig