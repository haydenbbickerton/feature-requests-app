<style lang="less" scoped>
.main-sidebar {
  background-color: #222d32;
}
</style>

<template>
  <aside class="main-sidebar" v-el:sidebar>
    <section class="sidebar">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">ADVERTISEMENT</li>
        <li v-link-active><a v-link="{ name: '' }">Overview</a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

</template>

<script>
export default {
  name: 'sidebar',
  data: function () {
    return {
    }
  },
  props:
  [
    'user'
  ]
}
</script>