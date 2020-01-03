import axios from 'axios'

function axios_factory (options) {
  let baseURL = ''

  if (process.server) {
    baseURL = process.env.APP_BASE_URL
  }
  options = Object.assign({
    baseURL
  }, options)

  return axios.create(options)
}

export default axios_factory
