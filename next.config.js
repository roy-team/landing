/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.roy-dev.tk",
      },
      {
        protocol: "https",
        hostname: "files.roy.team",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

module.exports = nextConfig;
