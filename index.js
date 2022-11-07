const Hapi = require('hapi');

const host = 'localhost';
const port = 8081;

const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () => {
await server.start();
    console.log("Server up no porto: " + port);
}

require('./routes')(server);

init();