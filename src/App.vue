<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~@coreui/coreui/scss/coreui";

@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue/dist/bootstrap-vue.css';

$fa-font-path: '~font-awesome/fonts/';
@import 'font-awesome/scss/font-awesome.scss';
</style>
