var path = require('path')

var config = {
  env: 'production',
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '../static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  paths: {
    root: path.resolve(__dirname, '..')
  },
  base_domain: 'feature-requests.dev',
  http: {
    options: {
      root: 'http://api.feature-requests.dev'
    },
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  },
  debug: false
}

module.exports = config
