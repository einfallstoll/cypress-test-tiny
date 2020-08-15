const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    if (req.url.match(/\.html$/)) {
      res.setHeader('Content-Type', 'text/html');
    } else if (req.url.match(/\.js$/)) {
      res.setHeader('Content-Type', 'application/js');
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(1337);
