var net = require('net');

var port = process.argv[2];

var serveur = net.createServer(function(socket) {
	socket.end(new Date().toString());
}).listen(port);