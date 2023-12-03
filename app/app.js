import path from 'node:path'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'

const fastify = Fastify({
  logger : true,
})

fastify.register(fastifyStatic, {
  root : new URL('../public/', import.meta.url).pathname,
})

fastify.get('/:section',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    return reply.sendFile('index.html')
  })

fastify.get('/:section/:project',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    return reply.sendFile('index.html')
  })

fastify.get('/static/:filename',
  /**
   * @param request
   * @param {FastifyReply} reply
   * @return {Promise<*>}
   */
  async (request, reply) => {
    const filename = path.join('/static/', request.params.filename)
    return reply.sendFile(filename)
  })

fastify.listen({ port : 1473 }, (err, address) => {
  if(err) {
    throw err
  }
  console.log(`Server is now listening on ${ address }`)
})
