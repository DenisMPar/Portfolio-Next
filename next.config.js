/** @type {import('next').NextConfig} */

const withSvgr = require("next-svgr");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
  nextConfig,
  images: {
    domains: [`res.cloudinary.com`, "images.ctfassets.net"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
});
