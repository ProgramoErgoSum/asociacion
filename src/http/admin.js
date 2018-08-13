import * as http from './base'

/**
 * @param {object} credentials
 */
const postTokens = (credentials) => {
  return http.post('/tokens', credentials)
}

export { postTokens }
