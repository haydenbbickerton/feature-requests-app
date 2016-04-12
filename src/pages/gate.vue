<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<section class="content-header">
      <h1>
        {{ contentHeader }}
        <back-button></back-button>
      </h1>
      <breadcrumbs></breadcrumbs>
</section>

<section class="content">
    <router-view :content-header.sync="contentHeader"></router-view>
</section>
</div>
</template>

<script>
export default {
  name: 'gate',
  data () {
    return {
      contentHeader: ''
    }
  }
}
</script>