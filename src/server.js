var http = require("http");

function start() {
http.createServer(function(request, response) {
	console.log("Request received");
	response.writeHead(200, {"Content/type": "text/plain"});
	response.write("Hello world");
	response.end();
}).listen(8888);
console.log("Server started");
}
exports.start = start;
