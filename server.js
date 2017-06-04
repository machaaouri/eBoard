var http = require('http');
var express = require("express");
var app = express();

var controllers = require('./controllers');


app.set("view engine","vash");

//Map the routes
controllers.init(app);

app.get("/",function(req,res){

    res.render("index",{title : "Expres + Vash"}); 
});

var server = http.createServer(app);

server.listen(3000);