<template>
  <div class="layout">
    <el-container class="main-container">
      <el-aside class="el-aside">
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
.el-aside {
  width: 180px !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background: #333;
}
.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: 180px;
  position: relative;
}
</style>
