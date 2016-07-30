var fs = require('fs'),
    http = require('http'),
    mime = require('mime-types'),
    path = require('path');

var server = http.createServer(function (request, response) {
  var filePath = getFilePath(request);

  fs.readFile(filePath, function(err, html) {
    if(err) {
      handleError(request, response, err);
      return;
    }

    response.writeHeader(200, { 'Content-Type': mime.lookup(filePath) });
    response.write(html);
    response.end();
  });
});

function getFilePath(request) {
  var isFileRequest = /^.*\.[\w]+(\?v=\d+)?$/.test(request.url);
  if (!isFileRequest) return 'index.html';
  return request.url.substr(1).replace(/\?v=\d+/, '');
}

function handleError(request, response, err) {
  var httpStatusCode = err.code === 'ENOENT' ? 404 : 500;

  response.writeHeader(httpStatusCode, { 'Content-Type': 'text/plain' });
  response.write(err.message);
  response.end();
}

server.listen(8000);

console.log('Server running at http://localhost:8000/');
