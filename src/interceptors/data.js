/**
 * Unwraps the api data: { data:{} } response
 */

export function interceptor (options) {
  return {
    request: function (request) {
      return request
    },
    response: function (response) {
      if (response.data.data !== 'undefined') {
        response.data = response.data.data
      }
      return response
    }
  }
}

export default interceptor
