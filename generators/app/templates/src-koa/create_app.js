import Koa from 'koa'
import { Writable } from 'stream'
import bunyan from 'bunyan'
import api_router from './api/index.js'
import package_config from '../package.json'

/*
 * Log to console
 */
const writable_stream = Writable()
writable_stream._write = (chunk, enc, next) => {
  const buffer = Buffer.from(chunk, enc)
  console.log(buffer.toString('utf8'))
  next()
}

const base_logger = bunyan.createLogger({
  name: package_config.name,
  streams: [
    {
      level: (process.env.NODE_ENV === 'development') ? 'debug' : 'info',
      stream: writable_stream
    }
  ],
  serializers: {
    err: bunyan.stdSerializers.err,
    request: serialize_request
  }
})

function create_app (nuxt) {
  const app = new Koa()

  app.context.base_logger = base_logger

  app.use(async (ctx, next) => {
    const start_time_hr = process.hrtime()
    const logger = base_logger.child({
      request: serialize_request(ctx.request)
    })

    ctx.state.start_time_hr = start_time_hr
    ctx.state.logger = logger

    try {
      await next()
      const elapsed_ms = get_elapsed_ms(start_time_hr)
      logger.info({
        response: serialize_response(ctx.response),
        elapsed_ms
      }, 'COMPLETED')

    } catch (err) {
      // https://github.com/koajs/koa/wiki/Error-Handling
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  })

  app.on('error', (err, ctx) => {
    const logger = ctx.state.logger
    const elapsed_ms = get_elapsed_ms(ctx.state.start_time_hr)
    logger.error({
      err,
      response: serialize_response(ctx.response),
      elapsed_ms
    }, 'COMPLETED ERROR')
  })

  app.use(api_router.routes())
  app.use(api_router.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        if (promise) {
          // nuxt.render passes a rejected promise into callback on error.
          promise.then(resolve).catch(reject)
        }
      })
    })
  })

  return app
}

function serialize_request (request) {
  // https://github.com/koajs/koa/blob/master/docs/api/request.md
  return {
    header: request.header,
    method: request.method,
    url: request.url,
    originalUrl: request.originalUrl,
    origin: request.origin,
    href: request.href,
    path: request.path,
    querystring: request.querystring,
    host: request.host,
    hostname: request.hostname,
    type: request.type,
    charset: request.charset,
    protocol: request.protocol,
    secure: request.secure,
    ip: request.ip,
    ips: request.ips
  }
}

function serialize_response (response) {
  return {
    status: response.status,
    message: response.message,
    length: response.length,
    type: response.type
  }
}

function get_elapsed_ms (start_time_hr) {
  const elapsed_hr = process.hrtime(start_time_hr)
  const elapsed_ms = (elapsed_hr[0] * 1000) + (elapsed_hr[1]/1000000)
  return elapsed_ms.toString()
}

module.exports = create_app
