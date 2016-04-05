<style>
</style>

<template>
<div class="row">
<div class="col-md-3">

          <!-- Profile Image -->
          <div class="box box-primary">
            <div class="box-body box-profile">
              <div v-if="client !== null">
                <p class="text-center">Please select a client from the table to the right.</p>
              </div>
              <div v-else>
                <h3 class="profile-username text-center">{{client.name}}</h3>
                <p class="text-muted text-center">Software Engineer</p>
                <ul class="list-group list-group-unbordered">
                  <li class="list-group-item">
                    <b>Feature Requests</b> <a class="pull-right">---</a>
                  </li>
                </ul>
                <a href="#" class="btn btn-primary btn-block"><b>View Feature Requests</b></a>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>


<div class="col-md-9">
<div class="panel panel-default">
  <div class="panel-body">
      <div class="col-xs-12 table-responsive">
        <data-table :data="clients" :columns="columns"></data-table>
      </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'index',
  props: [
    'client',
    'clients',
    'user'
  ],
  data () {
    return {
      columns: [
        {'title': 'ID', 'data': 'id'},
        {'title': 'Name', 'data': 'name'},
        {'title': 'Actions', 'data': 'id', render: this.renderActions}
      ]
    }
  },
  methods: {
    renderActions (data, type, full, meta) {
      return 'ha'
    }
  }
}
</script>