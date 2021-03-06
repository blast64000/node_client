

var fs = require("fs")
var https = require("https");

var options = {
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey1.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert1.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain1.pem')
};

https.createServer(options, function(req, res){
    res.writeHead(200);
    res.end("hello secure world\n");

}).listen(443);
