const http = require('http'); // If is a local folder use ./ or /
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(8080, "localhost")