var netconfig = require("./option.js");

var https = require("https");
var request = require("../testapp/node_modules/request");

function onRequest(req, res) {
    /* request part*/
    const { headers, method, url } = req;
    let body = [];

    req.on('error', (err) => {
        console.error(err);

    }).on('data', (chunk) => {
        body.push(chunk);

    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body)
            // inside condition
        if (headers['user-agent'] === 'security') {
            var parsedBody = JSON.parse(body);

            var reqBody = {
                accountId: parsedBody.source.accountId,
                content: {
                    type: parsedBody.content.type,
                    text: parsedBody.content.text,
                    postback: parsedBody.content.postback
                },

            }

            request({
                method: 'post',
                url: url_link,
                json: reqBody,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    consumerKey: 'BHOjH7zxMnPPqXwycpf8',
                    Authorization: 'Bearer AAABB5y5YRGNHB8mRM8MzF2pfzpYLBDEMuTVmTt8NaHk8QYWtaKE3EsDtl/awNK+a2o6A/WTKrAIaSAUkn7MSzEGMAEXy2LCFxHCCKiAlYp/B+JeHD/jQEKSgEHYo2NrZiCXr3mvnHC7IDmUtZB3CWd6Rwwm5BKgadtnJih5u1f/ISjdsPCqrulVEgnqpflDiUlS3upaz3AjGtQOoRYjY0+TWD078vWpJoONPiH68I/Z6LdEOq2X89NYtO8nav0Kq3xjIC3fHFqnskA8nd+Qq3PdcX044ANG5cnKwknYDBigwKHC8cl8vn2Ptk2jqtt8sCOOiHzw1F+zvC1I/2qzc1dS2FuDsxQ8UpsEraV9+k1olRLq'
                }
            }, function(err, response, body) {
                if (err) {
                    console.log('========= enter error ========.');
                    console.error(err);
                } else {
                    console.info(body);
                }
            })
        } else {
            console.log("other ip comes in");
        }

    });
}

https.createServer(netconfig.options, onRequest).listen(443);
console.log('server has started.');
console.log(netconfig.options)