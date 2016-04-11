import * as types from '../mutation-types'

const state = {
  all: null,
  lastCreation: null
}

const mutations = {
  [types.CREATE_FEATURE] (state) {
    state.lastCheckout = null
  },
  [types.CREATE_FEATURE_SUCCESS] (state) {
    state.lastCreation = 'successful'
  },
  [types.CREATE_FEATURE_FAILURE] (state, savedCartItems) {
    state.lastCreation = 'failed'
  },
  [types.SET_FEATURES] (state, features) {
    state.all = features
  }
}

export default {
  state,
  mutations
}
