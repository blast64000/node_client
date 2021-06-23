const mariadb = require('mariadb');

//1. maria-db 로드
const pool = mariadb.createPool({
    host: '35.172.136.88',
    user: 'chatbot',
    password: 'carbon14',
    connectionLimit: 5
});

var makeClause = function(colName, objName, dataArray) {
    var iter;
    var returnClause;
    returnClause += colName;
    returnClause += 'IN (';

    for (iter = 0; iter < dataArray.length; iter++) {
        returnClause += dataArray[iter].objName;
        returnClause += ',';
    };
    returnClause = returnClause.slice(0, -1);
    returnClause += ')';

    console.log(returnClause)

};


async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();

        // 활성화된 봇 리스트를 긁어옴
        const botMaster = await conn.query(`select * from chatbot.bot_ms_tb where BOT_USE_ST=1`);

        // 해당하는 봇번호만 추출하여 컨텐츠 긁어오기 

        const contentMaster = await conn.query(`select * from chatbot.cont_ms_tb where ${makeClause('CONT_BOT_CD', 'BOT_CD', botMaster)}`);
        console.log(contentMaster);
        // 해당하는 set 번호가 잇는 추출하여 액션 긁어오기 
        const actionMaster = await conn.query(`select * from chatbot.act_ms_tb where  ${makeClause('CONT_ACT_SET_CD', 'CONT_ACT_SET_CD', contentMaster)}`);
        console.log(actionMaster);
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            conn.end()
        };
    }
}

asyncFunction()