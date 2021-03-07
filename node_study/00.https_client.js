var fs = require("fs")
var https = require("https");

var options = {
    host: '127.0.0.1',
    path: '/',
    port: '8080',
    method: 'POST',
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey1.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert1.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain1.pem')
};


function readJSONResponse(response) {
    var responseData = '';
    response.on('data', function(chunk) {
        responseData += chunk;
    });
    response.on('end', function() {
        var dataObj = JSON.parse(responseData);
        console.log("Raw Response: " + responseData);
        console.log("Message: " + dataObj.message);
        console.log("Question: " + dataObj.question);
    });
}
var req = https.request(options, readJSONResponse);
req.write('{"name":"Bilbo", "occupation":"Burgler"}');
req.end();