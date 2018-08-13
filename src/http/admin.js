import * as http from './base'

const login = (credentials) => {
  return http.post('/tokens', credentials)
}

export { login }
