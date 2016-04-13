<style>
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<div v-if="showCreate">
  <create-modal  :show-create.sync="showCreate"></create-modal>
</div>

<div class="row">
    <div class="col-md-3">
    <button class="btn btn-primary btn-block margin-bottom" @click="showCreate = true">Create New Client</button>
        <!-- Profile Image -->
        <div class="box box-solid">
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
                    <button class="btn btn-default btn-block" v-on:click='viewFeatureRequests(selectedClient.id)'>
                        <b>
                            View Feature Requests
                        </b>
                    </button>
                </div>
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->
    </div>
    <div class="col-md-9">
        <div class="box box-primary">
            <div class="box-body">
                <div class="col-xs-12 table-responsive">
                    <data-table :columns="columns" :data="clients" :selected-id.sync="selectedId">
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import moment from 'moment'
import {setClient} from 'src/vuex/actions'
import createModal from './_create.vue'

export default {
  name: 'index',
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
          created_at: moment(sClient.created_at)
        }
      }
    }
  },
  components: {
    'create-modal': createModal
  },
  data () {
    return {
      columns: [
        {'title': 'ID', 'data': 'id'},
        {'title': 'Name', 'data': 'name'},
        {'title': '# of Feature Requests', 'render': (data, type, full, meta) => full.features.length}
      ],
      selectedId: undefined,
      showCreate: false
    }
  },
  props: [
    'contentHeader'
  ],
  route: {
    data (transition) {
      this.contentHeader = 'All Clients'
    }
  },
  methods: {
    featuresColumnRender (data, type, full, meta) {
      console.log(data.features)
      if (typeof data.features !== 'undefined') {
        return data.features.length
      }
    },
    viewFeatureRequests (id) {
      /**
       * Set selected client in store, then
       * redirect to feature requests page.
       */
      this.setClient(id).then(() => {
        this.$router.go({name: 'client', params: { id: this.selectedClient.id }})
      })
    }
  },
  vuex: {
    getters: {
      clients: ({ clients }) => clients.all
    },
    actions: {
      setClient
    }
  }
}
</script>