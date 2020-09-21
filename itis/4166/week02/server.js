const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello World from NodeJS!");
    res.end();
  })
  .listen(3000);
