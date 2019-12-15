const merge = require('webpack-merge');
const common = require('./webpack.src.common.js');

const config = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});

module.exports = config;
