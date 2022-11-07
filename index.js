const Hapi = require('hapi');

const port = 8081;

const server = Hapi.Server({
    port: port
});

const init = async () => {
await server.start();
    console.log("Server up no porto: " + port);
}

require('./routes')(server);

init();