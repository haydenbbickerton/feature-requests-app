<style>
  .wrapper {
    background: #ecf0f5;
  }
  [v-cloak] {
    display: none;
  }
</style>

<template>
<div class="wrapper" v-if="kickedOff">
    <navbar v-ref:navbar></navbar>
    <sidebar v-ref:sidebar></sidebar>
    <div class="main-content-wrapper content-wrapper">
        <router-view></router-view>
    </div>
</div>
<!-- ./wrapper -->
</template>

<script>
import './assets'
import {getMe, getAllClients, getAllFeatures} from 'src/vuex/actions'

export default {
  name: 'App',
  data () {
    return {}
  },
  vuex: {
    getters: {
      clients: ({ clients }) => clients.all,
      features: ({ features }) => features.all,
      user: ({ user }) => user.info
    },
    actions: {
      getAllClients,
      getAllFeatures,
      getMe
    }
  },
  computed: {
    kickedOff () {
      /**
       * This computed property will resolve to true once
       * the user/clients/features have all been set in vuex store.
       * Even if there are no clients/features, it will be set to [], not null
       */
      return this.user.id !== 'undefined' && this.clients !== null && this.features !== null
    }
  },
  ready () {
  },
  route: {
    data (transition) {
      /**
       * If we haven't kicked off, run a promise that resolves when all returned
       * promises have resolved.
       */
      if (!this.kickedOff) {
        return Promise.all([this.getMe(), this.getAllFeatures(), this.getAllClients()]).then(() => {
          // Everything is ready, hide the preloader overlay
          $('#preloader').delay(1000).fadeOut('slow')
        })
      }
      transition.next()
    }
  }
}

</script>