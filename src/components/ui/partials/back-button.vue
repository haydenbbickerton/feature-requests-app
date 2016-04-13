<template>
<button @click="goBack()" class="btn btn-default btn-sm btn-flat"><i class="fa fa-angle-left" style="margin-right:5px;"></i> {{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default () {
        return 'Back'
      }
    }
  },
  methods: {
    goBack () {
      window.history.back()
    }
  }
}
</script>