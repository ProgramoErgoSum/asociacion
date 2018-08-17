<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <div class="navbar-brand">Asociación</div>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="ml-auto">
        <AppHeaderDropdown right no-caret>
          <template slot="header">
            <img src="../../assets/logo.jpg" class="img-avatar"/>
          </template>\
          <template slot="dropdown">
            <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
            <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>
          </template>
        </AppHeaderDropdown>
      </b-navbar-nav>
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
          <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <TheFooter>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://github.com/ProgramoErgoSum">ProgramoErgoSum</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, HeaderDropdown as AppHeaderDropdown, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter } from '@coreui/vue'
import Breadcrumb from './components/Breadcrumb.vue'
export default {
  name: 'Layout',
  components: {
    AsideToggler,
    AppHeader,
    AppHeaderDropdown,
    AppSidebar,
    AppAside,
    TheFooter,
    // Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,

    Breadcrumb
  },
  data () {
    return {
      nav: [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'fa fa-tachometer'
        },
        {
          name: 'Socios',
          url: '/partners',
          icon: 'fa fa-users'
        }
      ]
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.title)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
