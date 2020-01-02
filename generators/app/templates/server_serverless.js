const serverless = require('serverless-http')
const { Nuxt } = require('nuxt-start')
const create_app = require('./dist/create_app.bundle.js')

const APP_STAGE = process.env.APP_STAGE || 'dev'

let nuxtConfig = {}
if (APP_STAGE === 'prod') {
  nuxtConfig = require('./nuxt.config.prod.js')
} else if (APP_STAGE === 'staging') {
  nuxtConfig = require('./nuxt.config.staging.js')
} else {
  nuxtConfig = require('./nuxt.config.js')
}

const nuxt = new Nuxt(nuxtConfig)

const app = create_app(nuxt)

// https://github.com/dougmoscrop/serverless-http
module.exports.handler = serverless(app)
