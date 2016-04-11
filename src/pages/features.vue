<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<section class="content-header">
      <h1>
        Feature Requests
      </h1>
      <breadcrumbs :crumbs="routePathsArray"></breadcrumbs>
</section>

<section class="content">
    <router-view></router-view>
</section>
</div>
</template>

<script>
import {routePathsArray} from 'src/vuex/getters'

export default {
  name: 'features',
  vuex: {
    getters: {
      routePathsArray
    }
  }
}
</script>