<style lang="less">
.client-overview {
  .client-details {
    list-style: none;
    padding-left: 5px;
    color: #777;
  }
  .client-description {
    display: block;
    display: -webkit-box;
    max-width: 400px;
    height: 55px;
    margin: 0 auto;
    line-height: 1.4;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
#client-table .title-row {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 95%;
}
#client-table td {
    position: relative;
}
</style> 

<template>
<!-- div to avoid fragement instance -->
<div>
    <div class="row">
        <div class="col-md-3">
            <div class="box box-primary client-overview">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        Overview
                    </h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <strong><i class="fa fa-building margin-r-5"></i> Name</strong>
                    <p class="text-muted">
                        {{client.name}}
                    </p>
                    <hr>
                        <strong>
                            <i class="fa fa-calendar margin-r-5">
                            </i>
                            Dates
                        </strong>
                        <ul class="client-details">
                          <li><strong>Created</strong>: {{moment(client.created_at).format('MMMM Do YYYY, h:mma')}}</li>
                          <li><strong>Last Updated</strong>: {{moment(client.updated_at).format('MMMM Do YYYY, h:mma')}}</li>
                        </ul>
                </div>
                <!-- /.box-body -->
            </div>
        </div>
        <div class="col-md-9">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        {{client.name}}'s Feature Requests
                    </h3>
                </div>
                <div class="box-body">
                  <data-table :columns="columns" :data="client.features" id="client-table" :options="tableOptions">
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
import {setClient, setFeature} from 'src/vuex/actions'

export default {
  name: 'single',
  computed: {
  },
  data () {
    return {
      columns: [
        {
          'title': 'Client',
          'data': 'client_id',
          'render': (client_id) => this.client.name
        },
        {
          'title': 'Request',
          'width': '60%', 'data': 'title',
          'render': (data, type, full) => `<span class="title-row"><a>${full.title}</strong> - ${full.description}</a></span>`
        },
        {
          'title': 'Date',
          'data': 'created_at',
          'render': (created_at) => moment(created_at).calendar()
        }
      ],
      tableOptions: {
        clickActive: false
      }
    }
  },
  events: {
    'data-table:clicked' (data) {
      this.viewFeatureDetails(data.id)
    }
  },
  methods: {
    moment, // Can't call the import from the template... So we'll bind as instance method.
    viewFeatureDetails (id) {
      /**
       * Set selected feature in store, then
       * redirect to feature details page.
       */
      this.setFeature(id).then(() => {
        this.$router.go({name: 'feature', params: { id }})
      })
    }
  },
  vuex: {
    getters: {
      client: ({ clients }) => clients.current,
      clients: ({ clients }) => clients.all,
      features: ({ features }) => features.all,
      user: ({ user }) => user.info
    },
    actions: {
      setClient,
      setFeature
    }
  }
}
</script>