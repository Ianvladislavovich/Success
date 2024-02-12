const http = require('http');
const fs = require('fs');
const url = require('url');
const spawn = require('child_process').spawn;

const server = http.createServer(function (req, res) {
  const pathName = url.parse(req.url, true).pathname;
  const fileName = pathName === '/' ? 'index.html' : `.${pathName}.php`;

  fs.readFile(fileName, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    const php = spawn('php-cgi', ['-q']);
    php.stdout.on('data', (phpOutput) => {
      res.write(phpOutput);
    });
    php.stdin.write(data.toString());
    php.stdin.end();
  });
});

server.listen(8080);