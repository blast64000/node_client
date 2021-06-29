const https = require("https");
const request = require("../testapp/node_modules/request");
const mariadb = require('mariadb');

const conf = require("./option.js");
const dbconn = require("./db-conn.js");
const lklist = require("./ln-list.js");

let masterData = {
    chatBotList: [],
    contentList: [],
    actionList: []
};

let botInstList = [];
let contentInstList = [];
let actionInstList = [];

//1. maria-db 로드
const pool = mariadb.createPool({
    host: '35.172.136.88',
    user: 'chatbot',
    password: 'carbon14',
    connectionLimit: 5
});

//1. bot 리스트 읽기
dbconn.readMasterTable().then(function(data) {
    masterData.chatBotList = data[0].slice(0, data[0].length);
    masterData.contentList = data[1].slice(0, data[1].length);
    masterData.actionList = data[2].slice(0, data[1].length);

    //2. 자료구조 저장
    for (i = 0; i < masterData.contentList.length; i++) {
        contentInstList[i] = new lklist.ContNode(masterData.contentList[i]);
    }

    for (j = 0; j < masterData.chatBotList.length; j++) {
        botInstList[j] = new lklist.BotNode(masterData.chatBotList[j]);
        botInstList[j].appendEntryPoint(contentInstList);
    }

    for (k = 0; k < masterData.actionList.length; k++) {
        actionInstList[k] = new lklist.ActNode(masterData.actionList[k]);
    }
    botInstList[0].botStartNode.contText = "컨텐츠 변경 테스트"
    console.log(contentInstList)
    console.log(botInstList)
    console.log(actionInstList)


    https.createServer(conf.options, onRequest).listen(443);
});

function onRequest(req, res) {
    /* request part*/
    const { headers, method, url } = req;
    let body = [];

    //data read part
    req.on('error', (err) => {
        console.error(err);

    }).on('data', (chunk) => {
        body.push(chunk);

    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body)

        if (headers['user-agent'] === 'security') {

            //parse_text
            var parsedBody = JSON.parse(body);
            var reqBody = {
                accountId: parsedBody.source.accountId,
                content: {
                    type: parsedBody.content.type,
                    text: parsedBody.content.text,
                    postback: parsedBody.content.postback
                },

            }

            //1. find_linked_point 
            //2. db write
            //3. on-request 
            request({
                    method: 'post',
                    url: conf.options.url,
                    json: reqBody,
                    headers: conf.options.headers
                },

                function(err, response, body) {
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