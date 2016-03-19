<style lang="less" scoped>
.main-sidebar {
  background-color: #222d32;
}
</style>

<template>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <form class="sidebar-form">
          <date-picker class="btn btn-default btn-block"></date-picker>
      </form>
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