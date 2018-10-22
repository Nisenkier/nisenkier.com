const { resolve } = require('path')
const { } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = '.dist'

let config = {
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
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(outputPath),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'eval-source-map'
  config.devServer = {
    port: 3000,
    open: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: true,
    },
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.output.filename = '[name].[hash].js'
  config.plugins = [
    ...config.plugins,
    new UglifyJsPlugin({ sourceMap: true }),
  ]
}

module.exports = config;
