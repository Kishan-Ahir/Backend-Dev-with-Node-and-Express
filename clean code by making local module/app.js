const http = require('http');

const local_module = require('./local module');


const server = http.createServer(local_module);

server.listen(4000);
