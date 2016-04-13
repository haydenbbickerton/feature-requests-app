/**
 * Modifies our Client data a bit after
 * it comes back from the API.
 */

function handleData (data) {
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
