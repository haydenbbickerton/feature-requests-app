export const currentClient = state => {
  // Search all clients for the id of our current client, then return it
  return state.clients.all.find(client => client.id === state.clients.current)
}

export const routePathsArray = state => {
  // Get current paths to array, without first one (it's blank)
  let crumbs = state.route.path.split('/')
  crumbs.shift()
  return crumbs
}
