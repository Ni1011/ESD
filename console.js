console.log("Hello")

var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello \n');
}).listen(8081);

console.log('server is running at http://127.0.0.1:8081');