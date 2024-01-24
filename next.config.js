/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      // add more routes here
    };
  },
};

module.exports = nextConfig;
