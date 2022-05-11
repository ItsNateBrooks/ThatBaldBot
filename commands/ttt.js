const { MessageEmbed } = require('discord.js');

let boardSet = false
let gameWon = false
let playingGame = false
let player1Set = false
let player2Set = false
let boardSpaceMarked = [false, false, false, false, false, false, false, false, false]
let emb = null
let acceptedInputs = ["1","2","3","4","5","6","7","8","9"]
let playMark1 = ":o2:"
let playMark2 = ":negative_squared_cross_mark:"
let lastPlayer
let displayBoard = [
        ":one:",":white_medium_small_square:",":two:",":white_medium_small_square:",":three:\n",
        ":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:\n",
        ":four:",":white_medium_small_square:",":five:",":white_medium_small_square:",":six:\n",
        ":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:\n",
        ":seven:",":white_medium_small_square:",":eight:",":white_medium_small_square:",":nine:\n"]

let trueBoard = [["0","1","2"],
                 ["3","4","5"],
                 ["6","7","8"]]

let player1 = ""
let player2 = ""

function reset(msg){
    boardSet = false
    gameWon = false
    playingGame = false
    player1Set = false
    player2Set = false
    boardSpaceMarked = [false, false, false, false, false, false, false, false, false]
    lastPlayer = null
    displayBoard = [
        ":one:",":white_medium_small_square:",":two:",":white_medium_small_square:",":three:\n",
        ":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:\n",
        ":four:",":white_medium_small_square:",":five:",":white_medium_small_square:",":six:\n",
        ":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:",":white_medium_small_square:\n",
        ":seven:",":white_medium_small_square:",":eight:",":white_medium_small_square:",":nine:\n"]
    
    trueBoard = [["0","1","2"],
                 ["3","4","5"],
                 ["6","7","8"]]
    
    player1 = ""
    player2 = ""
    msg.channel.send('TIC TAC TOE RESET!');
}

function compare3Vals(arg1, arg2, arg3) {
    return arg1 === arg2 ? (arg1 === arg3 ? true : false) : false
}

function checkDiags(board){
    let diag1 = compare3Vals(board[1][1], board[0][0], board[2][2])
    let diag2 = compare3Vals(board[1][1], board[2][0], board[0][2])

    gameWon = diag1 == true ? true : (diag2 == true ? true : gameWon)
}

function checkColumns(board){
    let row1 = compare3Vals(board[0][1], board[0][0], board[0][2])
    let row2 = compare3Vals(board[1][1], board[1][0], board[1][2])
    let row3 = compare3Vals(board[2][1], board[2][0], board[2][2])

    gameWon = row1 == true ? true : (row2 == true ? true : (row3 == true ? true : gameWon))
}

function checkRows(board){
    let col1 = compare3Vals(board[1][0], board[0][0], board[2][0])
    let col2 = compare3Vals(board[1][1], board[0][1], board[2][1])
    let col3 = compare3Vals(board[1][2], board[0][2], board[2][2])

    gameWon = col1 == true ? true : (col2 == true ? true : (col3 == true ? true : gameWon))
}

function checkTie(msg){
    if(!boardSpaceMarked.includes(false)){
        msg.reply(player1 +" and " + player2+ " both of yall suck and somehow managed to tie!")
        reset(msg)
    }
}

function checkWin(board, msg, player) {
    checkDiags(board)
    checkColumns(board)
    checkRows(board)
    if(gameWon == true){
        msg.channel.send("<@" + player + "> has won, GG!")
        reset(msg)
    }
    else{
        checkTie(msg)
    }
    
}

function markHandler (msg, sentEmbed, boardMarkedIndex, disBoardLoc, trueBoardLoc1, trueBoardLoc2, playMark) {
    if(boardSpaceMarked[boardMarkedIndex]){
        msg.channel.send("Bruv, you can't just place where someone's already placed before, go again... ")
    }
    else{
        displayBoard[disBoardLoc] = boardMarkedIndex === 2 || boardMarkedIndex === 5 || boardMarkedIndex === 8 ? playMark+"\n" : playMark
        trueBoard[trueBoardLoc1][trueBoardLoc2] = playMark
        let editEmb = embedMake ("Board:",  displayBoard.join(""))
        sentEmbed.edit({ embeds: [editEmb] });
        boardSpaceMarked[boardMarkedIndex] = true
    }
}

function emojiConv (loc) {
    return { 
    "1️⃣": '1',
    "2️⃣": '2',
    "3️⃣": '3',
    "4️⃣": '4',
    "5️⃣": '5',
    "6️⃣": '6',
    "7️⃣": '7',
    "8️⃣": '8',
    "9️⃣": '9'
    }[loc]
}

