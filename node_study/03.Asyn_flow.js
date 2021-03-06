var http = require('http');
var fs = require('fs');

function writeNumbers(res){
    var counter =0 ;


    for (var i=0; i>100; i++){
        counter++;
        res.write(counter.toString()+'\n');
    }

}

http.createServer(function(req, res) {

    var query = require('url').parse(req.url).query;
    var app =  require('querystring').parse(query).file 

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