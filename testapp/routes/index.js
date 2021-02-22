var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json(

        { "success": true }
    )
});

router.post('/', function(req, res, next) {
    res.status(200).json(

        { "success": true }
    )
    console.log(req)
    console.log(res)
});

module.exports = router;