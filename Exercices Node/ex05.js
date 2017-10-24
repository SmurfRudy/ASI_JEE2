var fs = require("fs");
var path = require("path");

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, data) {
	data.forEach(function(filename) {
		if (path.extname(filename) === '.' + ext) {
			console.log(filename);
		}
	});
});