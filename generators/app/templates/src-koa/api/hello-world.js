const Router = require('@koa/router')
const hello_world_data = require('../assets/hello_world_data.json')

const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = hello_world_data
})

module.exports = router
