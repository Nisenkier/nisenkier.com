const { resolve } = require('path')
const { } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = '.dist'

let config = {
  mode: 'development',
  entry: {
    'scripts/main.bundle': resolve('./src/main.js')
  },
  output: {
    path: resolve(outputPath),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(outputPath),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: true,
    },
  }
}

module.exports = config;
