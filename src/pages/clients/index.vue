<style>
</style>

<template>
<div>
<!-- div to avoid fragement instance -->
<div class="panel panel-default">
  <div class="panel-body">
      <div class="col-xs-12 table-responsive">
        <data-table url="clients" :columns="columns"></data-table>
      </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'index',
  props: [
    'user'
  ],
  data: function () {
    return {
      columns: [
        {'data': 'id'},
        {'data': 'name'}
      ]
    }
  }
}
</script>