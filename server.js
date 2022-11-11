import Hapi from 'hapi'

export const init = async () => {
  
  // hapi js server initialization
  const server = Hapi.server({
    port: 8000,
    host: '0.0.0.0'
  })

  await server.initialize()

  return { server }
}