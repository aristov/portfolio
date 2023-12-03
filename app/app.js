import './env.js'
import path from 'node:path'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'

const VK_API_URL = 'https://api.vk.com'
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
    const url = Object.assign(new URL('method/photos.getAlbums', VK_API_URL), {
      search : new URLSearchParams({
        v : process.env.VK_API_VERSION,
        access_token : process.env.VK_ACCESS_TOKEN,
        owner_id : request.query.owner_id,
        need_covers : String(+true),
        photo_sizes : String(+true),
      }),
    })
    const res = await fetch(url.href)
    const result = await res.json()
    return result.response
  })

app.get('/album.php',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    const url = Object.assign(new URL('method/photos.get', VK_API_URL), {
      search : new URLSearchParams({
        v : process.env.VK_API_VERSION,
        access_token : process.env.VK_ACCESS_TOKEN,
        owner_id : request.query.owner_id,
        album_id : request.query.album_id,
        count : '1000',
      }),
    })
    const res = await fetch(url.href)
    const result = await res.json()
    return result.response
  })

app.get('/blog.php',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    const url = Object.assign(new URL('method/wall.get', VK_API_URL), {
      search : new URLSearchParams({
        v : process.env.VK_API_VERSION,
        access_token : process.env.VK_ACCESS_TOKEN,
        owner_id : request.query.owner_id,
        count : '5',
        offset : request.query.offset || '0',
      }),
    })
    const res = await fetch(url.href)
    const result = await res.json()
    return result.response
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
