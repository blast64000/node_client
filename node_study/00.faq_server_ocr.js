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
                reqBody.content.text = '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다.';
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다. 아래 메뉴에서 필요한 항목을 선택해주세요',
                        actions: [{
                            "type": "message",
                            "label": "인사",
                            "postback": "인사00"
                        }, {
                            "type": "message",
                            "label": "복리후생",
                            "postback": "복리후생00"
                        }, {
                            "type": "message",
                            "label": "베어월드",
                            "postback": "베어월드00"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '시작하기') {
                reqBody.content.text = '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다.';
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '안녕하세요 회사생활관련 궁금한 부문을 찾아드리는 문의봇입니다. 아래 메뉴에서 필요한 항목을 선택해주세요',
                        actions: [{
                            "type": "message",
                            "label": "인사",
                            "postback": "인사00"
                        }, {
                            "type": "message",
                            "label": "복리후생",
                            "postback": "복리후생00"
                        }, {
                            "type": "message",
                            "label": "베어월드",
                            "postback": "베어월드00"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '인사00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '인사 업무 관련해 궁금하신 부분을 선택해 주세요',
                        actions: [{
                                "type": "message",
                                "label": "채용",
                                "postback": "채용00"
                            }, {
                                "type": "message",
                                "label": "육성",
                                "postback": "육성00"
                            }, {
                                "type": "message",
                                "label": "평가",
                                "postback": "평가00"
                            }, {
                                "type": "message",
                                "label": "보상",
                                "postback": "보상00"
                            }, {
                                "type": "message",
                                "label": "근태",
                                "postback": "근태00"
                            }, {
                                "type": "message",
                                "label": "휴가",
                                "postback": "휴가00"
                            }, {
                                "type": "message",
                                "label": "기타(퇴직)",
                                "postback": "퇴직00"
                            }, {
                                "type": "message",
                                "label": "담당자가 궁금해요",
                                "postback": "담당자00"
                            }, {
                                "type": "message",
                                "label": "처음으로 돌아가기",
                                "postback": "시작하기"
                            }

                        ]
                    }
                }
            } else if (reqBody.content.postback === '복리후생00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '복리후생 업무 관련해 궁금하신 부분을 선택해 주세요',
                        actions: [{
                                "type": "message",
                                "label": "경조사",
                                "postback": "경조사00"
                            }, {
                                "type": "message",
                                "label": "사내대출",
                                "postback": "사내대출00"
                            },
                            {
                                "type": "message",
                                "label": "카페포인트",
                                "postback": "카페포인트00"
                            },
                            {
                                "type": "message",
                                "label": "학자금지원",
                                "postback": "학자금00"
                            },
                            {
                                "type": "message",
                                "label": "리틀베어어린이집",
                                "postback": "어린이집00"
                            },
                            {
                                "type": "message",
                                "label": "대웅지킴이",
                                "postback": "지킴이00"
                            },
                            {
                                "type": "message",
                                "label": "다음 페이지",
                                "postback": "복리다음00"
                            }
                        ]
                    }
                }
            } else if (reqBody.content.postback === '복리다음00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '복리후생 업무 관련해 궁금하신 부분을 선택해 주세요',
                        actions: [{
                                "type": "message",
                                "label": "사내동호회",
                                "postback": "동호회00"
                            },

                            {
                                "type": "message",
                                "label": "셔틀버스",
                                "postback": "셔틀버스00"
                            },
                            {
                                "type": "message",
                                "label": "직원식당",
                                "postback": "직원식당00"
                            }, {
                                "type": "message",
                                "label": "콘도",
                                "postback": "콘도00"
                            }, {
                                "type": "message",
                                "label": "캡슐룸",
                                "postback": "캡슐룸00"
                            }, {
                                "type": "message",
                                "label": "부임여비",
                                "postback": "부임여비00"
                            },

                            {
                                "type": "message",
                                "label": "리프레시",
                                "postback": "리프레시00"
                            },

                            {
                                "type": "message",
                                "label": "생일축하",
                                "postback": "생일축하00"
                            },


                        ]
                    }
                }
            } else if (reqBody.content.postback === '베어월드00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '베어월드  관련해 궁금하신 부분을 선택해 주세요',
                        actions: [{
                                "type": "message",
                                "label": "베어월드 이용에 문제가 있어요",
                                "postback": "그룹웨어이슈00"
                            },
                            {
                                "type": "message",
                                "label": "궁금한 베어월드 기능이 있어요",
                                "postback": "기능질의00"
                            },
                            {
                                "type": "message",
                                "label": "베어월드 비밀번호를 잊어 버렸어요",
                                "postback": "비밀번호00"
                            },
                            {
                                "type": "message",
                                "label": "시스템 담당자가 궁금해요",
                                "postback": "담당자00"
                            },
                        ]
                    }
                }
            } else if (reqBody.content.postback === '채용00') {
                url_link = 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push';
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    postback: "",
                    content: {
                        type: 'button_template',
                        contentText: '인사관련 업무를 선택해주세요',
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
                            "postback": "사내추천00"
                        }, {
                            "type": "message",
                            "label": "기타",
                            "postback": "기타"
                        }]
                    }
                }
            }

            //사내추천
            else if (reqBody.content.postback === '사내추천00') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '사내직원이 직접 대웅에 가장 FIT한 우수인재를 추천함으로써 우수인재를 확보하는 채용제도입니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천01"
                        }, {
                            "type": "message",
                            "label": "처음으로 돌아가기",
                            "postback": "시작하기"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천01') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '추천가능한 우수인재 기준은 경력 3년이상입니다. (단, 로컬영업의 경우 1년 이상부터 추천 가능)',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천02"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천02') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '추천된 우수인재는 인사팀에서 검토후 지속 관리되며 채용으로 연결될시 입사시와 1년근속 평가에따라 추천자에게 포상을 지급합니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천03"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천03') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '추천할 우수인재가 있나요?',
                        actions: [{
                            "type": "message",
                            "label": "네",
                            "postback": "사내추천04y"
                        }, {
                            "type": "message",
                            "label": "아니오",
                            "postback": "사내추천04n"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천04n') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '주변에 우수인재가 있다면 적극적으로 추천해주시기 바랍니다 ^^',
                        actions: [{
                            "type": "message",
                            "label": "처음으로 돌아가기",
                            "postback": "시작하기"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천04y') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '아래 우수인재 기준에 부합하는지 검토해주세요.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천05"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천05') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: ' 1. 대웅의 인재상에 맞는 사람\n     - 끊임없이 학습하여 변화하고 이를 업무에 적용할 수 있는 사람\n     - 열린 마음으로 상사/동료와 소통/협력하여 더 좋은 성과를 이끌어 낼 수 있는 사람\n     - 자율과 몰입을 통해 하기로 한 일은 끝까지 해내는 사람\n',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천06"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천06') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '  2. 동일/유사 업무에 전문성을 지닌 사람\n      - 경력 : 3년이상 경력자 \n                  (※ 로컬영업의 경우, 경력 1년이상부터 추천 가능)\n      - 구체적인 성공 사례(성과)가 있는 사람\n         예) 본인의 직무/업무와 관련하여 고성과를 낸 사례\n              일하는 방법의 개선을 통해 주변 동료들에게 영향력을 준 사례 \n',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천07"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천07') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '추천서 양식을 작성후 인사팀에 메일을 보내주세요. \n인사팀 검토후, 우수인재가 맞다면 대상자에게 대웅의 문화와 비전 및 채용소식을 정기적으로 보내드립니다. \n인재Pool 등록시 스타벅스 아메리카노를 기프티콘으로 발송드립니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천08"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천08') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '이후, 적합한 포지션에대해 지원자가 포지션에 지원하여 채용이 되었다면, 추천자에게 포상이 지급됩니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "사내추천09"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천09') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '추가로 궁금하신 사항이 있으신가요?',
                        actions: [{
                                "type": "message",
                                "label": "추천자포상",
                                "postback": "사내추천10"
                            },

                            {
                                "type": "message",
                                "label": "담당자 연락하기",
                                "postback": "사내추천담당자"
                            },

                            {
                                "type": "message",
                                "label": "진행시 주의할 사항",
                                "postback": "사내추천11"
                            },

                            {
                                "type": "message",
                                "label": "처음으로 돌아가기",
                                "postback": "시작하기"
                            }
                        ]
                    }
                }
            } else if (reqBody.content.postback === '사내추천담당자') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '연락처 류효인(내선 : 8171)',
                        actions: [{
                            "type": "message",
                            "label": "이전으로 돌아가기",
                            "postback": "사내추천09"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천10') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '그림(인사팀 이미지 요청중)',
                        actions: [{
                            "type": "message",
                            "label": "이전으로",
                            "postback": "사내추천09"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '사내추천11') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '① 우수인재 Pool 사전 등록 후 채용까지 히스토리 관리된 경우만 인정 (입사 후 적용 X)\n② 추천대상자 : 채용사이트 이력서 등록시 추천인 정보 입력\n',
                        actions: [{
                            "type": "message",
                            "label": "이전으로",
                            "postback": "사내추천09"
                        }]
                    }
                }
            }




            //경력채용
            else if (reqBody.content.postback === '경력채용00') {
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
            } else if (reqBody.content.postback === '경력채용01') {
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
                        }]
                    }
                }
            } else if (reqBody.content.postback === '경력채용02n') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '증/충원요청서를 상신해주시기 바랍니다. 전체프로세스를 알고싶으시면, 게시판 > 인사공지사항 > “채용”을 검색하시면 운영안을 확인하실수 있습니다.',
                        actions: [{
                            "type": "message",
                            "label": "처음으로 돌아가기",
                            "postback": "시작하기"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '경력채용02y') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '결재완료된 증/충원요청서와 JD를 작성하여 인사팀에 메일을 보내주세요.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용03"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '경력채용03') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '인사팀에서 채용포털과 헤드헌팅을 통해서 공고를 오픈합니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용04"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '경력채용04') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '이후 부터는 인사팀 담당자를 통해서 채용 프로세스를 진행/안내 받으시면 됩니다.',
                        actions: [{
                            "type": "message",
                            "label": "다음",
                            "postback": "경력채용05"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '경력채용05') {
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
            } else if (reqBody.content.postback === '경력채용06') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '전체프로세스는 베어월드 게시판 > 인사공지사항 >  “채용”을 검색하시면 운영안을 확인하실수 있습니다.',
                        actions: [{
                            "type": "message",
                            "label": "이전으로 돌아가기",
                            "postback": "경력채용05"
                        }]
                    }
                }
            } else if (reqBody.content.postback === '담당자') {
                var reqBody = {
                    accountId: parsedBody.source.accountId,
                    content: {
                        type: 'button_template',
                        contentText: '연락처 류효인(내선 : 8171)',
                        actions: [{
                            "type": "message",
                            "label": "이전으로 돌아가기",
                            "postback": "경력채용05"
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