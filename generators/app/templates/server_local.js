const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const create_app = require('./dist/create_app.bundle.js')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = true

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const builder = new Builder(nuxt)
  await builder.build()

  const app = create_app(nuxt)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
