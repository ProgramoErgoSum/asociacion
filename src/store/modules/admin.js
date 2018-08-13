export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const user = {
  state: {
    authenticated: localStorage.getItem('authenticated') || false,
    token: localStorage.getItem('token') || ''
  },
  getters: {

  },
  mutations: {
    [LOGIN]: function (state, user) {
      state.authenticated = true
      state.token = user.token
      localStorage.setItem('authenticated', true)
      localStorage.setItem('token', user.token)
    },
    [LOGOUT]: function (state) {
      state.authenticated = false
      state.token = ''
      localStorage.removeItem('authenticated')
      localStorage.removeItem('token')
    }
  },
  actions: {

  }
}

export default user
