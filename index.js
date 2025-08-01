const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Raw request", req);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello, manual server\n");
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
