const http = require("http");

const bodyparser = require("body-parser");

const express = require("express");

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use("/add-product",(req,res,next)=>{
    res.send("<form action='/product_added' method='POST'><input type='text' name='product' ><input type='text' name='size'><button type='submit'>Add Product</button></form>");
})

app.post("/product_added",(req,res,next)=>{
    console.log(req.body.product);
    console.log(req.body.size);
    res.redirect('/');
})

app.use("/",(req,res,next)=>{
    res.send("<html><head><title>SUCCESS</title></head><body><h1>YOUR FORM SUBMITTED SUCCESFULLY.</h1></body></html>");
})

app.listen(4000);