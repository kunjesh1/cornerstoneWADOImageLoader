const merge = require('./merge');
const baseConfig = require('./webpack-base');
const TerserPlugin = require('terser-webpack-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].min.js',
  },
  // devtool: 'eval-source-map',
  optimization: {
    // minimize:false
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        parallel: true,
      }),
    ],
  },
};

module.exports = merge(baseConfig, prodConfig);
