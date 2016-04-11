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
    <li><a v-link="{ name: 'home' }"><i class="fa fa-dashboard"></i> Home</a></li>
    <li v-for="crumb in crumbs" v-bind:class="{'active': $index === (crumbs.length-1)}">
        <a>{{ crumb }}</a>
    </li>
</ol>
</template>

<script>
export default {
  name: 'breadcrumbs',
  props: [
    'crumbs'
  ]
}
</script>