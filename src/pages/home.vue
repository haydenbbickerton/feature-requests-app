<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
    <router-view :user="user" :account="account" :active-accounts="activeAccounts"></router-view>
</div>
</template>

<script>
module.exports = {
  name: 'home',
  props: [
    'user'
  ]
}
</script>