var http = require("http");
var server = http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/html"});

response.end('Hello Aman');
console.log("Hello Everyone!!!");
}).listen(8888);


