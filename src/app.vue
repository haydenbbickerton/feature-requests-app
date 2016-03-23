<style>
  .wrapper {
    background: #ecf0f5;
  }
  [v-cloak] {
    display: none;
  }
</style>

<template>
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
          <router-view :user="user"></router-view>
    </div>
</div><!-- ./wrapper -->
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      kickedOff: false,
      user: undefined
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
        this.$broadcast('kickedOff')
      }
    }
  },
  ready: function () {
    this.kickOff()
  }
}
</script>