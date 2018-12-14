const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = path.resolve(__dirname, './src/entries')
const entries = {}
const htmlWebpackPlugins = []

function walkDir(dirPath) {
  const ls = fs.readdirSync(dirPath)

  ls.forEach(item => {
    if (fs.statSync(path.join(dirPath, item)).isDirectory()) {
      walkDir(path.join(dirPath, item))
    } else {
      const absDirPath = path.join(dirPath, item)
      entries[
        absDirPath.slice(rootDir.length + 1, absDirPath.length - 3)
      ] = path.join(dirPath, item)
      htmlWebpackPlugins.push(new HtmlWebpackPlugin({
        template: path.resolve('./template.html'),
        title: 'Insight Style Guide',
        chunks: [absDirPath.slice(rootDir.length + 1, absDirPath.length - 3)],
        filename: `${absDirPath.slice(rootDir.length + 1, absDirPath.length - 3)}.html`
      }))
    }
  })
}
walkDir(rootDir)

module.exports = {
  entry: entries,
  module: {
    rules: [{
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.less$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              module: true
            }
          },
          {
            loader: 'less-loader'
          }
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
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    ...htmlWebpackPlugins
  ]
}