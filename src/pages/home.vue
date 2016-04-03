<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<section class="content-header">
      <h1>
        Home
      </h1>
      <breadcrumbs :crumbs="breadcrumbs"></breadcrumbs>
</section>

<section class="content">
    <router-view :user="user"></router-view>
</section>
</div>
</template>

<script>
module.exports = {
  name: 'home',
  props: [
    'breadcrumbs',
    'user'
  ]
}
</script>