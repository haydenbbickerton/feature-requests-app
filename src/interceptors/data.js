/**
 * Unwraps the api data: { data:{} } response
 */

export function interceptor (options) {
  return {
    request (request) {
      return request
    },
    response (response) {
      if (response.data.data !== 'undefined') {
        response.data = response.data.data
      }
      return response
    }
  }
}

export default interceptor
