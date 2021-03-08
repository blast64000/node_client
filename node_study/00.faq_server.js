var fs = require("fs")
var https = require("https");
var url_link = '';
const request = require('../testapp/node_modules/request');

const options = {
    url: 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/persistentmenu',
    push_url: 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        consumerKey: 'BHOjH7zxMnPPqXwycpf8',
        Authorization: 'Bearer AAABAoyo/3zFAMqau9uS6fIR0pPRf2z8FkHbsXa930xScg8gYjguZ81L0S8AszS7flys2lIznE4VfF8UZjFLDjhUHdNkwgYtdHPGpp3PaXc7iyHUtpkZFs9Y3wzS6zhML6zQKNu//940sNw9VqjFkKuulbAoTAF9xsJ7PA0r6OrhaxTzp/cWzEKFTmn81+MBpBvBPPL9N+EcbL+YyQiny+2gV1fHdRQRA2fVO9tiwLkHuLLPVEnpp6BJBfDGKIGy1GUIYiHA0xuEIBMl5vYoVwedo25HpnUhnWIro+GBm1Jhqn3sA6whkep7xsWFxD944TZ7IwiM6i3ipTXVfYppnUwdDINHFBDcTtX/11ienn8E/LRU'
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

            console.log()

            var reqBody = {
                accountId: parsedBody.source.accountId,
                content: {
                    type: parsedBody.content.type,
                    text: parsedBody.content.text,
                    postback: parsedBody.content.postback
                },

            }
            

            if (reqBody.content.text==='시작00'){
                reqBody.content.text = '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다.';
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';
            }
            else if (reqBody.content.text==='시작01'){
                reqBody.content.text = '아래메뉴에서 필요한 항목을 선택해주세요';
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';

            }
            else if (reqBody.content.text==='시작02'){
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push'
                
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    postback:"",
                    content: {
                        type: 'button_template',
                        contentText: 'what do you want?',
                        actions: [{
                            "type": "message",
                            "label": "인사/휴가",
                            "postback": "인사"
                          }, {
                            "type": "message",
                            "label": "복지/업무지원",
                            "postback": "복지00"
                          }, {
                            "type": "message",
                            "label": "보안",
                            "postback": "보안"
                          }
                        ]
                    }
                }
            }
            else if (reqBody.content.postback==='복지00'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: 'what do you want?',
                        actions: [{
                            "type": "message",
                            "label": "학자금지원",
                            "postback": "복지01"
                          }, {
                            "type": "message",
                            "label": "경조사",
                            "postback": "복지00"
                          }, {
                            "type": "message",
                            "label": "생일축하",
                            "postback": "보안"
                          }, {
                            "type": "message",
                            "label": "사내 동호회",
                            "postback": "보안"
                          }, {
                            "type": "message",
                            "label": "장기 리프레시",
                            "postback": "보안"
                          }
                        ]
                    }
                }
            }
            else if (reqBody.content.postback==='복지01'){
                reqBody.content.text = '학자금 지원은 직원 및 자녀의 학자금을 지원하며 발생 연도내 지원이 원칙입니다';
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';
            }


            request({
                method: 'post',
                url: url_link,
                json: reqBody,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    consumerKey: 'BHOjH7zxMnPPqXwycpf8',
                    Authorization: 'Bearer AAABAoyo/3zFAMqau9uS6fIR0pPRf2z8FkHbsXa930xScg8gYjguZ81L0S8AszS7flys2lIznE4VfF8UZjFLDjhUHdNkwgYtdHPGpp3PaXc7iyHUtpkZFs9Y3wzS6zhML6zQKNu//940sNw9VqjFkKuulbAoTAF9xsJ7PA0r6OrhaxTzp/cWzEKFTmn81+MBpBvBPPL9N+EcbL+YyQiny+2gV1fHdRQRA2fVO9tiwLkHuLLPVEnpp6BJBfDGKIGy1GUIYiHA0xuEIBMl5vYoVwedo25HpnUhnWIro+GBm1Jhqn3sA6whkep7xsWFxD944TZ7IwiM6i3ipTXVfYppnUwdDINHFBDcTtX/11ienn8E/LRU'
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