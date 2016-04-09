export const currentClient = state => {
  /**
   * Search all clients for the id of our current client, then return it
   */
  return state.clients.all.find(client => client.id === state.clients.current)
}
