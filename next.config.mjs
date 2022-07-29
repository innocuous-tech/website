/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
};

export default nextConfig;
