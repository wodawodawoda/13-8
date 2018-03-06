const http = require('http'),
	fs = require('fs');

const server = http.createServer();
server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		const resp = fs.readFileSync('./index.html', 'utf-8');
		response.write(resp);
		response.end();
	} else {
		response.statusCode = 404;
		response.write('<img src="https://www.404.ie/assets/img/logo_blue.png" alt="cat">');
		response.end();
	}
});
server.listen(9000);