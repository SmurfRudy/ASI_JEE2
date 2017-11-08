'use strict';

var fs = require("fs");
var path = require("path");
var utils = require("../utils/utils.js");
var CONFIG = JSON.parse(process.env.CONFIG);

module.exports = this;

this.loadPres = function(request, response){
	fs.readdir(CONFIG.presentationDirectory, function(err, data) {
		var presentations = {};
		//TODO gestion erreur
		var ctr = 0;
		data.forEach(function(filename, index, array) {
			ctr++;
			if (path.extname(filename) === '.json') {
				var id = filename.split(".pres.json")[0];
				utils.readFileIfExists(utils.getPresentationFilePath(filename), function(err, data){
					if (!!err) {
                    	return reject(err);
                	}

                	var object = JSON.parse(data);
					console.log(id);
					console.log(object);
					presentations[id] = object;
					if (ctr === array.length) {
						response.send(presentations);
					}
				});
			}
		});
	});
};

this.insertPres = function(request, response){
	//TODO
	
};


this.updatePres = function(request, response){
	//TODO
};