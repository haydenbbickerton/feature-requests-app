/**
 * Communicates with API server about clients
 */

import Vue from 'vue'

export default {
  getClients (cb) {
    Vue.http.get('clients').then((response) => {
      cb(response.data)
    })
  }
}
