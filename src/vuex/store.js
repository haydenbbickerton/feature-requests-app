import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/clients'
import features from './modules/features'
import user from './modules/user'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    clients,
    features,
    user,
    loading
  }
})
