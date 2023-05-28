const http = require('http');
const fs = require("fs");

const server = http.createServer((req,res)=>{
    if(req.url === "/")
    {
        res.write("<html>");
        res.write("<head><title>Enter a Message</title></head>");
        res.write("<body>");
        res.write("<form method='POST' action='/msg'><input type='text' id='msg' name='message'><button id='submit'>SUBMIT</button>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    else if(req.url === "/msg" && req.method === "POST")
    {
        const body = [];
        
        req.on("data",(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        return req.on("end",()=>{
            let parsedBody = Buffer.concat(body).toString();
            let message = parsedBody.split("=")[1];
            fs.writeFile("Message.txt",message,()=>{
                console.log(parsedBody)
                res.statusCode=302;
                res.write("<html>");
                res.write("<head><title>Enter a Message</title></head>");
                res.write("<body>");
                res.write(`<h3>${message}</h3>`)
                res.write("<form method='POST' action='/msg'><input type='text' id='msg' name='message'><button id='submit'>SUBMIT</button>");
                res.write("</body>");
                res.write("</html>");
                return res.end();
            });
        })       
    }
        res.write("<html>");
        res.write("<head><title>Enter a Message</title></head>");
        res.write("<body>");
        res.write("<h1>Your msg is sent succesfully.</h1>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
}) 

server.listen(4000);