const Hapi = require('hapi');
const server = new Hapi.Server({port: 7000, host: '127.0.0.1'});

// GET route 
server.route({                                          
    method: 'GET',                                        
    path: '/',                                           
    handler: (request, h) => { 
      return 'Hello World'              
    }
});

server.route({
  method: '*',
  path: '/{path*}',
  handler: (request, h) => 'Not Found Requesting API',
})

server.ext('onPreStart', () => {
  console.log('onPreStart method: Before server started')
})

server.ext('onPostStart', () => {
  console.log('onPostStart method: After server started')
})

server.ext('onRequest', (request, h) => {
  console.log('server info ->', server.info)
  console.log('request url ->',request.url)
  return h.continue
})

server.start((err) => {
    if(err) console.log(err)
    else console.log(`Server running at ${server.info.uri}`)
})