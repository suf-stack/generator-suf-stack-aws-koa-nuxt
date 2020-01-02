const Router = require('@koa/router')

const router = new Router()

router.get('/', async (ctx, next) => {
  // TODO add in dependencies needed for sanity checks
  // example: open database connections, connect to APIs
  ctx.body = {
    'status': 'OK'
  }
})

module.exports = router
