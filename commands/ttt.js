let boardSet = false
let marksSet = false
let gameWon = false
let playingGame = false
let locs = []
let boardSpaceMarked = [false, false, false, false, false, false, false, false, false]
let userMark = " "
let botMark = " "
let displayBoard = [
        "#","-","-","-","#\n",
        "|","1 ","2","3","|\n",
        "|","4","5","6","|\n",
        "|","7","8","9","|\n",
        "#","-","-","-","#\n",]

let trueBoard = [["0","1","2"],
                 ["3","4","5"],
                 ["6","7","8"]]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function reset(){
    boardSet = false
    marksSet = false
    playingGame = false
    gameWon = false
    boardSpaceMarked = [false, false, false, false, false, false, false, false, false]
    userMark = " "
    botMark = " "
    displayBoard = [
        "#","-","-","-","#\n",
        "|"," 1","2","3","|\n",
        "|","4","5","6","|\n",
        "|","7","8","9","|\n",
        "#","-","-","-","#\n",]

    trueBoard = [["0","1","2"],
                 ["3","4","5"],
                 ["6","7","8"]]
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

function checkWin(board, msg) {

    checkDiags(board)
    checkColumns(board)
    checkRows(board)
    if(gameWon == true){
        msg.reply("Thats game, GG")
        reset()
    }
}

function markHandler (msg, boardMarkedIndex, disBoardLoc, trueBoardLoc1, trueBoardLoc2) {
    if(boardSpaceMarked[boardMarkedIndex]){
        msg.reply("Bruv, you can't just place where someone's already placed before, go again... ")
    }
    else{
        displayBoard[disBoardLoc] = userMark
        trueBoard[trueBoardLoc1][trueBoardLoc2] = userMark
        msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
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
      1: '6',
      2: '7',
      3: '8',
      4: '11',
      5: '12',
      6: '13',
      7: '16',
      8: '17',
      9: '18'
    }[loc]
}

function reset(){
    boardSet = false
    marksSet = false
    playingGame = false
    gameWon = false
    userMark = " "
    botMark = " "
    displayBoard = [
        "#","-","-","-","#\n",
        "|"," 1","2","3","|\n",
        "|","4","5","6","|\n",
        "|","7","8","9","|\n",
        "#","-","-","-","#\n",]

    trueBoard = 
    [["0","1","2"],
     ["3","4","5"],
     ["6","7","8"]]
}



module.exports = function (msg, args){
    
    if(boardSet == false){
        msg.reply("Board Set:\n" + displayBoard.join(" ") + "\n Would you like to be Xs or Os? (reply with !ttt X or !ttt O)")
        boardSet = true;
    }else if(marksSet == false){
        if(args[0] == 'o'){
            userMark = "O"
            botMark = "X"
            marksSet = true
            playingGame = true
            msg.reply("Ok, we are ready to play, select your first spot by typing !ttt <1-9> with 1 being the top left and 9 being the bottom right")
        }else if(args[0] == 'x'){
            userMark = "X"
            botMark = "O"
            marksSet = true
            playingGame = true
            msg.reply("Ok, we are ready to play, select your first spot by typing !ttt <1-9> with 1 being the top left and 9 being the bottom right")
        }else {
            msg.reply("Bruh, I just said reply with !ttt X or !ttt 0")
        }
    }else if(playingGame && args[0] != undefined){

        let cords = getCoordNums(args[0]).split(" ")
        markHandler(msg, parseInt(args[0])-1, parseInt(getLocationNum(args[0])), parseInt(cords[0]), parseInt(cords[1]))
        checkWin(trueBoard, msg)
        
    }
    else{
        msg.reply("Bruh, I just said reply with !ttt <1-9> with 1 being the top left and 9 being the bottom right")
    }
}
