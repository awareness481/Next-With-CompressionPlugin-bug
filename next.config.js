const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin());
    return config;
  }
}