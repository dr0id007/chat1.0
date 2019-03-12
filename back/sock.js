const http = require("http");
const socket = require("socket.io");
const express = require("express");

const app = express();
const server = http.createServer(app);

const io = socket(server);

io.on("connection", client => {
  console.log("a user connected");

  client.on("post", data => {
    console.log("data emit", data);
    io.sockets.emit("post called", data);
  });

  client.on("get", data => {
    console.log("get called", data);

    io.sockets.emit("get called", data);
  });

  client.on("disconnect", () => {
    console.log("user disconnected..!!");
  });
});

server.listen(2345, () => {
  console.log("listening on port 2345....");
});
