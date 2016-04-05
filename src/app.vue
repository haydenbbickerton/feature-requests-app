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
    <preloader transition="fade" v-if="$loadingRouteData">
        <spinner>
        </spinner>
    </preloader>
    <div class="wrapper" v-if="!$loadingRouteData">
        <navbar :clients="clients" :user="user" v-ref:navbar></navbar>
        <sidebar :user="user" v-ref:sidebar></sidebar>
        <div class="main-content-wrapper content-wrapper">
            <router-view :breadcrumbs="breadcrumbs" :user="user" :clients="clients" :client="client"></router-view>
        </div>
    </div>
    <!-- ./wrapper -->
</div>
</template>

<script>
// Import our assets
import './assets'

export default {
  name: 'App',
  data () {
    return {
      client: undefined,
      clients: null,
      kickedOff: false,
      user: null
    }
  },
  computed: {
    breadcrumbs () {
      // Get current paths to array, without first one (it's blank)
      let crumbs = this.$route.path.split('/')
      crumbs.shift()
      return crumbs
    }
  },
  route: {
    data (transition) {
      /*
       * TIL: Because vue-router is awesome, I can return
       * these promises in object. After they resolve,
       * they'll be set in the data object and the
       * transition will continue.
       *
       * 1 object replaces 20 lines and 3 methods. Love Vue.
       */
      if (!this.kickedOff) {
        return {
          user: this.$http.get('users/me').then((response) => { return response.data }),
          clients: this.$http.get('clients').then((response) => { return response.data }),
          kickedOff: true
        }
      }
      transition.next()
    }
  }
}

</script>