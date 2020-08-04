const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

let envFile;
switch (process.env.NODE_ENV) {
  case 'DEV':
    envFile = 'dev.env';
    break;
  case 'LOCAL':
    envFile = 'local.env';
    break;
  case 'PROD':
    envFile = 'prod.env';
    break;
  default:
    throw Error('Unknown NODE_ENV flag');
}

const entry = [
  'babel-polyfill',
  `${SRC_DIR}/index.tsx`,
  `${SRC_DIR}/index.less`,
];

const output = {
  path: `${DIST_DIR}/app/`,
  filename: 'bundle.js',
  publicPath: '/app/',
};

const rules = [
  {
    enforce: 'pre',
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
      failOnWarning: true,
      failOnError: true,
    },
  },
  {
    test: /\.jsx?$/,
    include: SRC_DIR,
    loader: 'babel-loader',
  },
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  },
  {
    test: /\.less$/,
    exclude: /\.module\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: { javascriptEnabled: true },
      },
    ],
  },
  {
    test: /\.module\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: '[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
      },
      {
        loader: 'less-loader',
        options: { javascriptEnabled: true },
      },
    ],
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
      loader: 'image-webpack-loader',
      query: {
        mozjpeg: { progressive: true },
        gifsicle: { interlaced: false },
        optipng: { optimizationLevel: 7 },
        pngquant: { quality: '75-90', speed: 3 },
      },
    }],
    exclude: path.resolve(__dirname, 'node_modules'),
    include: __dirname,
  },
  {
    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    // loader: "url?limit=10000"
    use: 'url-loader',
  },
  {
    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
    use: 'file-loader',
  },
];

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'application.css',
  }),
  new webpack.DefinePlugin({
    'process.env.INTERNAL': JSON.stringify(process.env.INTERNAL),
  }),
  new Dotenv({
    path: `${__dirname}/${envFile}`,
  }),
];

const resolve = {
  extensions: ['.jsx', '.js', '.tsx', '.ts', '.less'],
};

const config = {
  entry,
  output,
  module: { rules },
  plugins,
  resolve,
};

module.exports = config;
