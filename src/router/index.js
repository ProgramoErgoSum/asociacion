import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/Login'], resolve),
      beforeEnter: (to, from, next) => {
        if (store.state.user.authenticated) {
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
      component: resolve => require(['@/views/Logout'], resolve)
    },
    {
      path: '/',
      component: resolve => require(['@/views/Layout'], resolve),
      children: [
        {
          path: '/',
          redirect: '/dashboard'
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: resolve => require(['@/views/Dashboard'], resolve)
        },
        {
          path: '/partners',
          name: 'partners',
          component: resolve => require(['@/views/Partners/List'], resolve)
        },
        {
          path: '/partners/:idPartner',
          name: 'partners-view',
          component: resolve => require(['@/views/Partners/View'], resolve)
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!store.state.user.authenticated && !to.meta.isPublic) {
    next('/login')
  } else {
    next()
  }
})

export default router
