var http = require("http");


function get(addr) {
	http.get(addr, function(response){
		var data = '';
		response.on('data', function(chunk) {
			data += chunk;
		});
		response.on('end', function() {
			console.log(data);
		});
	});
}

get(process.argv[2]);
get(process.argv[3]);
get(process.argv[4]);