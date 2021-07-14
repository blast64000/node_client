var fs = require("fs")

exports.options = {
    url: 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/persistentmenu',
    push_url: 'https://apis.worksmobile.com/r/kr1unqNPDxwAo/message/v1/bot/1937543/message/push',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        consumerKey: 'BHOjH7zxMnPPqXwycpf8',
        Authorization: 'Bearer AAABB5y5YRGNHB8mRM8MzF2pfzpYLBDEMuTVmTt8NaHk8QYWtaKE3EsDtl/awNK+a2o6A/WTKrAIaSAUkn7MSzEGMAEXy2LCFxHCCKiAlYp/B+JeHD/jQEKSgEHYo2NrZiCXr3mvnHC7IDmUtZB3CWd6Rwwm5BKgadtnJih5u1f/ISjdsPCqrulVEgnqpflDiUlS3upaz3AjGtQOoRYjY0+TWD078vWpJoONPiH68I/Z6LdEOq2X89NYtO8nav0Kq3xjIC3fHFqnskA8nd+Qq3PdcX044ANG5cnKwknYDBigwKHC8cl8vn2Ptk2jqtt8sCOOiHzw1F+zvC1I/2qzc1dS2FuDsxQ8UpsEraV9+k1olRLq'
    },
    key: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/privkey2.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/cert2.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/archive/herb-cookie.com/chain2.pem')
};