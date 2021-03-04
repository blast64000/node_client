var http = require('http');


http.createServer(function(req, res) {

    res.writeHead(200, { 'content-type': 'text/plain' });

    res.end("hello world!\n");

}).listen(3000);

console.log('Server running on 3000');