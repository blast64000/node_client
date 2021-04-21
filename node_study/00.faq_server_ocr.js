var fs = require("fs")
var https = require("https");
var url_link = '';
const request = require('../testapp/node_modules/request');

const options = {
    url: 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/2112659/persistentmenu',
    push_url: 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/2112659/message/push',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        consumerKey: 'BHOjH7zxMnPPqXwycpf8',
        Authorization: 'Bearer AAABB5y5YRGNHB8mRM8MzF2pfzpYLBDEMuTVmTt8NaHk8QYWtaKE3EsDtl/awNK+a2o6A/WTKrAIaSAUkn7MSzEGMAEXy2LCFxHCCKiAlYp/B+JeHD/jQEKSgEHYo2NrZiCXr3mvnHC7IDmUtZB3CWd6Rwwm5BKgadtnJih5u1f/ISjdsPCqrulVEgnqpflDiUlS3upaz3AjGtQOoRYjY0+TWD078vWpJoONPiH68I/Z6LdEOq2X89NYtO8nav0Kq3xjIC3fHFqnskA8nd+Qq3PdcX044ANG5cnKwknYDBigwKHC8cl8vn2Ptk2jqtt8sCOOiHzw1F+zvC1I/2qzc1dS2FuDsxQ8UpsEraV9+k1olRLq'
    },
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey1.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert1.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain1.pem')
};

function onRequest(req, res) {
    /* request part*/
    const { headers, method, url } = req;
    let body = [];

    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        console.log('req received.');
        body = Buffer.concat(body).toString();
        console.log('========= headers ========.');
        console.log(headers)
        console.log('========= moethod ========.');
        console.log(method)
        console.log('========= url ========.');
        console.log(url)
        console.log('========= body ========.');
        console.log(body)

        if (headers['user-agent'] === 'security') {
            var parsedBody = JSON.parse(body);
            url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/2112659/message/push';
            console.log()
            var reqBody = {
                accountId: parsedBody.source.accountId,
                content: {
                    type: parsedBody.content.type,
                    text: parsedBody.content.text,
                    postback: parsedBody.content.postback
                },
            }
            if (reqBody.content.text === '시작하기') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    postback: "",
                    content: {
                        type: 'button_template',
                        contentText: '안녕하세요 웅디입니다. 서비스를 제공하기 전, 몇가지 정보를 확인하도록 하겠습니다. \n성별이 어떻게 되시나요?',
                        actions: [{
                            "type": "message",
                            "label": "남자",
                            "postback": "성별00"
                        }, {
                            "type": "message",
                            "label": "여자",
                            "postback": "성별01"
                        }]
                    }
                }
            } else if (reqBody.content.text === '안녕?') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    postback: "",
                    content: {
                        type: 'button_template',
                        contentText: '안녕하세요 웅디입니다. 서비스를 제공하기 전, 몇가지 정보를 확인하도록 하겠습니다. \n성별이 어떻게 되시나요?',
                        actions: [{
                            "type": "message",
                            "label": "남자",
                            "postback": "성별00"
                        }, {
                            "type": "message",
                            "label": "여자",
                            "postback": "성별01"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '성별00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '대웅의 경력채용 기준은 [주니어경력]은 1년 이상, [경력]은 3년 이상입니다. * 유관경력기준 ',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용01"
                        }]
                    }
                }
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
https.createServer(options, onRequest).listen(443);
console.log('server has started.');