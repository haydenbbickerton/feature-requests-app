<style>
  .wrapper {
    background: #ecf0f5;
  }
  [v-cloak] {
    display: none;
  }
</style>

<template>
<preloader v-if="!kickedOff" transition="fade">
    <spinner></spinner>
</preloader>

<div class="wrapper">
    <navbar 
        :user="user" 
        v-ref:navbar>
    </navbar>
    <sidebar 
        :user="user"
        v-ref:sidebar>
    </sidebar>

    <div class="main-content-wrapper content-wrapper">
          <router-view :user="user" :breadcrumbs="breadcrumbs"></router-view>
    </div>
</div><!-- ./wrapper -->
</template>

<script>
// Import our assets
import './assets'

export default {
  name: 'App',
  data: function () {
    return {
      kickedOff: false,
      user: undefined
    }
  },
  computed: {
    breadcrumbs: function () {
      // Get current paths to array, without first one (it's blank)
      let crumbs = this.$route.path.split('/')
      crumbs.shift()
      return crumbs
    }
  },
  methods: {
    kickOff: function () {
      /*
       * The kickoff will check if the user has a login (from the cookie),
       * and set everything up according to that.
       */
      return this.initUserData().then(() => {
        this.$set('kickedOff', true)
      })
    },
    initUserData: function () {
      // Get info for logged in user, set it on the vue instance
      return this.$http({url: 'users/me', method: 'GET'}).then((response) => {
        this.$set('user', response.data)
      })
    }
  },
  watch: {
    kickedOff: function (kickedOff) {
      if (kickedOff) {
        // Emit event to all child components after kickoff
        this.$broadcast('kickedOff')
      }
    }
  },
  ready: function () {
    this.kickOff()
  }
}
</script>