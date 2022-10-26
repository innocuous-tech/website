/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    scrollRestoration: true,
    nextScriptWorkers: true,
    legacyBrowsers: false,
  },
};

export default nextConfig;
