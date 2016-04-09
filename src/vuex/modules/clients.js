import {
  SET_CLIENT,
  SET_CLIENTS
} from '../mutation-types'

const state = {
  all: null,
  current: null
}

const mutations = {
  [SET_CLIENT] (state, client) {
    state.current = client
  },
  [SET_CLIENTS] (state, clients) {
    state.all = clients
  }
}

export default {
  state,
  mutations
}
