<style>
</style>

<template>
<div class="row">
    <div class="col-md-3">
        <!-- Profile Image -->
        <div class="box box-primary">
            <div class="box-body box-profile">
                <div v-if="typeof selectedClient === 'undefined'">
                    <p class="text-center">
                        Please select a client from the table to the right to view their information.
                    </p>
                </div>
                <div v-else>
                    <h3 class="profile-username text-center">
                        {{selectedClient.name}}
                    </h3>
                    <p class="text-muted text-center">
                        Since {{selectedClient.created_at.format('MMMM Do YYYY')}}
                    </p>
                    <ul class="list-group list-group-unbordered">
                        <li class="list-group-item">
                            <b>
                                Feature Requests
                            </b>
                            <a class="pull-right">
                                ---
                            </a>
                        </li>
                    </ul>
                    <a class="btn btn-primary btn-block" v-on:click='viewFeatureRequests(selectedClient.id)'>
                        <b>
                            View Feature Requests
                        </b>
                    </a>
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
                    <data-table :columns="columns" :data="clients" :selected-id.sync="selectedId">
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
import {setClient} from 'src/vuex/actions'
import {currentClient} from 'src/vuex/getters'

export default {
  name: 'index',
  props: [
    'client'
  ],
  computed: {
    selectedClient () {
      /**
       * This is the client that is currently
       * selected/highlighted in the datatable.
       */
      if (typeof this.selectedId !== 'undefined') {
        let sClient = this.clients.find(client => client.id === this.selectedId)
        return {
          id: sClient.id,
          name: sClient.name,
          created_at: moment(sClient.created_at.date)
        }
      }
    }
  },
  data () {
    return {
      columns: [
        {'title': 'ID', 'data': 'id'},
        {'title': 'Name', 'data': 'name'}
      ],
      selectedId: undefined
    }
  },
  methods: {
    viewFeatureRequests (id) {
      /**
       * Set selected client in store, then
       * redirect to feature requests page.
       */
      this.setClient(id)
      this.$router.go({name: 'features'})
    }
  },
  vuex: {
    getters: {
      currentClient,
      clients: ({ clients }) => clients.all,
      user: ({ user }) => user.info
    },
    actions: {
      setClient
    }
  }
}
</script>