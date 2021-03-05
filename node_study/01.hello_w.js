//http 모듈을 통해서 네트워크에 접근하게 함
var http = require('http');

//새로운 서버가생성 매개변수로 익명함수가 전달됨
// 익명함수는 requestListener 함수로 http.ServerRequest 와 http.serverResponse 2가지 변수를 가짐
http.createServer(function(req, res) {

    //res 개체는  writeHead 메서드를 가지는데 응답 상태(200)와 응답 content-type을 제공하는 응답헤더를 전송함
    //Headers 객체 내에 다른 응답 해더 정보를 포함시킬 수 있다.
    // 두번째 선택적 매개변수는 reasonPhrase로 상태코드에 대한 텍스트 설명을 제공
    res.writeHead(200, { 'content-type': 'text/plain' });
    // res.end 매서드는 모든 해더와 응답 본문이 전송되었고 통신이 종료되었다는 신호를 보낸다.
    // 이 매서드는 모든 response 개체에서 사용 되어야 한다. 
    // end method 는 두개의 매개변수를 가진다.
    // 1. 문자열이나 버퍼가 될 수 있는 데이터 청크 
    // 2. 데이터 청크가 문자열일 경우 두번째 매개변수에 인코딩을 지정
    // 두 매개변수는 선택적이며, 두번째 매개변수는 문자열 인코딩이 기본값인 utf-8이 아닐때에만 필요하다
    // res.write("hello world");res.end() 형식으로도 사용할 수 있다. 
    res.end("hello world!\n");

    //http.server.listen 메서드는 create 메서드가 끝난 후에 연결되어 해당 포트로 들어오는 연결을 대기한다. 
    // 선택적 매개변수는 hostname 과 콜백함수이다. 호스트네임이 허용되지 않으면 서버는 웹주소 연결을 허용한다. 
    //listen 매서드는 비동기인데 연결을 기다리는 동안 프로그램 실행이 차단되지 않는다는 것을 의미한다. 
}).listen(80);


console.log('Server running on 3000');