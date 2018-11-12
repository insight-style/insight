const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/entries/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { module: true } },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              module: true
            }
          }
        ]
      }
    ]
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