import clients from '../api/clients'
import user from '../api/user'
import * as types from './mutation-types'

export const setClient = ({ dispatch }, id) => {
  dispatch(types.SET_CLIENT, id)
}

export const getAllClients = ({ dispatch }) => {
  clients.getClients(clients => {
    dispatch(types.SET_CLIENTS, clients)
  })
}

export const getMe = ({ dispatch }) => {
  user.getMe(user => {
    dispatch(types.SET_USER, user)
  })
}
