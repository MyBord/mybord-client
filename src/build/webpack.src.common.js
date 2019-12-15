const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const DIST_DIR = path.resolve(__dirname, '../dist/');
const ROOT_DIR = path.resolve(__dirname, '../../');
const SRC_DIR = path.resolve(__dirname, '../');

const config = {
  entry: [
    'babel-polyfill',
    `${SRC_DIR}/index.tsx`,
    `${SRC_DIR}/index.scss`,
  ],
  output: {
    path: `${DIST_DIR}/`,
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    rules: [
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
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.module\.scss$/,
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
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: path.resolve(ROOT_DIR, 'node_modules'),
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
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'application.css',
    }),
    new webpack.DefinePlugin({
      'process.env.INTERNAL': JSON.stringify(process.env.INTERNAL),
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.scss'],
    alias: {
      api: path.resolve(SRC_DIR, 'api/'),
      app: path.resolve(SRC_DIR, 'spa/app/'),
      assets: path.resolve(SRC_DIR, 'assets/'),
      buttons: path.resolve(SRC_DIR, 'spa/app/shared/buttons/'),
      gapi: path.resolve(SRC_DIR, 'thirdParty/gapi/'),
      header: path.resolve(SRC_DIR, 'spa/layout/header/'),
      hooks: path.resolve(SRC_DIR, 'hooks/'),
      icons: path.resolve(SRC_DIR, 'spa/app/shared/icons/'),
      initializeApp: path.resolve(SRC_DIR, 'spa/app/initializeApp/'),
      layout: path.resolve(SRC_DIR, 'spa/layout/'),
      lotty: path.resolve(SRC_DIR, 'thirdParty/lotty/'),
      mockData: path.resolve(SRC_DIR, 'mockData/'),
      navigation: path.resolve(SRC_DIR, 'spa/layout/navigation/'),
      pages: path.resolve(SRC_DIR, 'spa/app/pages/'),
      routing: path.resolve(SRC_DIR, 'spa/app/routing/'),
      shared: path.resolve(SRC_DIR, 'spa/app/shared/'),
      static: path.resolve(SRC_DIR, 'static/'),
      storybook: path.resolve(SRC_DIR, 'thirdParty/storybook/'),
      styles: path.resolve(SRC_DIR, 'styles/'),
      typography: path.resolve(SRC_DIR, 'spa/app/shared/typography/'),
      types: path.resolve(SRC_DIR, 'types/'),
      utils: path.resolve(SRC_DIR, 'utils/'),
    },
  },
};

module.exports = config;
