var express = require('express');
var app = express();
function queryRemover(req, res, next){
  console.log("\nBefore URL: ");
  console.log(req.url);
  req.url = req.url.split('?')[0];
  console.log("\nAfter URL: ");
  console.log(req.url);
  next();
};
app.use(queryRemover);
app.get('/no/query', function(req, res) {
  res.send("test");
});
app.listen(80);

// http://localhost/no/query?user=Brad&score=32
// http://localhost/no/query