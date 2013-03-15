var url = require("url");
var http = require("http");

function start(router, handler) {
  http.createServer(function(request, response) {
	var pathName = url.parse(request.url).pathname;
	console.log("Handler " + handler[pathName]);
	router(handler, pathName);
	response.writeHead(200, {"Content/type": "text/plain"});
	response.write("Hello world");
	response.end();
  }).listen(8888);
  console.log("Server started");
}


exports.start = start;
