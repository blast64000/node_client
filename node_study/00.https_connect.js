var fs = require("fs")
var https = require("https");

var options = {
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey1.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert1.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain1.pem')
};

https.createServer(options, function(req, res) {
    var jsonData = "";
    req.on('data', function(chunk) {
        console.log(chunk)
        jsonData += chunk;
    });

    req.on('end', function() {
        var reqObj = JSON.parse(jsonData);
        var resObj = {
            message: "Hello" + reqObj.name,
            question: "Are you a good" + reqObj.occupation + "?"
        };
        res.writeHead(200);
        res.end(JSON.stringify(resObj));
    });
}).listen(443);