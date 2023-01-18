/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hkrtcdn.com',
        port: '',
        pathname: 'img9/22823/**',
      },
    ],
  },
//   images: {
//     images: {
//       domains: ['img1.hkrtcdn.com', 'img2.hkrtcdn.com', 'img3.hkrtcdn.com', 'img4.hkrtcdn.com', 'img5.hkrtcdn.com', 'img7.hkrtcdn.com', 'img9.hkrtcdn.com'],
//     },
// }
}

module.exports = nextConfig
