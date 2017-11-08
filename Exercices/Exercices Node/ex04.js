var fs = require("fs");

//synchronized

var content = fs.readFileSync(process.argv[2]);

console.log(content.toString().split(/\r\n|\r|\n/).length);

// asynchronized

fs.readFile(process.argv[2], function (err, content){
	console.log(content.toString().split(/\r\n|\r|\n/).length);
});
