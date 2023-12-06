import './env.js'
import path from 'node:path'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import view from './view.js'
import vk from './vk.js'
import config from './config.js'
import { loadManifest } from './loadManifest.js'

const app = Fastify({
  logger : process.env.LOGGING_HTTP === 'on' && {
    transport : {
      target : 'pino-pretty',
      options : {
        sync : process.env.NODE_ENV === 'development',
        ignore : 'reqId,req.hostname',
        translateTime : 'SYS:standard',
        minimumLevel : 'trace',
        colorize : true,
        singleLine : true,
      },
    },
  },
})

app.register(fastifyStatic, {
  root : new URL('../public/', import.meta.url).pathname,
})

app.get('/photos.getAlbums', {
    schema : {
      query : {
        owner_id : {
          type : 'integer',
        },
      },
    },
  },
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    return vk.api.photos.getAlbums({
      owner_id : request.query.owner_id,
      need_covers : true,
      photo_sizes : true,
    })
  })

app.get('/photos.get', {
    schema : {
      query : {
        owner_id : {
          type : 'integer',
        },
        album_id : {
          type : 'integer',
        },
      },
    },
  },
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    return vk.api.photos.get({
      owner_id : request.query.owner_id,
      album_id : request.query.album_id,
      count : 1000,
    })
  })

app.get('/wall.get', {
    schema : {
      query : {
        owner_id : {
          type : 'integer',
        },
      },
    },
  },
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    return vk.api.wall.get({
      owner_id : request.query.owner_id,
      count : 5,
      offset : +request.query.offset || 0,
    })
  })

app.get('/:section/:project?',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    const result = view({
      params : config,
      manifest : await loadManifest(),
      ymId : process.env.YANDEX_METRIKA_ID,
    })
    reply.type('text/html')
    return result.toString()
  })

app.get('/static/:filename',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    const filename = path.join('/static', request.params.filename)
    return reply.sendFile(filename)
  })

app.listen({ port : +process.env.PORT }, (err, address) => {
  if(err) {
    throw err
  }
  console.log(`Server is now listening on ${ address }`)
})

export default app
