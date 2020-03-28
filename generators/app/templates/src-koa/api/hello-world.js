import Router from '@koa/router'
import hello_world_data from '../assets/hello_world_data.json'

const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = hello_world_data
})

export default router
