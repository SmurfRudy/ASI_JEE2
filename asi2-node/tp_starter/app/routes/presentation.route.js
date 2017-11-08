'use strict';
var express = require("express");
var router = express.Router();
var presController = require("../controllers/presentation.controller.js")

router.route("/loadPres")
.get(presController.loadPres)

router.route("/savePres")
.post(presController.insertPres)
.put(presController.updatePres)

module.exports = router;