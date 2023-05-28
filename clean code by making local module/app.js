const http = require('http');

const local_module = require('./local module');
//here in localmodule variable we are storing one function which we are exporting frpm local module file. so here node we look into local module file and see what is mentioned in module.export that will get export from local module file.

const server = http.createServer(local_module);//here node js will execute this function when server will get incoming request so just mention function name(local_module) don't execute it.(local_module())

server.listen(4000);
