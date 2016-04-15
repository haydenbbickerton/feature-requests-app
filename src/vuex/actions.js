/**
 * NOTE: This part is still pretty messy. Don't pay attention to it :)
 */
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
  store.dispatch(types.LOADING_SET, 25)
  store.dispatch(types.CREATE_CLIENT)
  return clients.createClient(
    data,
    () => {
      store.dispatch(types.LOADING_SET, 75)
      store.dispatch(types.CREATE_CLIENT_SUCCESS)
      // Fetch updated features/clients list
      getAllFeatures(store)
      getAllClients(store)
      store.dispatch(types.LOADING_SET, 100)
    },
    () => {
      store.dispatch(types.CREATE_CLIENT_FAILURE)
      store.dispatch(types.LOADING_ERROR)
    }
  )
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
  store.dispatch(types.LOADING_SET, 25)
  store.dispatch(types.CREATE_FEATURE)
  return features.createFeature(
    data,
    () => {
      store.dispatch(types.LOADING_SET, 75)
      store.dispatch(types.CREATE_FEATURE_SUCCESS)
      // Fetch updated features/clients list
      getAllFeatures(store)
      getAllClients(store)
      store.dispatch(types.LOADING_SET, 100)
    },
    () => {
      store.dispatch(types.CREATE_FEATURE_FAILURE)
      store.dispatch(types.LOADING_ERROR)
    }
  )
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
export const loadingSet = makeAction(types.LOADING_SET)
export const loadingError = makeAction(types.LOADING_ERROR)
