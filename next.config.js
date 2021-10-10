const withPlugins = require('next-compose-plugins');
const withTranspiledModules = require('next-transpile-modules')(['lodash-es']);

const plugins = [];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {};

module.exports = withPlugins(plugins, nextConfig);
