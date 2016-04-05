import _ from 'lodash'
import moment from 'moment'

/**
 * Modifies our Client data a bit after
 * it comes back from the API. It'd probably
 * be cleaner to transform before it left the
 * api, but each client (user) might be in different
 * timezone.
 */

function handleData (data) {
  _.forEach(data, (client) => {
    // Turn the dates in moment instances
    client.created_at = moment(client.created_at.date)
  })
  return data
}

export function interceptor (options) {
  return {
    request (request) {
      return request
    },
    response (response) {
      if (response.request.url === 'clients') {
        response.data = handleData(response.data)
      }
      return response
    }
  }
}

export default interceptor
