<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<section class="content-header">
      <h1>
        Clients
      </h1>
      <breadcrumbs :crumbs="breadcrumbs"></breadcrumbs>
</section>

<section class="content">
    <router-view :user="user" :client="client" :clients="clients"></router-view>
</section>
</div>
</template>

<script>
module.exports = {
  name: 'clients',
  props: [
    'client',
    'clients',
    'breadcrumbs',
    'user'
  ]
}
</script>