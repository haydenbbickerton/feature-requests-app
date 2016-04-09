<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<section class="content-header">
      <h1>
        Clients
      </h1>
      <breadcrumbs :crumbs="routePathsArray"></breadcrumbs>
</section>

<section class="content">
    <router-view :client="client"></router-view>
</section>
</div>
</template>

<script>
import {routePathsArray} from 'src/vuex/getters'

export default {
  name: 'clients',
  vuex: {
    getters: {
      routePathsArray
    }
  }
}
</script>