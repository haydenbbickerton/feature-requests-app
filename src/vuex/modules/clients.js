import * as types from '../mutation-types'

const state = {
  all: null,
  current_id: null,
  lastCreation: null
}

Object.defineProperties(state, {
  current: {
    get () {
      // If not set, return null. Otherwise return find and return client
      return this.current_id === null ? null : this.all.find(client => client.id === this.current_id)
    },
    set (id) {
      this.current_id = id
    }
  }
})

const mutations = {
  [types.CREATE_CLIENT] (state) {
    state.lastCheckout = null
  },
  [types.CREATE_CLIENT_SUCCESS] (state) {
    state.lastCreation = 'successful'
  },
  [types.CREATE_CLIENT_FAILURE] (state, savedCartItems) {
    state.lastCreation = 'failed'
  },
  [types.SET_CLIENT] (state, client) {
    state.current = client.id
    // state.current.features = state.current.features.data
  },
  [types.SET_CLIENTS] (state, clients) {
    state.all = clients
  }
}

export default {
  state,
  mutations
}
