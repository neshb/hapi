import Hapi from '@hapi/hapi';
import Path from 'path';

import UserRouter from './user/router';
import userHandler from './user/handler';


export const init = async (config) => {
    // Hapi js server connection
    const server = Hapi.server({
        port: config.PORT,
        host: '0.0.0.0',
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'Public')
            }
        }
    })

    // server onRequest extension 
    server.ext('onRequest', (request, h) => {
        console.log('request', request.url.href, request.payload)
        return h.continue
    })

    // handler set up
    const userHandlerObj = userHandler()
    // router set up
    UserRouter(server, userHandlerObj)

    // Page not found
    server.route({
        method: '*',
        path: '/{any*}',
        handler:async (request, h) => {
            return h.response('Page not found')
        }
    })

    // server initialization
    await server.initialize()
    // returning server to init function
    return { server }
}