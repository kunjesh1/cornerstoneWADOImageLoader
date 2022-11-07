const merge = require('./merge');
const baseConfig = require('./webpack-base');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = {
  mode: "production",
  output: {
    filename: '[name].min.js'
  },
  // devtool: 'eval-source-map',
  optimization: {
    // minimize:false
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ]
  }
};

module.exports = merge(baseConfig, prodConfig);