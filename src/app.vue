<style>
  .wrapper {
    background: #ecf0f5;
  }
  [v-cloak] {
    display: none;
  }
</style>

<template>
<div> <!-- blank div to avoid fragement instance -->
    <preloader transition="fade" v-if="!kickedOff">
        <spinner></spinner>
    </preloader>
    <div class="wrapper" v-if="kickedOff">
        <navbar v-ref:navbar></navbar>
        <sidebar v-ref:sidebar></sidebar>
        <div class="main-content-wrapper content-wrapper">
            <router-view></router-view>
        </div>
    </div>
    <!-- ./wrapper -->
</div>
</template>

<script>
import './assets'
import {getMe, getAllClients} from 'src/vuex/actions'

export default {
  name: 'App',
  data () {
    return {}
  },
  vuex: {
    getters: {
      clients: ({ clients }) => clients.all,
      user: ({ user }) => user.info
    },
    actions: {
      getAllClients,
      getMe
    }
  },
  computed: {
    kickedOff () {
      /**
       * This computed property will resolve to true once
       * the user and clients have both been set in vuex store.
       */
      return this.user.id !== 'undefined' && this.clients !== null
    }
  },
  route: {
    data (transition) {
      this.getMe()
      this.getAllClients()
      transition.next()
    }
  }
}

</script>