export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

const app = {
  state: {
    sidebar: {
      opened: localStorage.getItem('app_sidebar_opened') || true
    }
  },
  getters: {
    sidebar: state => state.sidebar.opened
  },
  mutations: {
    [TOGGLE_SIDEBAR]: function (state, response) {
      state.sidebar.opened = !state.sidebar.opened
      localStorage.setItem('app_sidebar_opened', state.sidebar.opened)
    }
  },
  actions: {
    toggleSideBar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
