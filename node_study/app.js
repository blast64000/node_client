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


    console.log("1.====init ActionNode config ==== ");
    for (let i of masterData.actionList) {
        actionInstList.push(new lklist.ActNode(i));
    }

    console.log("2.====init ContNode config ==== ");
    for (let t = 0; t < masterData.contentList.length; t++) {
        console.log(t);
        contentInstList[t] = new lklist.ContNode(masterData.contentList[t]);
        contentInstList[t].appendActionSet(actionInstList);
    }

    console.log("3.====init BotNode config ==== ");
    for (let j = 0; j < masterData.chatBotList.length; j++) {
        botInstList[j] = new lklist.BotNode(masterData.chatBotList[j]);

        botInstList[j].appendEntryPoint(contentInstList);
    }
    console.log("4.====init Action NextNode config ==== ");
    for (let x = 0; x < masterData.actionList.length; x++) {
        actionInstList[x].appendNextCont(contentInstList);
    }
    console.log("5.====activate server config ==== ");
    https.createServer(conf.options, onRequest).listen(443);
});


let findCurrAct = function(text, actList){
    for ( let j of actList){
        if (text===j.actType){
            return j;
        }else { 
            return null;
        }
    }

};




let findCurrCont = function(postback, conList) {
    for (let i of conList) {
        if (postback === i.contCode) {
            return i;
        } else {
            return null;
        }
    }

};
let makeActionJson = function(actionSetData) {
    let retArray = [];
    for (let i of actionSetData) {
        let actions = {
            type: i.type,
            label: i.actName,
            postback: i.netContCode
        };
        retArray.push(actions);
    }
    return retArray;
};

let onRequest = function(req, res) {
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

            //insert parse_text function
            let parsedBody = JSON.parse(body);
            let reqBody = {
                accountId: parsedBody.source.accountId,
                content: {
                    type: parsedBody.content.type,
                    text: parsedBody.content.text,
                    postback: parsedBody.content.postback,
                    actions: []
                },
            }
            console.log("postback:" + reqBody.content.postback);
            // postback code system refactoriing
            // { ContentCode, content.type, instace_message } = postback 


            //text message processing
            if (reqBody.content.postback === undefined) {
                let reqAction = findCurrAct(reqBody.content.text, actionInstList);
                let reqContent = findCurrCont(reqAction.nextContCode, contentInstList);
                
                reqBody.content.type = reqContent.contType;
                reqBody.content.contentText = "메세지 응답 test";
                reqBody.content.actions = makeActionJson(reqAction.contActionSet);
                
                
            //postback processing
            } else if (reqContent.content.text === undefined) {
                let reqContent = findCurrCont(reqBody.content.postback, contentInstList);
                reqBody.content.type = reqContent.contType;
                reqBody.content.contentText = "postback 응답 test";
                reqBody.content.actions = makeActionJson(reqContent.contActionSet);
                //postback만 있을경우
            } else {

            }
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