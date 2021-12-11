import withPlugins from 'next-compose-plugins';
// import withTranspiledModules from 'next-transpile-modules';
// const plugins = [withTranspiledModules([])];

const plugins = [];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
};

export default withPlugins(plugins, nextConfig);
