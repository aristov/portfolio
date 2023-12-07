import fastify from './app/fastify.js'

void fastify.listen({
  host : process.env.HOST,
  port : +process.env.PORT,
})
