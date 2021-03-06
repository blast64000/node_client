var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    fs.readFile('01.hello_w.js', 'utf-8', function(err, data) {
        res.writeHead(200, { 'content-type': 'text/plain' });

        if (err)
            res.write('could not fine or open file for reading');
        else
            res.write(data);
        res.end();
    });

}).listen(80, function() { console.log('bount to port 80'); });
console.log('Server running on 80');