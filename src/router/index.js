import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import Layout from '@/views/Layout'
import Dashboard from '@/views/Dashboard'
import PartnersList from '@/views/Partners/List'
import PartnersView from '@/views/Partners/View'
import Error404 from '@/views/Error404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next('/dashboard')
        } else {
          next()
        }
      },
      meta: {
        isPublic: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      beforeEnter: (to, from, next) => {
        delete localStorage.token
        next('/login')
      }
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          redirect: '/dashboard'
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/partners',
          name: 'partners',
          component: PartnersList
        },
        {
          path: '/partners/:id_partner',
          name: 'partners-view',
          component: PartnersView
        }
      ]
    },
    {
      path: '*',
      component: Error404,
      meta: {
        isPublic: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.isPublic) && !localStorage.getItem('token') && to.path !== '/login') {
    next({
      path: '/login', query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
