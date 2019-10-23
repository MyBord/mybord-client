const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: [
    'babel-polyfill',
    `${SRC_DIR}/index.tsx`,
    `${SRC_DIR}/index.scss`,
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
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.scss'],
    alias: {
      header: path.resolve(__dirname, 'src/app/header/'),
      navigation: path.resolve(__dirname, 'src/app/navigation/'),
      pages: path.resolve(__dirname, 'src/app/pages/'),
      shared: path.resolve(__dirname, 'src/app/shared/'),
      static: path.resolve(__dirname, 'src/static/'),
      storybook: path.resolve(__dirname, 'src/thirdParty/storybook/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
  },
};

module.exports = config;
