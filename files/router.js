

export default function (server) {
    server.route({
        method: 'GET',
        path: '/file/home',
        options: {
            handler: async (request, h) => {
                // returning the hello.html file
                return h.file('hello.html')
            },
            description: 'serving static file',
            notes: 'Home.html file',
        }
    });
    server.route({
        method: '*',
        path: '/{path*}',
        handler: async (request, h) => {
            // returning not found page
            return h.file('notFound.html')
        }
    })
}