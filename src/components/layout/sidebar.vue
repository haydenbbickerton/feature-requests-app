<style lang="less" scoped>
.main-sidebar {
  background-color: #222d32;

  .fa-building {
    color: #F3F3F3;
    font-size: 36px;
    margin-left: 5px;
    margin-top: 5px;
  }
}
</style>

<template>
  <aside class="main-sidebar" v-el:sidebar>
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image text-center">
          <i class="fa fa-building"></i>
        </div>
        <div class="pull-left info">
          <p>{{ client ? client.name : 'No Client Selected'}}</p>
          <a v-link="{ name: 'features' }">Feature Requests: {{ client ? client.features.length : '---'}}</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MENU</li>
        <li v-link-active><a v-link="{ name: 'clients' }">All Clients</a></li>
        <li v-link-active><a v-link="{ name: 'features' }">Features</a></li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  vuex: {
    getters: {
      client: ({ clients }) => clients.current
    }
  }
}
</script>