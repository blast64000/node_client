var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/', function(req, res) {
  if (!req.cookies.hasVisited){
    res.cookie('hasVisited', '1', 
               { maxAge: 60*60*1000, 
                 httpOnly: true, 
                 path:'/'});
  }
  console.log(req.cookies);
  res.send("Sending Cookie");
});
app.listen(80);

// http://localhost/