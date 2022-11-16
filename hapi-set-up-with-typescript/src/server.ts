import Hapi from '@hapi/hapi';
import Path from 'path';



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

    // server initialization
    await server.initialize()
    // returning server to init function
    return { server }
}