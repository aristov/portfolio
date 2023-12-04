import './env.js'
import path from 'node:path'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import vk from './vk.js'

const app = Fastify({
  logger : true,
})

app.register(fastifyStatic, {
  root : new URL('../public/', import.meta.url).pathname,
})

app.get('/albums.php',
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

app.get('/album.php',
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

app.get('/blog.php',
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

app.get('/:section',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    return reply.sendFile('index.html')
  })

app.get('/:section/:project',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    return reply.sendFile('index.html')
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

app.listen({ port : 1473 }, (err, address) => {
  if(err) {
    throw err
  }
  console.log(`Server is now listening on ${ address }`)
})

export default app
