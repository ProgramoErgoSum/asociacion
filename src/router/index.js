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
      component: resolve => require(['@/views/Layout/Layout.vue'], resolve),
      children: [
        {
          path: '/',
          redirect: '/dashboard'
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: resolve => require(['@/views/Dashboard'], resolve),
          meta: {
            title: 'Dashboard',
            icon: ''
          }
        },
        {
          path: '/partners',
          name: 'partners',
          component: resolve => require(['@/views/Partners/Index'], resolve),
          redirect: 'partner-list',
          meta: {
            title: 'Socios',
            icon: ''
          },
          children: [
            {
              path: '',
              name: 'partners-list',
              component: resolve => require(['@/views/Partners/List'], resolve)
            },
            {
              path: 'create',
              name: 'partners-create',
              component: resolve => require(['@/views/Partners/Create'], resolve),
              meta: {
                title: 'Vista',
                icon: ''
              }
            },
            {
              path: ':idPartner/view',
              name: 'partners-view',
              component: resolve => require(['@/views/Partners/View'], resolve),
              meta: {
                title: 'Vista',
                icon: ''
              }
            },
            {
              path: ':idPartner/edit',
              name: 'partners-edit',
              component: resolve => require(['@/views/Partners/Edit'], resolve),
              meta: {
                title: 'Editar',
                icon: ''
              }
            },
            {
              path: ':idPartner/delete',
              name: 'partners-delete',
              component: resolve => require(['@/views/Partners/Delete'], resolve),
              meta: {
                title: 'Borrar',
                icon: ''
              }
            }
          ]
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
