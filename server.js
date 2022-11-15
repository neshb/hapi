import Hapi from '@hapi/hapi'
import * as Inert from '@hapi/inert';
import Path from 'path';

import UserRouter from './user/router.js'
import userHandler from './user/handler.js'

import FileRouter from './files/router.js'


export const init = async () => {
  
  // hapi js server initialization
  const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0',
    routes: {
      files: {
        relativeTo: Path.join(Path.resolve(), 'Public')
      }
    }
  })

  // register hapi plugin
  await server.register([Inert])

  // user handler
  const userHandlerObj = userHandler();
  // user routers
  UserRouter(server, userHandlerObj)

  // file router
  FileRouter(server)

  server.ext('onRequest', (request, h) => {
    console.log('request', request.url.href, request.payload)
    return h.continue
  })

  await server.initialize()

  return { server }
}