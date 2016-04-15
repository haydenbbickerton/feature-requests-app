var path = require('path')

var config = {
  env: 'development',
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '../static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
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
  debug: true
}

module.exports = config
