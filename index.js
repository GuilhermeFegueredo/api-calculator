const Hapi = require('hapi');

const port = 8081;

const server = new Hapi.Server();

const init = async () => {
await server.start();
    console.log("Server up no porto: " + port);
}

require('./routes')(server);

init();