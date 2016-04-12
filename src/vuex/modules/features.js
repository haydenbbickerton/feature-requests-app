import * as types from '../mutation-types'

const state = {
  all: null,
  current_id: null,
  lastCreation: null
}

Object.defineProperties(state, {
  current: {
    get () {
      // If not set, return null. Otherwise return find and return feature
      return this.current_id === null ? null : this.all.find(feature => feature.id === this.current_id)
    },
    set (id) {
      this.current_id = id
    }
  }
})

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
  [types.SET_FEATURE] (state, feature) {
    state.current = feature
  },
  [types.SET_FEATURES] (state, features) {
    state.all = features
  }
}

export default {
  state,
  mutations
}
