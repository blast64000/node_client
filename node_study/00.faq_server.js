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
            

            if (reqBody.content.text==='시작하기'){
                reqBody.content.text = '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다.';
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    postback:"",
                    content: {
                        type: 'button_template',
                        contentText: '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다. 아래 메뉴에서 필요한 항목을 선택해주세요',
                        actions: [{
                            "type": "message",
                            "label": "경력채용",
                            "postback": "경력채용"
                          }, {
                            "type": "message",
                            "label": "인턴채용",
                            "postback": "인턴채용"
                          }, {
                            "type": "message",
                            "label": "계약직 및 단기 일용직",
                            "postback": "계약직"
                          }, {
                            "type": "message",
                            "label": "우수인재 Pool 및 사내추천",
                            "postback": "사내추천"
                          }, {
                            "type": "message",
                            "label": "기타",
                            "postback": "기타"
                          }
                        ]
                    }
                }
            }
            else if (reqBody.content.text==='안녕?'){
                reqBody.content.text = '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다.';
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다. 아래 메뉴에서 필요한 항목을 선택해주세요',
                        actions: [{
                            "type": "message",
                            "label": "경력채용",
                            "postback": "경력채용00"
                          }, {
                            "type": "message",
                            "label": "인턴채용",
                            "postback": "인턴채용"
                          }, {
                            "type": "message",
                            "label": "계약직 및 단기 일용직",
                            "postback": "계약직"
                          }, {
                            "type": "message",
                            "label": "우수인재 Pool 및 사내추천",
                            "postback": "사내추천"
                          }, {
                            "type": "message",
                            "label": "기타",
                            "postback": "기타"
                          }
                        ]
                    }
                }
            }
            else if (reqBody.content.text==='시작하기'){
                reqBody.content.text = '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다.';
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다. 아래 메뉴에서 필요한 항목을 선택해주세요',
                        actions: [{
                            "type": "message",
                            "label": "경력채용",
                            "postback": "경력채용00"
                          }, {
                            "type": "message",
                            "label": "인턴채용",
                            "postback": "인턴채용"
                          }, {
                            "type": "message",
                            "label": "계약직 및 단기 일용직",
                            "postback": "계약직"
                          }, {
                            "type": "message",
                            "label": "우수인재 Pool 및 사내추천",
                            "postback": "사내추천"
                          }, {
                            "type": "message",
                            "label": "기타",
                            "postback": "기타"
                          }
                        ]
                    }
                }
            }
            else if (reqBody.content.postback==='경력채용00'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '대웅의 경력채용 기준은 [주니어경력]은 1년 이상, [경력]은 3년 이상입니다. * 유관경력기준 ',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용01"
                          }, {
                            "type": "message",
                            "label": "처음으로 돌아가기",
                            "postback": "시작하기"
                          }
                        ]
                    }
                }
            }
            else if (reqBody.content.postback==='경력채용01'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '증/충원 요청서를 상신하여 결재 받았나요?',
                        actions: [{
                            "type": "message",
                            "label": "네",
                            "postback": "경력채용02y"
                          }, {
                            "type": "message",
                            "label": "아니오",
                            "postback": "경력채용02n"
                          }
                        ]
                    }
                }
            }

            else if (reqBody.content.postback==='경력채용02n'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '증/충원요청서를 상신해주시기 바랍니다. 전체프로세스를 알고싶으시면, 게시판 > 인사공지사항 > “채용”을 검색하시면 운영안을 확인하실수 있습니다.',
                        actions: [{
                            "type": "message",
                            "label": "처음으로 돌아가기",
                            "postback": "시작하기"
                          }
                        ]
                    }
                }
            }

            else if (reqBody.content.postback==='경력채용02y'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '결재완료된 증/충원요청서와 JD를 작성하여 인사팀에 메일을 보내주세요.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용03"
                          }
                        ]
                    }
                }
            }

            else if (reqBody.content.postback==='경력채용03'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '인사팀에서 채용포털과 헤드헌팅을 통해서 공고를 오픈합니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용04"
                          }
                        ]
                    }
                }
            }

            else if (reqBody.content.postback==='경력채용04'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '이후 부터는 인사팀 담당자를 통해서 채용 프로세스를 진행/안내 받으시면 됩니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용05"
                          }
                        ]
                    }
                }
            }

            else if (reqBody.content.postback==='경력채용05'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '추가로 궁금하신 사항이 있으신가요?',
                        actions: [{
                            "type": "message",
                            "label": "채용 전체 프로세스",
                            "postback": "경력채용06"
                          },
                          
                          {
                            "type": "message",
                            "label": "담당자 연락하기",
                            "postback": "담당자"
                          },
                          
                          {
                            "type": "message",
                            "label": "초기 메뉴로 돌아가기",
                            "postback": "시작하기"
                          }
                        ]
                    }
                }
            }

            else if (reqBody.content.postback==='경력채용06'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '전체프로세스는 베어월드 게시판 > 인사공지사항 >  “채용”을 검색하시면 운영안을 확인하실수 있습니다.',
                        actions: [{
                            "type": "message",
                            "label": "이전으로 돌아가기",
                            "postback": "경력채용05"
                          }
                        ]
                    }
                }
            }

            else if (reqBody.content.postback==='담당자'){
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '연락처 류효인(내선 : 8171)',
                        actions: [{
                            "type": "message",
                            "label": "이전으로 돌아가기",
                            "postback": "경력채용05"
                          }
                        ]
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