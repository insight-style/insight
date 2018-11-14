const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rootDir = path.resolve(__dirname, './src/entries')
// const entries = fs.readdirSync(rootDir).map(i => path.join(rootDir, i))
const entries = {}

function walkDir(dirPath) {
  const ls = fs.readdirSync(dirPath)

  ls.forEach(item => {
    if (fs.statSync(path.join(dirPath, item)).isDirectory()) {
      walkDir(path.join(dirPath, item))
    } else {
      
      entries.push(path.join(dirPath, item))
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
      }
    ]
  }
}