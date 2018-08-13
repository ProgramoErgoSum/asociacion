import * as http from './base'

/**
 * @param {object} params
 */
const getPartners = (params) => {
  return http.fetch('/partners', params)
}

export { getPartners }
