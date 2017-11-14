class SetupMiddleSection
{
    constructor(index)
    {
        //console.log(index);
        switch (index)
        {
            case 0:
                //console.log('home');
                this.createHomeGrid();
                break;
            case 1:
                //console.log('games');
                this.createGamesGrid();
                break;
            case 2:
                //console.log('highscores');
                break;
            case 3:
                //console.log('go online');
                break;
            case 4:
                //console.log('about');
                break;
            case defaultStatus:
                //console.log('defaultStatus');
                break;
        }
    }

    createHomeGrid()
    {
        const $middle_section = $('#middle_section');
        $middle_section.html('');
        const $home_section = '<div id="chat_container">\n' +
            '        <div id="message_container">\n' +
            '            <p class="message"><b>- Anthon:</b> Hello Guys</p>\n' +
            '            <p class="message"><b>- Noah:</b> Helloo!</p>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div id="message_input_container">\n' +
            '        <input type="text" id="message_input" placeholder="message...">\n' +
            '        <button id="message_btn">-</button>\n' +
            '    </div>';
        $middle_section.append($home_section);
    }

    createGamesGrid()
    {
        const $middle_section = $('#middle_section');
        $middle_section.html('');
        const $games_section = '<div class="game_container" id="tictactoe_container">\n' +
            '        <img class="game_imgs" src="img/btns/tictactoe_btn.png" alt="Tic Tac Toe">\n' +
            '    </div>\n' +
            '\n' +
            '    <div class="game_container" id="connect4_container">\n' +
            '        <img class="game_imgs" src="img/btns/connect4_btn.png" alt="Tic Tac Toe">\n' +
            '    </div>\n' +
            '\n' +
            '    <div class="game_container" id="platformer_container">\n' +
            '        <img class="game_imgs" src="img/btns/platformer_btn.png" alt="Tic Tac Toe">\n' +
            '    </div>\n' +
            '\n' +
            '    <div class="game_container" id="upcoming_container">\n' +
            '        <img class="game_imgs" src="img/btns/coming_soon_btn.png" alt="Tic Tac Toe">\n' +
            '    </div>';
        $middle_section.append($games_section);
    }

    createHighscoresGrid()
    {
        const $middle_section = $('#middle_section');
        $middle_section.html('');
        const $games_section = '';
        $middle_section.append($games_section);
    }

    createLoginGrid()
    {
        const $middle_section = $('#middle_section');
        $middle_section.html('');
        const $games_section = '';
        $middle_section.append($games_section);
    }

    createAboutGrid()
    {
        const $middle_section = $('#middle_section');
        $middle_section.html('');
        const $games_section = '';
        $middle_section.append($games_section);
    }
}