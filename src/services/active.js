import axios from 'axios'
import Apis from './Apis'

export function getHuoBiMarket () {
  return axios.get(Apis.huoBiMarket)
    .then(function (response) {
      const status = response && response.status
      if (status === 200) {
        const { data } = response.data
        return data
      }
      return Promise.reject(response)
    })
}

export function getOKExMarket () {
  return axios.get(Apis.OKExMarket)
    .then(function (response) {
      const status = response && response.status
      if (status === 200) {
        return response.data
      }
      return Promise.reject(response)
    })
}

export function getHuoBiSymbols () {
  return axios.get(Apis.huoBiSymbols)
    .then(function (response) {
      const status = response && response.status
      if (status === 200) {
        const { data } = response.data
        return data
      }
      return Promise.reject(response)
    })
}

export function getOKExSymbols () {
  return axios.get(Apis.OKExSymbols)
    .then(function (response) {
      const status = response && response.status
      if (status === 200) {
        return response.data
      }
      return Promise.reject(response)
    })
}
