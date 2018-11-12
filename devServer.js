const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const HOST = '127.0.0.1'
// PORT 为 4674 是因为在拼音9键式键盘布局中 I(4) N(6) S(7) I(4)
const PORT = 4674

const config = require('./webpack.dev.conf')

const options = {
  contentBase: './dist',
  hot: true,
  inline: true,
  host: '127.0.0.1'
}

WebpackDevServer.addDevServerEntrypoints(config, options)

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, options)

server.listen(PORT, HOST, () => {
  console.log(`dev server listening on port ${PORT} of host ${HOST}`)
})
