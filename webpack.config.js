const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         name: "commons",
  //         chunks: "initial",
  //         minChunks: 2
  //       }
  //     }
  //   }
  // },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
