import * as Server from './server.js'


// Catch unhandled unexpected exceptions
process.on('uncaughtException', (error) => {
    console.error(`uncaughtException ${error.message}`);
    process.exit(1);
});

// Catch unhandled rejected promises
process.on('unhandledRejection', (reason) => {
    console.error(`unhandledRejection ${reason}`);
    process.exit(1);
});


const start = async () => {
    try {
        const { server } = await Server.init();

        // starting the server
        await server.start();
        console.log('server running at : ', server.info.uri)
    }
    catch (err) {
        console.error('Error starting server: ', err);
        throw err;
    }
}

start();