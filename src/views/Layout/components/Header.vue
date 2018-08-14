<template>
  <div class="Header">
    <div class="hamburger" v-on:click="toggleSideBar">CLICK</div>

    <breadcrumb class="breadcrumb-container"></breadcrumb>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Header',
  components: {
    Breadcrumb
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.Header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
</style>
