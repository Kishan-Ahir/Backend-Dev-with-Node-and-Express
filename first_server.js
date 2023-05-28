const http = require('http'); // so basically here we are importing http core module. This will return one object.

let server = http.createServer((req,res)=>{ 
    console.log(req);
})

/*
here we are using createServer method of http object or module. here in this method this will take one function and when we get request from browser this function get executed. and this method is at the end returning server so we need to store it into some variable.
*/

server.listen(3000)
/*
here we are launching our server and making it available for listening incoming request and give response as per mentioned in the function which is inside the createServer method.
*/
