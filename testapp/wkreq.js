//https://fsd-jinss.tistory.com/116
var http = require('http');

var opts = {
	host:
	port:
	method:
	path:
	header:
};

var resData = '';

var req = http.request(opts, function(res){

	res.on('data', function(chunk){
	resData+=chunk;
	});


	res.on('end', function(){
	console.log(resData);
	});
});

opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data='q=actor';
opts.headers['Content-Length'] = req.data.lenth;

req.on('error',function(err){
	console.log("error accuired:"+err.message);
})

req.write(req.data);
req.end();

