<style scoped>
.spinner {
    display: block;
    width: 40px;
    height: 40px;
    position: relative;
    margin: 10px auto;
    top:47%;
}

.double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #3c8dbc;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-bounce 1.5s infinite ease-in-out;
    animation: sk-bounce 1.5s infinite ease-in-out;
}

.double-bounce2 {
    -webkit-animation-delay: -0.75s;
    animation-delay: -0.75s;
}

@-webkit-keyframes sk-bounce {
    0%, 100% {
        -webkit-transform: scale(0.0)
    }
    50% {
        -webkit-transform: scale(1.0)
    }
}

@keyframes sk-bounce {
    0%, 100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    }
    50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
</style>

<template>
<div class="spinner" v-el:spinner v-if="visible">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
</div>
</template>

<script>
export default {
  name: 'spinner',
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>