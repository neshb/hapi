const Hapi = require('hapi')

const init = async () => {
  
  // hapi js server initialization
  const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0'
  })

  await server.start()
  console.log('server is running on port : ', server.info.uri)
}

init();