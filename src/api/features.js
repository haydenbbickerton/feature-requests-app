/**
 * Communicates with API server about features
 */

import Vue from 'vue'

const resource = Vue.resource('features')

export default {
  getFeatures (cb) {
    return resource.get().then((response) => {
      cb(response.data)
    })
  },
  createFeature (data, cb, errorCb) {
    return resource.save({}, data).then((response) => {
      cb(response.data)
    }, (response) => {
      errorCb(response.data)
    })
  }
}
