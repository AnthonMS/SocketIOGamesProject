var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000,function(){
    console.log("Listening for requests on port 4000");
});

//static files
// This is the folder where index.html is located
app.use(express.static('client'));

//Socket setup
var io = socket(server);

io.on('connection',function(socket){
    console.log('Made socket connection',socket.id);
});