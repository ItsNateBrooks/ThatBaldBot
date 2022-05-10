
let boardSet = false
let gameWon = false
let playingGame = false
let player1Set = false
let player2Set = false
let boardSpaceMarked = [false, false, false, false, false, false, false, false, false]
let acceptedInputs = ["1","2","3","4","5","6","7","8","9"]
let playMark1
let playMark2
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
    playMark1 = null
    playMark2 = null
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
        msg.reply(player + " has won, GG!")
        reset(msg)
    }
    else{
        checkTie(msg)
    }
    
}

function markHandler (msg, boardMarkedIndex, disBoardLoc, trueBoardLoc1, trueBoardLoc2, playMark) {
    if(boardSpaceMarked[boardMarkedIndex]){
        msg.reply("Bruv, you can't just place where someone's already placed before, go again... ")
    }
    else{
        displayBoard[disBoardLoc] = boardMarkedIndex === 2 || boardMarkedIndex === 5 || boardMarkedIndex === 8 ? playMark+"\n" : playMark
        trueBoard[trueBoardLoc1][trueBoardLoc2] = playMark
        msg.reply("Board:\n" + displayBoard.join("") + "\n ")
        boardSpaceMarked[boardMarkedIndex] = true
    }
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



module.exports = function (msg, args){
    breakme: if(boardSet == false){
        msg.reply("Board Set:\n" + displayBoard.join("") + "\n Since this is a two player game, someone needs to be ❎ and someone needs to be 🅾️? (reply with !ttt X to be ❎ or !ttt O to be 🅾️)")
        boardSet = true;
    }else if(args[0] == "reset"){
        reset(msg)
        break breakme;
    }else if(player1Set == false){
        if(args[0] == 'o'){
            playMark1 = "🅾️"
            playMark2 = "❎"
            player1Set = true
            playingGame = true
            player1 = msg.author.username
            msg.reply("Player "+ playMark1 +" is...\n" + player1 + "\n Who will be Player "+playMark2 +"?")
        }else if(args[0] == 'x'){
            playMark1 = "❎"
            playMark2 = "🅾️"
            player1Set = true
            playingGame = true
            player1 = msg.author.username
            msg.reply("Player "+ playMark1 +" is...\n" + player1 + "\n Who will be Player "+playMark2 +"?")
        }else {
            msg.reply("Bruh, I just said reply with !ttt X or !ttt 0")
        }
    }else if(player2Set == false){
        player2 = msg.author.username
        msg.reply("Player 2 ("+ playMark2 +") is...\n" + player2 + "\n It is time to begin, "+player1 +" please make the first move by typing !ttt <1-9>")
        player2Set = true
    }else if(playingGame && acceptedInputs.includes(args[0])){
        let cords = getCoordNums(args[0]).split(" ")
        
        
        switch (msg.author.username){
            case (lastPlayer):
                msg.reply("It is not your turn, please wait for the other player to make a move before you go...")
            break
            case (player1):
                markHandler(msg, parseInt(args[0])-1, parseInt(getLocationNum(args[0])), parseInt(cords[0]), parseInt(cords[1]), playMark1)
                checkWin(trueBoard, msg, player1)
            break
            case (player2):
                markHandler(msg, parseInt(args[0])-1, parseInt(getLocationNum(args[0])), parseInt(cords[0]), parseInt(cords[1]), playMark2)
                checkWin(trueBoard, msg, player2)
            break
            default:
                msg.reply("You are not one of the current players, please wait for the current game to finish to play...")
            break
        }
        lastPlayer = msg.author.username
    }
    else{
        msg.reply("Bruh, I just said reply with !ttt <1-9> with 1 being the top left and 9 being the bottom right")
    }
}