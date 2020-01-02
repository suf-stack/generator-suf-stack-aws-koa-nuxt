const Router = require('@koa/router')
const health_check_router = require('./health-check.js')
const hello_world_router = require('./hello-world.js')

const router = new Router({
  prefix: '/api'
})

router.use('/health-check', health_check_router.routes(), health_check_router.allowedMethods())
router.use('/hello-world', hello_world_router.routes(), hello_world_router.allowedMethods())

module.exports = router

