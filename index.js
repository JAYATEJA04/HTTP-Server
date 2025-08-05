const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // console.log("Raw request", req);
  const requiredPath = req.url;

  if (requiredPath === "/greet" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "Hello from my server, result for greeting." })
    );
  } else if (requiredPath === "/time" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Hello, the time is:",
        time: new Date().toISOString(),
      })
    );
  } else if (requiredPath === "/index.html" && req.method === "GET") {
    const pathfile = path.join(__dirname, "static", "index.html");
    fs.readFile(pathfile, (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Internal server error");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
    // res.writeHead(200, { "content-type": "text/html" });
    // res.end("<h1>HTML FILE YAY!</h1>");
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Not found." }));
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
