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
    <div class="row">
        <div class="col-md-3">
            <div class="box box-primary feature-overview">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        Overview
                    </h3>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <strong><i class="fa fa-building margin-r-5"></i> Client</strong>
                    <p class="text-muted">
                        {{feature.client.name}}
                    </p>
                    <hr>
                        <strong>
                            <i class="fa fa-calendar margin-r-5">
                            </i>
                            Dates
                        </strong>
                        <ul class="feature-details">
                          <li><strong>Created</strong>: {{feature.created_at.format('MMMM Do YYYY, h:mma')}}</li>
                          <li><strong>Last Updated</strong>: {{feature.updated_at.format('MMMM Do YYYY, h:mma')}}</li>
                        </ul>
                        <hr>
                          <strong><i class="fa fa-list margin-r-5"></i>Areas</strong>
                          <p>
                            <span v-for="area in feature.areas" class="label label-{{areaColors[area]}}" style="margin-right:5px;"> {{ area }} </span>
                          </p>
                          <hr>
                          <strong><i class="fa fa-link margin-r-5"></i>URL</strong>
                          <p>
                            <a href="{{feature.url}}" v-if="feature.url">{{feature.url}}</a>
                            <span v-else>---</span>
                          </p>
                          </hr>
                        </hr>
                    </hr>
                </div>
                <!-- /.box-body -->
            </div>
        </div>
        <div class="col-md-9">
            <div class="box box-solid">
                <div class="box-header with-border">
                    <h3 class="box-title">
                        {{feature.title}}
                    </h3>
                </div>
                <div class="box-body">
                  <p>{{feature.description}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'single',
  computed: {
    feature () {
      // Get feature by the id in url. Probably not the best idea though...
      let sFeature = Object.assign({}, this.features.find(feature => feature.id === parseInt(this.$route.params.feature_id)))
      sFeature['client'] = this.clients.find(client => client.id === sFeature.client_id)
      sFeature.created_at = moment(sFeature.created_at)
      sFeature.updated_at = moment(sFeature.updated_at)
      return sFeature
    }
  },
  data () {
    return {
      areaColors: {
        'Policies': 'warning',
        'Billing': 'success',
        'Claims': 'info',
        'Reports': 'danger'
      }
    }
  },
  events: {
  },
  methods: {
  },
  vuex: {
    getters: {
      clients: ({ clients }) => clients.all,
      features: ({ features }) => features.all,
      user: ({ user }) => user.info
    },
    actions: {}
  }
}
</script>