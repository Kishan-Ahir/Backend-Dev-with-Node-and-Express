const fs = require("fs");


let requesthandler = (req,res) =>{
    if(req.url === "/")
    {
        fs.readFile('Message.txt', 'utf-8', (err, data) => {
            res.write("<html>");
            res.write("<head><title>Enter a Message</title></head>");
            res.write("<body>");
            if(data !== undefined)
            {
                res.write(`<h3>${data}</h3>`);
            }
            res.write("<form method='POST' action='/msg'><input type='text' id='msg' name='message'><button id='submit'>SUBMIT</button>");
            res.write("</body>");
            res.write("</html>");
            res.end();
        });
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
                res.setHeader("Location","/");
                res.end();
            });
        })       
    }
    else {
        res.write("<html>");
        res.write("<head><title>Enter a Message</title></head>");
        res.write("<body>");
        res.write("<h1>Enter correct url.</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
}


module.exports = requesthandler;
//module is object and export is it's property.