<style>
</style>

<template>
<div>
<modal :show.sync="showCreate" title="Create New Client">
  <div slot="modal-body" class="modal-body">
    <spinner v-if="saving"></spinner>
    <div v-else>
      <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="name" placeholder="Client Name" class="form-control">
      </div>
    </div>
  </div>
  <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click='showCreate = false'>Close</button>
    <button type="button" class="btn btn-primary" @click='createClientWrapper(this.$data)'>Save</button>
  </div>
</modal>
</div>
</template>

<script>
import { modal } from 'vue-strap'
import {createClient} from 'src/vuex/actions'

export default {
  name: 'create',
  props: [
    'showCreate'
  ],
  components: {
    modal
  },
  data () {
    return {
      name: null,
      saving: false
    }
  },
  methods: {
    createClientWrapper (data) {
      this.saving = true
      this.createClient(data).then((value) => {
        this.showCreate = false
      })
    }
  },
  vuex: {
    getters: {
      createStatus: state => state.clients.lastCreation
    },
    actions: {
      createClient
    }
  }
}
</script>