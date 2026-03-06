/** @type {import('next').NextConfig} */

const withSvgr = require("next-svgr");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
};

module.exports = withSvgr({
  ...nextConfig,
  images: {
    domains: [`res.cloudinary.com`, "images.ctfassets.net"],
    allowFutureImage: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
});
