'use strict';

var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

var express = require("express");
var app = express();
var defaultRoute = require("./app/routes/default.route.js");
app.use(defaultRoute);
var presentationRoute = require("./app/routes/presentation.route.js");
app.use(presentationRoute);

var path = require("path");
app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var http = require("http");
var server = http.createServer(app);
server.listen(CONFIG.port);