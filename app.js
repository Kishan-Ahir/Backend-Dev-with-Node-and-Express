const http = require("http");

const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("inside middlware");
    next();
})

app.use((req,res,next)=>{
    console.log("inside another middlware.")
})



app.listen(4000);