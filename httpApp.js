/**
 * Created by moche_000 on 2017/3/23.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Nodejs</h1>');
    res.end('<p>hello world</p>');

}).listen(3003);
console.log("服务启动成功");