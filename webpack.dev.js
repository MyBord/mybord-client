const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        secure: false,
      },
    },
    allowedHosts: [
      'localhost',
    ],
  },
});

module.exports = config;
