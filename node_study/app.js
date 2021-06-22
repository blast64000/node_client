var conf = require("./option.js");
var https = require("https");
var request = require("../testapp/node_modules/request");



//1. maria-db 로드

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '35.172.136.88',
    user: 'chatbot',
    password: 'carbon14',
    connectionLimit: 5
});

async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('select 1 as val');
        console.log(rows);
        const res = await conn.query("select * from chatbot.cont_ms_tb");
        console.log(res);

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }


}

asyncFunction()
    // write status db 
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