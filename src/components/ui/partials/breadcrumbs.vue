<style scoped>
ol.breadcrumb li a {
    text-transform: capitalize;
}
ol.breadcrumb li.active a {
    font-weight: bold;
}
</style>

<template>
<ol class="breadcrumb">
    <li v-for="crumb in crumbs" track-by="$index" v-bind:class="{'active': $index === (crumbs.length-1)}">
      <a v-link="{path: makeCrumb(crumbs, $index) }">
        <i class="fa fa-dashboard" v-if="$index === 0"></i> {{ crumb }}
      </a>
    </li>
</ol>
</template>

<script>
export default {
  name: 'breadcrumbs',
  computed: {
    crumbs () {
      const crumbs = this.routePath.split('/')
      crumbs.shift()
      return crumbs
    }
  },
  methods: {
    makeCrumb: (crumbs, index) => '/' + crumbs.slice(0, index + 1).join('/')
  },
  vuex: {
    getters: {
      routePath: state => state.route.path
    }
  }
}
</script>