const nuxtConfig = require('./nuxt.config.js')
const appConfig = require('./app.config.json')

nuxtConfig.dev = false

/*
 * Inject configured environment variables into the Nuxt universal app
 * Note: These are bundled and sent to the client browser
 * and should NOT contain any secrets
 */
nuxtConfig.env = nuxtConfig.env || {}
Object.assign(nuxtConfig.env, {
  ...appConfig.prod_env
})

module.exports = nuxtConfig
