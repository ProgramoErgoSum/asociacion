<template>
  <div class="layout">
    <el-container>
      <el-aside>
        <Sidebar/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Sidebar,
    Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
