import clients from '../api/clients'
import features from '../api/features'
import user from '../api/user'
import * as types from './mutation-types'

/**
 * Helper function
 */
function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}

/**
 * Clients
 * ----------------------------------------------------------------------------
 */
export const createClient = (store, data) => {
  store.dispatch(types.CREATE_CLIENT)
  return clients.createClient(
    data,
    () => store.dispatch(types.CREATE_CLIENT_SUCCESS),
    () => store.dispatch(types.CREATE_CLIENT_FAILURE)
  ).then(() => {
    // Fetch an updated client list
    getAllClients(store)
  })
}

export const updateClient = (store, data) => {
  store.dispatch(types.UPDATE_CLIENT)
  return clients.updateClient(
    data,
    () => store.dispatch(types.UPDATE_CLIENT_SUCCESS),
    () => store.dispatch(types.UPDATE_CLIENT_FAILURE)
  ).then(() => {
    // Fetch an updated client list
    getAllClients(store)
  })
}

export const setClient = ({ dispatch }, id) => {
  return Promise.resolve(dispatch(types.SET_CLIENT, id))
  /* return clients.getClient(id, {include: 'features'}, client => {
    dispatch(types.SET_CLIENT, client)
  })*/
}

export const getAllClients = ({ dispatch }) => {
  return clients.getClients(clients => {
    dispatch(types.SET_CLIENTS, clients)
  })
}

/**
 * Features
 * ----------------------------------------------------------------------------
 */
export const createFeature = (store, data) => {
  store.dispatch(types.CREATE_FEATURE)
  return features.createFeature(
    data,
    () => store.dispatch(types.CREATE_FEATURE_SUCCESS),
    () => store.dispatch(types.CREATE_FEATURE_FAILURE)
  ).then(() => {
    // Fetch an updated feature list
    getAllFeatures(store)
  })
}

export const setFeature = ({ dispatch }, id) => {
  return Promise.resolve(dispatch(types.SET_FEATURE, id))
}

export const getAllFeatures = ({ dispatch }) => {
  return features.getFeatures(features => {
    dispatch(types.SET_FEATURES, features)
  })
}

/**
 * Users
 * ----------------------------------------------------------------------------
 */
export const getMe = ({ dispatch }) => {
  return user.getMe(user => {
    dispatch(types.SET_USER, user)
  })
}

/**
 * Loading Bar
 * ----------------------------------------------------------------------------
 */
export const loadingSet = ({ dispatch }, progress) => {
  dispatch('LOADING_SET', progress)
}
export const loadingError = makeAction(types.LOADING_ERROR)
