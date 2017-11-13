var socket_G = io.connect('http://localhost:4000');
$(document).ready(function () {
    const client_connect = new Client_connect();
    //console.log(socket_G.id);
    const $message = ('<p class="message"><b>- Anthon:</b> What are you doing?</p>');
    $('#message_container').append($message);
});