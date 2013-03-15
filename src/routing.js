function route(handle, pathName)
{
	console.log("About to handle request for " + pathName)
	console.log(handle[pathName]);
	if(handle[pathName] === 'function')
	{
		handle[pathName]();
	}
	else
	{
		console.log(handle[pathName])
		console.log("Dont know how to handle this request");
	}
}

exports.route = route;