var socket = io.connect('http://localhost:4000');

$(document).ready(function () {
    console.log(socket.id);
});