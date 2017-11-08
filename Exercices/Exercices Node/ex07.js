var mod = require("./mod2.js");

var dir = process.argv[2];
var ext = process.argv[3];

//mod.showDir(dir, ext);

mod(dir, ext, function(err, data) {
	if(!!err) {
		console.error(err.message);
		return;
	}
	
	console.dir(data);
});