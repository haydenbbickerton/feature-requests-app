<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
    <router-view :user="user"></router-view>
</div>
</template>

<script>
module.exports = {
  name: 'clients',
  props: [
    'user'
  ]
}
</script>