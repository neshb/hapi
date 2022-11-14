import Hapi from 'hapi'

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

  await server.initialize()

  return { server }
}