import net from "node:net";

const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress);

  socket.on("data", (data) => {
    const request = data.toString();
    console.log("Recieved:", request);

    const response = "HTTP/1.1 200 OK\n\n Hello World!";
    socket.write(response);
    socket.end();
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});
