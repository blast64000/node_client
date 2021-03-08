var fs = require("fs")
var https = require("https");

var options = {

    hostname: 'www.apis.worksmobile.com',
    port: '443',
    method: 'GET',
    path: '/r/kr1unqNPDxwAo/message/v1/bot',

    headers: {
        'Content-Type': 'application/json',
        consumerKey: 'BHOjH7zxMnPPqXwycpf8',
        Authorization: 'Bearer AAABAoyo/3zFAMqau9uS6fIR0pPRf2z8FkHbsXa930xScg8gYjguZ81L0S8AszS7flys2lIznE4VfF8UZjFLDjhUHdNkwgYtdHPGpp3PaXc7iyHUtpkZFs9Y3wzS6zhML6zQKNu//940sNw9VqjFkKuulbAoTAF9xsJ7PA0r6OrhaxTzp/cWzEKFTmn81+MBpBvBPPL9N+EcbL+YyQiny+2gV1fHdRQRA2fVO9tiwLkHuLLPVEnpp6BJBfDGKIGy1GUIYiHA0xuEIBMl5vYoVwedo25HpnUhnWIro+GBm1Jhqn3sA6whkep7xsWFxD944TZ7IwiM6i3ipTXVfYppnUwdDINHFBDcTtX/11ienn8E/LRU'
    },
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
    });
}
var req = https.request(options, readJSONResponse);
//req.write('{"name":"Bilbo", "occupation":"Burgler"}');
req.end();