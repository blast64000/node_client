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

dbconn.readMasterTable().then(function(data) {
    masterData.chatBotList = data[0].slice(0, data[0].length);
    masterData.contentList = data[1].slice(0, data[1].length);
    masterData.actionList = data[2].slice(0, data[2].length);


    console.log("★" + masterData.actionList.length)
    console.log("★" + masterData.contentList.length)
    console.log("★" + masterData.chatBotList.length)

    for (k = 0; k < masterData.actionList.length; k++) {
        actionInstList[k] = new lklist.ActNode(masterData.actionList[k]);
        console.log("1.====init ActionNode config ==== ");
    }

    for (t = 0; t < masterData.contentList.length; t++) {
        console.log(t);
        contentInstList[t] = new lklist.ContNode(masterData.contentList[t]);
        contentInstList[t].appendActionSet(actionInstList);
        console.log("2.====init ContNode config ==== ");
    }

    for (j = 0; j < masterData.chatBotList.length; j++) {
        botInstList[j] = new lklist.BotNode(masterData.chatBotList[j]);

        botInstList[j].appendEntryPoint(contentInstList);
        console.log("3.====init BotNode config ==== ");
    }

    for (x = 0; x < masterData.actionList.length; x++) {
        console.log("4.====init Action NextNode config ==== ");
        actionInstList[x].appendNextCont(contentInstList);
    }

    console.log(botInstList);
    console.log(contentInstList);
    console.log(actionInstList);

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