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
      "api.cloudinary.com",
      "res.cloudinary.com",
      "localhost",
      "planetscale-test-navy.vercel.app/",
      "toys-project-od36ed0cv-nawrazaltai.vercel.app/",
    ],
    formats: ["image/webp"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
