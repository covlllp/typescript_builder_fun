const path = require('path');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  mode: 'development',
  entry: './src/js/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIndentName: '[name]__[local]__[hash:base64]',
            },
          },
        ]),
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
