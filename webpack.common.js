const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: [
    'babel-polyfill',
    `${SRC_DIR}/index.tsx`,
    `${SRC_DIR}/index.less`,
  ],
  output: {
    path: `${DIST_DIR}/app/`,
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
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.less'],
    alias: {
      api: path.resolve(__dirname, 'src/api/'),
      app: path.resolve(__dirname, 'src/spa/app/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      buttons: path.resolve(__dirname, 'src/spa/app/shared/buttons/'),
      forms: path.resolve(__dirname, 'src/spa/app/shared/forms/'),
      gapi: path.resolve(__dirname, 'src/thirdParty/gapi/'),
      header: path.resolve(__dirname, 'src/spa/layout/header/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      icons: path.resolve(__dirname, 'src/spa/app/shared/icons/'),
      initializeApp: path.resolve(__dirname, 'src/spa/app/initializeApp/'),
      inputs: path.resolve(__dirname, 'src/spa/app/shared/inputs/'),
      layout: path.resolve(__dirname, 'src/spa/layout/'),
      lotty: path.resolve(__dirname, 'src/thirdParty/lotty/'),
      mockData: path.resolve(__dirname, 'src/mockData/'),
      navigation: path.resolve(__dirname, 'src/spa/layout/navigation/'),
      pages: path.resolve(__dirname, 'src/spa/app/pages/'),
      routing: path.resolve(__dirname, 'src/spa/app/routing/'),
      shared: path.resolve(__dirname, 'src/spa/app/shared/'),
      static: path.resolve(__dirname, 'src/static/'),
      storybook: path.resolve(__dirname, 'src/thirdParty/storybook/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      typography: path.resolve(__dirname, 'src/spa/app/shared/typography/'),
      types: path.resolve(__dirname, 'src/types/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
};

module.exports = config;
