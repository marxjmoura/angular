var fs = require('fs'),
    http = require('http'),
    mime = require('mime-types'),
    path = require('path');

var server = http.createServer(function (request, response) {
  var filePath = getFilePath(request);

  fs.readFile(filePath, function(err, fileContent) {
    if(err) {
      errorResponse(response, err);
      return;
    }

    successResponse(response, {
      type: mime.lookup(filePath),
      content: fileContent
    });
  });
});

function getFilePath(request) {
  var isFileRequest = /^.*\.[\w]+(\?v=.+)?$/.test(request.url);
  if (!isFileRequest) return 'index.html';
  return request.url.substr(1).replace(/\?v=.+/, '');
}

function errorResponse(response, err) {
  var httpStatusCode = err.code === 'ENOENT' ? 404 : 500;

  response.writeHeader(httpStatusCode, { 'Content-Type': 'text/plain' });
  response.write(err.message);
  response.end();
}

function successResponse(response, file) {
  response.writeHeader(200, {
    'Content-Type': file.type,
    'Cache-Control': 'no-cache'
  });
  response.write(file.content);
  response.end();
}

server.listen(8000);

console.log('Server running at http://localhost:8000/');
