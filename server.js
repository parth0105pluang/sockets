var PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
app.use(express.static(__dirname+"/public"));
io.on("connection",function(socket){
    console.log("User connected via socket.io");
    socket.on("message",function(message){
          console.log("Message received"+message.text);
          io.emit('message',message);
    });
    socket.emit("message",{
        text: "Welcome to chat application"
    });
});
http.listen(PORT,function(){
     console.log("Server Started");
});














/*const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});*/