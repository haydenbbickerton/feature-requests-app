<style>
</style>
<template>
<div>
<modal :show.sync="showCreate" title="Create New Feature">
  <div slot="modal-body" class="modal-body">
  <spinner v-if="saving"></spinner>
  <div v-else>
    <div class="form-group">
      <label>Title</label>
      <input type="text" v-model="form.title" placeholder="Feature Title" class="form-control">
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea v-model="form.description" placeholder="Feature Description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>URL</label>
      <input type="text" v-model="form.url" class="form-control">
    </div>
    <div class="form-group">
      <label>Client</label>
      <select v-model="form.client" class="form-control">
        <option v-for="client in clients" value="{{client.id}}">{{client.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label>Target Date</label>
      <vue-datetime-picker :model.sync="form.target_date" type="date" date-format="MM-DD-YYYY"></vue-datetime-picker>
    </div>
    <div class="form-group">
      <label>Areas</label>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="Policies" v-model="form.areas">
          Policies
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="Billing" v-model="form.areas">
          Billing
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="Claims" v-model="form.areas">
          Claims
        </label>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="Reports" v-model="form.areas">
          Reports
        </label>
      </div>
    </div>
    </div>
 </div>
 <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click='showCreate = false'>Close</button>
    <button type="button" class="btn btn-primary" @click='createFeatureWrapper(this.$data.form)'>Save</button>
  </div>
</modal>
</div>
</template>

<script>
/*eslint no-unused-vars:0 */
import '!style!css!eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css'
import 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
import vueDatetimePicker from 'vue-datetime-picker/src/vue-datetime-picker'
import { modal } from 'vue-strap'
import moment from 'moment'
import {createFeature} from 'src/vuex/actions'

export default {
  name: 'create',
  props: [
    'showCreate'
  ],
  components: {
    'vue-datetime-picker': vueDatetimePicker,
    modal
  },
  data () {
    return {
      name: null,
      content: null,
      saving: false,
      form: {
        title: null,
        description: null,
        client: null,
        url: null,
        target_date: moment().format('M-D-YYYY'),
        areas: []
      }
    }
  },
  methods: {
    createFeatureWrapper (data) {
      this.saving = true
      this.createFeature(data).then((test) => {
        this.showCreate = false
      })
    }
  },
  vuex: {
    getters: {
      clients: state => state.clients.all,
      createStatus: state => state.clients.lastCreation
    },
    actions: {
      createFeature
    }
  }
}
</script>