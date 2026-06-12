/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.alphacoders.com',
      },
    ],
  },
};

export default nextConfig;
