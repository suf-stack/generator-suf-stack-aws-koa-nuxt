import Router from '@koa/router'

const router = new Router()

/*
 * DO NOT DELETE this endpoint
 * it is used in the automated health checks for your app
 *
 * Instead, add any services you depend upon, such as database connections
 */

router.get('/', async (ctx, next) => {
  // TODO add in dependencies needed for sanity checks
  // example: open database connections, connect to APIs
  ctx.body = {
    'status': 'OK'
  }
})

export default router
