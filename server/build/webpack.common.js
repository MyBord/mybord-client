const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, '../../node_modules')],
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          { loader: 'graphql-tag/loader' },
          { loader: 'graphql-import-loader' },
        ],
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.graphql', '.js', '.ts'],
  },
  target: 'node',
};
