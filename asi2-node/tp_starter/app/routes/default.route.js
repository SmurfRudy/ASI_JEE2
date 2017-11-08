'use strict';

var express = require("express");
var router = express.Router();

router.route("/")
.get(function(request, response){response.send("It works ! [GET]")})
.post(function(request, response){response.send("It works ! [POST]")})
.put(function(request, response){response.send("It works ! [PUT]")})
.delete(function(request, response){response.send("It works ! [DELETE]")})
.all(function(request, response){response.send("It works ! [ALL]")})

module.exports = router;