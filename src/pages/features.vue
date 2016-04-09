<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<section class="content-header">
      <h1>
        Features
      </h1>
      <breadcrumbs :crumbs="breadcrumbs"></breadcrumbs>
</section>

<section class="content">
    <router-view></router-view>
</section>
</div>
</template>

<script>
module.exports = {
  name: 'features',
  props: [
    'breadcrumbs'
  ]
}
</script>