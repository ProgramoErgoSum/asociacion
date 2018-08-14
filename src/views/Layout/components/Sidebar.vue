<template>
  <div class="Sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <router-link to="/dashboard">
        <el-menu-item index="1" >
          <i class="el-icon-menu"></i>
          <span slot="title">Dashboard</span>
        </el-menu-item>
      </router-link>
      <router-link to="/partners">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Partners</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse () {
      return !this.sidebar
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
