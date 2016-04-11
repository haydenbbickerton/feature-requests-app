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
import modal from 'vue-bootstrap-modal'
import {createFeature} from 'src/vuex/actions'

export default {
  name: 'create',
  props: [
    'showCreate'
  ],
  components: {
    'modal': modal
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