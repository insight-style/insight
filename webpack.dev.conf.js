const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackCommonConfig = require('./webpack.common')

const developmentConfig = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./template.html'),
      title: 'Insight Style Guide'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:5].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = webpackMerge(developmentConfig, webpackCommonConfig)
