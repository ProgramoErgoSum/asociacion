export const ADMIN_LOGIN = 'ADMIN_LOGIN'
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT'

const user = {
  state: {
    token: localStorage.getItem('token') || '',
    authenticated: localStorage.getItem('token') !== ''
  },
  getters: {

  },
  mutations: {
    [ADMIN_LOGIN]: function (state, response) {
      state.authenticated = true
      state.token = response.token
      localStorage.setItem('authenticated', true)
      localStorage.setItem('token', response.token)
    },
    [ADMIN_LOGOUT]: function (state) {
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