function getCoordNums (loc) {
    return {
      1: '0 0',
      2: '0 1',
      3: '0 2',
      4: '1 0',
      5: '1 1',
      6: '1 2',
      7: '2 0',
      8: '2 1',
      9: '2 2'
    }[loc]
}
  function getLocationNum (loc) {
    return {
      1: '0',
      2: '2',
      3: '4',
      4: '10',
      5: '12',
      6: '14',
      7: '20',
      8: '22',
      9: '24'
    }[loc]
}

function embedMake (title, descrip) {
    let embed = new MessageEmbed()
    .setColor('#19BAD8')
    .setTitle(title)
    .setDescription(descrip)

    return embed
}



module.exports = function (msg, args){
    breakme: if(boardSet == false){
        emb = embedMake ("Board Set:", displayBoard.join("") + "\nSince this is a two player game, someone needs to be Xs and someone needs to be Os? (react with ❎ to be X or 🅾️ to be O)" )
        msg.channel.send({embeds: [emb]})
        .then(sentEmbed => {
            sentEmbed.react("❎")
            sentEmbed.react("🅾️")

            const filter = (reaction, user) => {
                return ((reaction.emoji.name === '❎' || reaction.emoji.name === '🅾️') && user != sentEmbed.author);
            };
            
            const collector = sentEmbed.createReactionCollector({ filter, max: 2, time: 600000 });
            
            collector.on('collect', (reaction, user) => {
                if(reaction.emoji.name === '❎') {
                    player1Set = true
                    player1 = user.tag
                    msg.channel.send("Player ❎ is... "+ user.tag +"\n")
		        }
                if(reaction.emoji.name === '🅾️'){
                    player2Set = true
                    player2 = user.tag
                    msg.channel.send("Player 🅾️ is... "+ user.tag +"\n")
		        }
                if(player1Set == true && player2Set == true){
                    playingGame = true
                    boardSet = true;
                }
            });

            collector.on('end', collected => {
                msg.channel.send("Both players have been set...\nUse **!ttt start** to begin the game")
                console.log(`Collected ${collected.size} items`);
            });
            
        })
    
    } else if(args[0] == "reset"){
        reset(msg)
        break breakme;
    } else if(playingGame && args[0] == "start"){
        
        emb = embedMake ("Board Set:", displayBoard.join("") + "\nUse !ttt <1-9> to place an ❎ or 🅾️" )
        msg.channel.send({embeds: [emb]})
        .then(sentEmbed => {
            sentEmbed.react("1️⃣")
            sentEmbed.react("2️⃣")
            sentEmbed.react("3️⃣")
            sentEmbed.react("4️⃣")
            sentEmbed.react("5️⃣")
            sentEmbed.react("6️⃣")
            sentEmbed.react("7️⃣")
            sentEmbed.react("8️⃣")
            sentEmbed.react("9️⃣")

            let one_nine = ["1️⃣","2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
            const filter = (reaction, user) => {
                return ((one_nine.includes(reaction.emoji.name)) && user != sentEmbed.author);
            };
            
            const collector = sentEmbed.createReactionCollector({ filter});
            
            collector.on('collect', (reaction, user) => {
                let loc = emojiConv(reaction.emoji.name)
                let cords = getCoordNums(loc).split(" ")
                user.tag
                switch (user.tag){
                    case (lastPlayer):
                        msg.channel.send("<@" + user.id + "> It is not your turn, please wait for the other player to make a move before you go...")
                    break
                    case (player1):
                        markHandler(msg, sentEmbed, parseInt(loc)-1, parseInt(getLocationNum(loc)), parseInt(cords[0]), parseInt(cords[1]), playMark1)
                        checkWin(trueBoard, msg, user.id)
                        lastPlayer = user.tag
                    break
                    case (player2):
                        markHandler(msg, sentEmbed, parseInt(loc)-1, parseInt(getLocationNum(loc)), parseInt(cords[0]), parseInt(cords[1]), playMark2)
                        checkWin(trueBoard, msg, user.id)
                        lastPlayer = user.tag
                    break
                    default:
                        msg.channel.send("<@" + user.id + "> You are not one of the current players, please wait for the current game to finish to play...")
                    break
                }
                
            });

            collector.on('end', collected => {
                
                console.log(`Collected ${collected.size} items`);
            });
            
        })

        
        
    }
    else{
        msg.reply("Bruh, It doesn't look like you properly setup the players")
    }
}
