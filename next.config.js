const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
    scrollRestoration: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
