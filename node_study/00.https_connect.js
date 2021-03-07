var fs = require("fs")
var https = require("https");

var options = {
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey1.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert1.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain1.pem')
};

function onRequest(request, response) {


    /* request part*/
    console.log('request received.');
    const { headers, method, url } = request;
    let body = [];

    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();  
      console.log(headers)
      console.log(method)
      console.log(url)
      console.log(body)
    
    });




    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello World');
    response.end();
}

https.createServer(options, onRequest).listen(443);

console.log('server has started.');