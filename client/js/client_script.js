var socket_G = io.connect('http://localhost:4000');
var username_G, socketId_G = '';
$(document).ready(function () {
    //const client_connect = new Client_connect();
    console.log(socket_G.id);
    socketId_G = socket_G.id;
    const setupMiddleSection = new SetupMiddleSection(0);
    setupEventListeners();
});

function setupEventListeners() {
    const that = this;

    // -------------- HANDLE NAVIGATION CLICKS ---------------- //
    const $nav_bar = $('#nav_bar');
    $nav_bar.on('click', '.nav_btn_li', function () {
        //console.log($(this).index());
        // index 0 = Home, 1 = Games, 2 = Highscores, 3 = Go Online, 4 = Abou
        const setupMiddleSection = new SetupMiddleSection($(this).index());
    });
}