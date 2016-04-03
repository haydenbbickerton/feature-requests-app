import Resource from 'vue-resource'
import Interceptors from './interceptors'

function install (Vue, config) {
  /*
  |------------------------------------------------
  | Resource
  |------------------------------------------------
  */
  Vue.use(Resource)
  Vue.http.options = config.http.options
  Vue.http.headers.common = config.http.headers.common
  Vue.use(Interceptors, config)
}

export default install
