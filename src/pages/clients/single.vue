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
.client-features {
  > .box-header > .box-title {
    .btn.btn-default {
      background: #f4f4f4;
    }
    .btn-primary.btn-primary:hover {
      background: #367fa9;
    }
    .btn.btn-danger:hover {
      background: #d73925;
    }
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
            <div class="box box-solid client-features">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        {{client.name}}'s Feature Requests
                        <button class="btn btn-sm btn-flat btn-default" @click="togglePriorityMode" v-if="!priorityMode">
                            Change Priorities
                        </button>
                        <button class="btn btn-sm btn-flat btn-primary" @click="savePriorities" v-if="priorityMode">
                            Save
                        </button>
                        <button class="btn btn-sm btn-flat btn-danger" @click="togglePriorityMode" v-if="priorityMode">
                            Cancel
                        </button>
                    </h3>
                </div>
                <div class="box-body">
                  <data-table 
                    :columns="columns"
                    :data="client.features"
                    id="client-table"
                    :options="tableOptions"
                    v-if="!priorityMode">
                  </data-table>
                  <priorities :features="client.features" :priorities-order.sync="prioritiesOrder" v-else></priorities>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'
import {updateClient, setFeature, loadingSet} from 'src/vuex/actions'
import priorities from './_priorities.vue'

export default {
  name: 'single',
  computed: {
  },
  components: {
    priorities
  },
  data () {
    return {
      columns: [
        {
          'title': 'Priority',
          'render': (data, type, full, meta) => parseInt(meta.row) + 1
        },
        {
          'title': 'Request',
          'width': '60%', 'data': 'title',
          'render': (data, type, full) => `<span class="title-row"><a>${full.title}</strong> - ${full.description}</a></span>`
        },
        {
          'title': 'Target Date',
          'data': 'target_date',
          'render': (target_date) => moment(target_date).calendar()
        }
      ],
      tableOptions: {
        clickActive: false
      },
      priorityMode: false,
      prioritiesOrder: {}
    }
  },
  events: {
    'data-table:clicked' (data) {
      this.viewFeatureDetails(data.id)
    }
  },
  props: [
    'contentHeader'
  ],
  route: {
    data (transition) {
      this.contentHeader = this.client.name
    }
  },
  ready () {
    this.$set('prioritiesOrder', this.client.feature_priorities)
  },
  methods: {
    moment,
    viewFeatureDetails (id) {
      /**
       * Set selected feature in store, then
       * redirect to feature details page.
       */
      this.setFeature(id).then(() => {
        this.$router.go({name: 'feature', params: { id }})
      })
    },
    togglePriorityMode () {
      this.priorityMode = !this.priorityMode
    },
    savePriorities () {
      this.loadingSet(25)
      let sClient = _.cloneDeep(this.client)
      sClient['feature_priorities'] = this.prioritiesOrder
      this.updateClient(sClient).then(() => {
        this.loadingSet(100)
        this.togglePriorityMode()
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
      loadingSet,
      updateClient,
      setFeature
    }
  }
}
</script>