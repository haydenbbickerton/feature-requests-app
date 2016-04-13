<style>
</style>
<template>
<div>

<modal 
  title="Create New Feature"
  :show.sync="showCreate" 
  cancel-text="Close"
  cancel-class="btn btn-default"
  ok-text="Create"
  ok-class="btn btn-primary"
  @ok="createFeature(this.$data.form)"
>
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



    Status: {{createStatus ? createStatus : '---'}}
</modal>
</div>
</template>

<script>
/*eslint no-unused-vars:0 */
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
import 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
import vueDatetimePicker from 'vue-datetime-picker/src/vue-datetime-picker'
import modal from 'vue-bootstrap-modal'
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