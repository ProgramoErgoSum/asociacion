import * as http from './base'

/**
 * @param {object} params
 */
const getPartners = (params) => {
  return http.fetch('/partners', params)
}

/**
 * @param {idPartner} idPartner
 */
const getPartnersId = (idPartner) => {
  return http.fetch('/partners/' + idPartner, {})
}

export { getPartners, getPartnersId }
