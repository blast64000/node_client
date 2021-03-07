var fs = require("fs")
var https = require("https");

var options = {
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey1.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert1.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain1.pem')
};

function onRequest(request, response) {
    console.log('request received.');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello World');
    response.end();
}

https.createServer(options, onRequest).listen(443);

console.log('server has started.');