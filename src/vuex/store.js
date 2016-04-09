import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/clients'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    clients,
    user
  }
})
