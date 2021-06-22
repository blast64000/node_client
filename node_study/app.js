var conf = require("./option.js");
var https = require("https");
var request = require("../testapp/node_modules/request");
const mariadb = require('mariadb');
const async = require('async');


//1. maria-db 로드
const pool = mariadb.createPool({
    host: '35.172.136.88',
    user: 'chatbot',
    password: 'carbon14',
    connectionLimit: 5
});

var dbload_info = {
    accountId: parsedBody.source.accountId,
    content: {
        type: parsedBody.content.type,
        text: parsedBody.content.text,
        postback: parsedBody.content.postback
    },

}

async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();

        // 활성화된 봇 리스트를 긁어옴
        const botMaster = await conn.query(`select * from chatbot.bot_ms_tb where BOT_USE_ST=1`);
        console.log(botMaster);
        const contentMaster = conn.query("select * from chatbot.cont_ms_tb");
        const actionMaster = conn.query("select * from chatbot.cont_ms_tb");




    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            conn.end()
        };
    }
}

//1. bot 리스트 읽기
asyncFunction()
    //2. for 문 돌면서 

//2. 링크드 리스트 생성 
//3. 


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

https.createServer(conf.options, onRequest).listen(443);
console.log('server has started.');
console.log(conf.options.url)