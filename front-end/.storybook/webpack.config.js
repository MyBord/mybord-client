const merge = require('webpack-merge');
const common = require('../src/build/webpack.src.common.js');

const config = merge(common, {});

module.exports = config;
