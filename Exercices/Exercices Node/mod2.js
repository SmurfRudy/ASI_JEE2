//module.exports = this;
var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, callback) {
	var listFiles = [];
	
	fs.readdir(dir, function(err, data) {
		
		if (!!err) {
			return cb(err);
		}
		
		for (var i in data) {
			var filename = data[i];
			
			if (path.extname(filename) === '.' + ext) {
				listFiles.push(filename)
			}
		}
		callback(null, listFiles);
	});
	
}

/*this.showDir = function (dir, ext){
	fs.readdir(dir, function(err, data) {
	data.forEach(function(filename) {
		if (path.extname(filename) === '.' + ext) {
			console.log(filename);
		}
	});
});
}*/