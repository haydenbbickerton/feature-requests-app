/**
 * Communicates with API server about users
 */

import Vue from 'vue'

export default {
  getMe (cb) {
    Vue.http.get('users/me').then((response) => {
      cb(response.data)
    })
  }
}
