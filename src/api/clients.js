/**
 * Communicates with API server about clients
 */

import Vue from 'vue'

const resource = Vue.resource('clients{/id}')

export default {
  getClient (id, options, cb) {
    return resource.get({id: id}, options).then((response) => {
      cb(response.data)
    })
  },
  getClients (cb) {
    return resource.get().then((response) => {
      cb(response.data)
    })
  },
  createClient (data, cb, errorCb) {
    return resource.save({}, data).then((response) => {
      cb(response.data)
    }, (response) => {
      errorCb(response.data)
    })
  },
  updateClient (data, cb, errorCb) {
    return resource.update({id: data.id}, data).then((response) => {
      cb(response.data)
    }, (response) => {
      errorCb(response.data)
    })
  }
}
