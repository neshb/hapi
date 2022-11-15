import Hapi from '@hapi/hapi'

import UserRouter from './user/router.js'
import userHandler from './user/handler.js'


export const init = async () => {
  
  // hapi js server initialization
  const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0'
  })

  // user handler
  const userHandlerObj = userHandler();
  // user routers
  UserRouter(server, userHandlerObj)

  server.ext('onRequest', (request, h) => {
    console.log('request', request.payload)
    return h.continue
  })

  await server.initialize()

  return { server }
}