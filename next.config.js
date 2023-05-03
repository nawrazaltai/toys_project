/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "planetscale-test-navy.vercel.app/",
    ],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
