/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  // https://nextjs.org/blog/next-11-1#builds--data-fetching
  /* httpAgentOptions: {
    keepAlive: false,
  }, */
};
