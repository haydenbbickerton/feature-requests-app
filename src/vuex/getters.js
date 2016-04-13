// import _ from 'lodash'

/**
 * Returns an array containing client objects
 * that contain the ids of their feature requests
 */
/* export const clientsWithFeatures = state => {
  return _.flatMap(_.cloneDeep(state.clients.all), (client) => {
    client['features'] = _.filter(state.features.all, ['client_id', client.id])
    return client
  })
}*/

export const routePathsArray = state => {
  // Get current paths to array, without first one (it's blank)
  let crumbs = state.route.path.split('/')
  crumbs.shift()
  return crumbs
}
