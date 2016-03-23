import Cookies from 'js-cookie'

/**
 * Handles our jwt authentication
 */

export function interceptor (options) {
  return {
    request: function (request) {
      // console.log(request)

      let token = Cookies.get('jwt-auth').replace(/\+/g, ' ')
      let headers = request.headers || (request.headers = {})

      if (token !== null && token !== 'undefined') {
        headers.authorization = token
      }

      return request
    },
    response: function (response) {
      // JWT isn't valid; remove cookie and redirect
      let invalidStatuses = [400, 401]
      if (response.status && (invalidStatuses.indexOf(response.status) > 0)) {
        Cookies.remove('jwt-auth')
        window.location.replace('http://' + options.base_domain)
      }

      return response
    }
  }
}

export default interceptor
