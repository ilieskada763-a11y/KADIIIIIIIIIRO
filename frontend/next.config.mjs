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
  // Optimizing for Vercel AI deployment
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
};

export default nextConfig;
