var fs = require("fs")
var https = require("https");

var options = {
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey1.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert1.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain1.pem')
};

function onRequest(request, response) {
    /* request part*/
    const { headers, method, url } = request;
    let body = [];

    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        console.log('request received.');
        body = Buffer.concat(body).toString();
        console.log('========= headers ========.');
        console.log(headers)
        console.log('========= moethod ========.');
        console.log(method)
        console.log('========= url ========.');
        console.log(url)
        console.log('========= body ========.');
        console.log(body)
    });

    /* response part*/
    var responseData = '';
    response.on('data', function(res_chunk) {
        responseData += res_chunk;
    });
    response.on('end', function() {
        var dataObj = JSON.parse(responseData);
        console.log("Raw Response: " + responseData);

        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
        response.end();
        console.log("send_ressponse")
    });
}
https.createServer(options, onRequest).listen(443);
console.log('server has started.');