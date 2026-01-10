import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//  /** @type {import('next').NextConfig} */

//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig : NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com', // for your car images
      'images.pexels.com',  // for owner avatars or other images
    ],
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
}



module.exports = nextConfig;
