var fs = require("fs")
var https = require("https");
var url_link = '';
var gender = "무응답"
var user_age = "무응답"
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
            if (reqBody.content.text === '시작하기' || reqBody.content.postback === "시작하기") {
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
            } else if (reqBody.content.postback === '성별00' || reqBody.content.postback === '성별01') {
                if (reqBody.content.postback === '성별00') {
                    gender = '남자'
                } else if (reqBody.content.postback === '성별01') {
                    gender = '여자'
                }
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: ' 연령대를 선택해주세요',

                        actions: [{
                                "type": "message",
                                "label": "성인",
                                "postback": "연령00"
                            }, {
                                "type": "message",
                                "label": "청소년",
                                "postback": "연령01"
                            },
                            {
                                "type": "message",
                                "label": "유아",
                                "postback": "연령02"
                            }
                        ]
                    }
                }
            } else if (reqBody.content.postback === '연령00' || reqBody.content.postback === '연령01' || reqBody.content.postback === '연령02') {

                if (reqBody.content.postback === '연령00') {
                    user_age = '성인'
                } else if (reqBody.content.postback === '연령01') {
                    user_age = '청소년'
                } else if (reqBody.content.postback === '연령02') {
                    user_age = '유아'
                }

                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    postback: "",
                    content: {
                        type: 'button_template',
                        contentText: gender +" " +user_age + '맞으신가요? ',
                        actions: [{
                            "type": "message",
                            "label": "예",
                            "postback": "문진00"
                        }, {
                            "type": "message",
                            "label": "아니오",
                            "postback": "시작하기"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '문진00') {

                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    postback: "",
                    content: {
                        type: 'button_template',
                        contentText: '확인 감사합니다 어디가 불편하세요? ',
                        actions: [{
                            //defined input
                            "type": "message",
                            "label": "가려움",
                            "postback": "증상00"
                        }, {
                            "type": "message",
                            "label": "열",
                            "postback": "증상01"
                        }, {
                            "type": "message",
                            "label": "두통",
                            "postback": "증상02"
                        }, {
                            "type": "message",
                            "label": "피로감",
                            "postback": "증상03"
                        }, {
                            "type": "message",
                            "label": "어지러움",
                            "postback": "증상04"
                        }, {
                            "type": "message",
                            "label": "피부트러블",
                            "postback": "증상05"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '증상00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '증상을 자세히 알려주세요',

                        actions: [{
                                //defined input
                                "type": "message",
                                "label": "피부",
                                "postback": "세부증상00"
                            }, {
                                "type": "message",
                                "label": "목",
                                "postback": "세부증상01"
                            },
                            {
                                "type": "message",
                                "label": "두피",
                                "postback": "세부증상02"
                            },
                            {
                                "type": "message",
                                "label": "눈",
                                "postback": "세부증상03"
                            },
                            {
                                "type": "message",
                                "label": "그외",
                                "postback": "세부증상04"
                            }
                        ]
                    }
                }
            } else if (reqBody.content.postback === '세부증상00') {
                var reqBody = {
                        accountId: parsedBody.source.accountId,
                        content: {
                            type: 'button_template',
                            contentText: '등록하신 약중에 화이투벤 씨플러스(PK_046)은 \n 가려움 증상에 완화에 도움이 됩니다 현재 보유중이신가요?',

                            actions: [{
                                //defined input
                                "type": "message",
                                "label": "예",
                                "postback": "보유여부00"
                            }, {
                                "type": "message",
                                "label": "아니요",
                                "postback": "보유여부01"
                            }]
                        }
                    }
                    //화이투벤의 복용법
            } else if (reqBody.content.postback === '보유여부00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '화이투벤의 주성분 중 클로르페니라민말레산염은 \n고초열, 두드러기, 가려움성 피부질환(습진,피부염, 피부가려움증, 약물발진), 알레르기 비염, 혈관운동성 \n코염, 코감기에 의한 재채기, 콧물, 혈관운동성 부기를 줄여주는데 효과가 있습니다.',
                        actions: [{
                            //defined input
                            "type": "message",
                            "label": "확인 했습니다.",
                            "postback": "효능00"
                        }]
                    }
                }

            } else if (reqBody.content.postback === '보유여부01') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '편의점에서 구할수 있는 약 목록입니다.',

                        actions: [{
                            //defined input
                            "type": "message",
                            "label": "처음으로 돌아가기",
                            "postback": "시작하기"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '효능00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '약 복용시 주의사항입니다. \n 1) 매일 세잔 이상 정기적으로 술을 마시는 사람이 이 약이나 다른 해열진통제를 복용해야 할 경우 반드시 의사 또는 약사와 상의해야 합니다. 이러한 사람이 이 약을 복용하면 간손상이 유발될 수 있습니다.',
                        actions: [{
                            //defined input
                            "type": "message",
                            "label": "확인 했습니다.",
                            "postback": "주의사항01"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '주의사항01') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '2) 아세트아미노펜을 복용한 환자에서 매우 드물게 급성 전신성 발진성 농포증(급성 전신성 발진성 고름물집증)(AGEP), 스티븐스 - 존슨 증후군(SJS), 독성 표피 괴사용해(TEN)와 같은 중대한 피부 반응이 보고되었고, 이러한 중대한 피부반응은 치명적일 수 있습니다. \n 이 약 투여 후 피부발진이나 다른 과민반응의 징후가 나타나면 즉시 복용을 중단하도록 하여야 합니다.',
                        actions: [{
                            //defined input
                            "type": "message",
                            "label": "확인 했습니다.",
                            "postback": "주의사항02"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '주의사항02') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '3) 이 약은 아세트아미노펜을 함유하고 있으며 아세트아미노펜으로 일일 최대 용량(4,000mg)을 초과할 경우 간손상을 일으킬 수 있으므로 이 약을 일일 최대 용량(4000mg)을 초과하여 복용하여서는 아니되며, 아세트아미노펜을 포함하는 다른 제품과 함께 복용하여서는 안됩니다.',
                        actions: [{
                            //defined input
                            "type": "message",
                            "label": "확인 했습니다.",
                            "postback": "주의사항03"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '주의사항03') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '추가로 궁금하신 사항이 있으신가요?',
                        actions: [{
                            //defined input
                            "type": "message",
                            "label": "약의 상세정보",
                            "postback": "보유여부00"
                        }, {
                            //defined input
                            "type": "message",
                            "label": "담당자 연락처",
                            "postback": "담당자00"
                        }, {
                            //defined input
                            "type": "message",
                            "label": "초기 메뉴로 돌아가기",
                            "postback": "문진00"
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