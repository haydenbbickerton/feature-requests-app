<style scoped>
#preloader {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 99999;
    width: 100%;
    height: 100%;
    overflow: visible;
    background: #ecf0f5;
}
</style>

<template>
<div id="preloader">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'preloader'
}
</script>