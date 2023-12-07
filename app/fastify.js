import './env.js'
import { constants } from 'node:http2'
import path from 'node:path'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import view from './view.js'
import vk from './vk.js'
import config from './config.js'
import { loadManifest } from './loadManifest.js'

const fastify = Fastify({
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

fastify.register(fastifyStatic, {
  root : new URL('../public/', import.meta.url).pathname,
})

fastify.get('/photos.getAlbums', {
    schema : {
      query : {
        type : 'object',
        required : ['owner_id'],
        properties : {
          owner_id : {
            type : 'integer',
          },
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

fastify.get('/photos.get', {
    schema : {
      query : {
        type : 'object',
        required : ['owner_id', 'album_id'],
        properties : {
          owner_id : {
            type : 'integer',
          },
          album_id : {
            type : 'integer',
          },
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

fastify.get('/wall.get', {
    schema : {
      query : {
        type : 'object',
        required : ['owner_id'],
        properties : {
          owner_id : {
            type : 'integer',
          },
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

fastify.get('/static/:filename',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    const filename = path.join('/static', request.params.filename)
    return reply.sendFile(filename)
  })

fastify.get('/:section/:project?',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    if(request.headers.accept === 'application/json') {
      reply.status(constants.HTTP_STATUS_NOT_FOUND)
      reply.send(new Error('Not found'))
    }
    const result = view({
      params : config,
      manifest : await loadManifest(),
      ymId : process.env.YANDEX_METRIKA_ID,
    })
    reply.type('text/html')
    return result.toString()
  })

export default fastify
