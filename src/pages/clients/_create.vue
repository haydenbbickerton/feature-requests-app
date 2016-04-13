<style>
</style>

<template>
<div>
<modal 
  title="Create New Client"
  :show.sync="showCreate" 
  cancel-text="Close"
  cancel-class="btn btn-default"
  ok-text="Create"
  ok-class="btn btn-primary"
  @ok="createClient(this.$data)"
>
    <p>
      Name: <input type="text" v-model="name" placeholder="Client Name">
    </p>
    Status: {{createStatus ? createStatus : '---'}}
</modal>
</div>
</template>

<script>
import modal from 'vue-bootstrap-modal'
import {createClient} from 'src/vuex/actions'

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
      name: null
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