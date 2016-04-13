<style lang="less">
.feature-overview {
  .feature-details {
    list-style: none;
    padding-left: 5px;
    color: #777;
  }
  .feature-description {
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
#features-table .title-row {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  width: 95%;
}
#features-table td {
    position: relative;
}
</style>

<template>
<!-- div to avoid fragement instance -->
<div>
<create-modal :show-create.sync="showCreate"></create-modal>
<div class="row">
    <div class="col-md-3">
    <button class="btn btn-primary btn-block margin-bottom" @click="showCreate = true">Create New Feature Request</button>
        <!-- Profile Image -->
        <div class="box box-solid">
            <div class="box-body feature-overview">
                <div v-if="typeof selectedFeature === 'undefined'">
                    <p class="text-center">
                        Please select a feature from the table to the right to see an overview about it.
                    </p>
                </div>
                <div v-else>
                    <h4>
                        {{selectedFeature.title}}
                    </h4>
                    <ul class="feature-details">
                      <li><strong>Client</strong>: {{selectedFeature.client.name}}</li>
                      <li><strong>Target Date</strong>: {{selectedFeature.target_date.format('MMMM Do YYYY')}}</li>
                      <li><strong>Area(s)</strong>: {{selectedFeature.areas.join(', ')}}</li>
                    </ul>
                    <hr>
                    <div class="feature-description"><p>{{selectedFeature.description}}</p></div>
                    <hr>
                    <a class="btn btn-default btn-block"  @click='viewFeatureDetails(selectedFeature.id)'>
                        <b>
                            View Details
                        </b>
                    </a>
                </div>
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->
    </div>
    <div class="col-md-9">
        <div class="box box-primary">
        <div class="box-header with-border">
              <h3 class="box-title">Requests</h3>
            </div>
            <div class="box-body no-padding">
                <div class="col-xs-12 table-responsive">
                    <data-table :columns="columns" :data="features" id="features-table">
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
import createModal from './_create.vue'
import {setFeature} from 'src/vuex/actions'

export default {
  name: 'index',
  computed: {
    selectedFeature () {
      /**
       * This is the feature that is currently
       * selected/highlighted in the datatable.
       */
      if (typeof this.selectedId !== 'undefined') {
        let sFeature = Object.assign({}, this.features.find(feature => feature.id === this.selectedId))
        sFeature['client'] = this.clients.find(client => client.id === sFeature.client_id)
        sFeature.target_date = moment(sFeature.target_date)
        sFeature.created_at = moment(sFeature.created_at)
        sFeature.updated_at = moment(sFeature.updated_at)
        return sFeature
      }
    }
  },
  components: {
    'create-modal': createModal
  },
  data () {
    return {
      columns: [
        {
          'title': 'Client',
          'data': 'client_id',
          'render': (client_id) => this.clients.find(client => client.id === client_id).name
        },
        {
          'title': 'Request',
          'width': '60%', 'data': 'title',
          'render': (data, type, full) => `<span class="title-row"><strong>${full.title}</strong> - ${full.description}</span>`
        },
        {
          'title': 'Target Date',
          'data': 'target_date',
          'render': (target_date) => moment(target_date).calendar()
        }
      ],
      selectedId: undefined,
      showCreate: false
    }
  },
  events: {
    'data-table:clicked' (data) {
      this.selectedId = data.id
    }
  },
  props: [
    'contentHeader'
  ],
  route: {
    data (transition) {
      this.contentHeader = 'All Feature Requests'
    }
  },
  methods: {
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
      clients: ({ clients }) => clients.all,
      features: ({ features }) => features.all,
      user: ({ user }) => user.info
    },
    actions: {
      setFeature
    }
  }
}
</script>