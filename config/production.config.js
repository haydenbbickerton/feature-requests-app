var path = require('path')

var config = {
  env: 'production',
  paths: {
    root: path.resolve(__dirname, '..')
  },
  base_url: 'http://feature-requests.dev',
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

export default config
