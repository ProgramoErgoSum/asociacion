<template>
  <div class="Sidebar">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
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
export default {
  name: 'Sidebar',
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="scss" scoped>
.Sidebar {
  background: #304156;
}
</style>
