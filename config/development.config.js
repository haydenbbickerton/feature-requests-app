var path = require('path')

var config = {
  env: 'development',
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

export default config
