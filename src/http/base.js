import axios from 'axios'

// import router from '../router'
import store from '../store'

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:8000/api/v1'

axios.interceptors.request.use(config => {
  if (store.state.user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export { axios, post }
