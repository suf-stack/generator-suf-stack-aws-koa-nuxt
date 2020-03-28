import Router from '@koa/router'
import health_check_router from './health-check.js'
import hello_world_router from './hello-world.js'

const router = new Router({
  prefix: '/api'
})

router.use('/health-check', health_check_router.routes(), health_check_router.allowedMethods())
router.use('/hello-world', hello_world_router.routes(), hello_world_router.allowedMethods())

export default router

