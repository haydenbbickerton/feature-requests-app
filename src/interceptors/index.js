import data from './data'
import jwt from './jwt'
import clients from './clients'

let interceptors = [
  data,
  jwt,
  clients
]

function install (Vue, options) {
  // Add our interceptors to the vue instance
  for (let interceptor of interceptors) {
    Vue.http.interceptors.push(interceptor(options))
  }
}

export default install
