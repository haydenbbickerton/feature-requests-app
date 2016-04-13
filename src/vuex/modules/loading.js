import * as types from '../mutation-types'

const state = {
  progress: 0,
  error: false
}

const mutations = {
  [types.LOADING_SET] (state, progress) {
    state.progress = progress
  },
  [types.LOADING_ERROR] (state) {
    state.progress = 100
    state.error = true
  }
}

export default {
  state,
  mutations
}
