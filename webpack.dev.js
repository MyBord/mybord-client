const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    allowedHosts: [
      'localhost',
    ],
  },
});

module.exports = config;
