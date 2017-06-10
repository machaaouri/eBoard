var http = require('http');
var express = require("express");
var session = require('express-session');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var app = express();
var flash = require("connect-flash");

var controllers = require('./controllers');


app.set("view engine","vash");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'somesecrettokenhere' }));
app.use(flash());

//set the public static resources folder

app.use(express.static(__dirname + "/public"));

//Map the routes
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);