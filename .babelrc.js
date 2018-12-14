module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: [
          'last 2 version',
          'Chrome > 50',
          'IE >= 11'
        ],
        'useBuiltIns': 'usage'
      }
    ]
  ]
}