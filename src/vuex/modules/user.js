import {SET_USER} from '../mutation-types'

const state = {
  info: {}
}

const mutations = {
  [SET_USER] (state, user) {
    state.info = user
  }
}

export default {
  state,
  mutations
}
