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
  name: 'App'
}
</script>