var server = require("./server"); 
var router = require("./routing");
var requestHandlers = require("./requestHandlers")


var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/end"] = requestHandlers.end;


server.start(router.route, handle);
