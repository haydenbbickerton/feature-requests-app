import * as types from '../mutation-types'

const state = {
  all: null,
  current: null,
  lastCreation: null
}

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
    state.current = client
    state.current.features = state.current.features.data
  },
  [types.SET_CLIENTS] (state, clients) {
    state.all = clients
  }
}

export default {
  state,
  mutations
}
