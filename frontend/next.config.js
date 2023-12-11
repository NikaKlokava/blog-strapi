/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sublime-belief-6e0e3b7dad.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "sublime-belief-6e0e3b7dad.strapiapp.com",
        port: "",
        pathname: "/uploads/*",
      },
    ],
  },
};

module.exports = nextConfig;
