import Vue from 'vue'
import Login from '@/views/Login'

describe('Login.vue', () => {
  it('Admin is not log in', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Sign in')
  })
})
