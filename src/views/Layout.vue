<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <sidebar/>
      </el-aside>
      <el-container>
        <el-header>Cabecera</el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>Pie de página</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Layout',
  components: {
    Sidebar
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
