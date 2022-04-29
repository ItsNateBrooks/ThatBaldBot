let boardSet = false
let marksSet = false
let playingGame = false
let gameWon = false
let oneMarked = false
let twoMarked = false
let threeMarked = false
let fourMarked = false
let fiveMarked = false
let sixMarked = false
let sevenMarked = false
let eightMarked = false
let nineMarked = false
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

function checkDiags(board){
    if(board[1][1] == board[0][0] && board[1][1] == board[2][2]){
        gameWon = true
    }
    if(board[1][1] == board[2][0] && board[1][1] == board[0][2]){
        gameWon = true
    }
}
function checkColumns(board){
    if(board[0][0] == board[0][1] && board[0][0] == board[0][2] ){
        gameWon = true
    }
    if(board[1][0] == board[1][1] && board[1][0] == board[1][2] ){
        gameWon = true
    }
    if(board[2][0] == board[2][1] && board[2][0] == board[2][2] ){
        gameWon = true
    }
}
function checkRows(board){
    if(board[0][0] == board[1][0] && board[0][0] == board[2][0] ){
        gameWon = true
    }
    if(board[0][1] == board[1][1] && board[0][1] == board[2][1] ){
        gameWon = true
    }
    if(board[0][2] == board[1][2] && board[0][2] == board[2][2] ){
        gameWon = true
    }
}

function botTurn(board){
    
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
        "|","1 ","2","3","|\n",
        "|","4","5","6","|\n",
        "|","7","8","9","|\n",
        "#","-","-","-","#\n",]

    trueBoard = [["0","1","2"],
                 ["3","4","5"],
                 ["6","7","8"]]
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
    }else if(playingGame){
        switch (args[0]){
            case "1":
                if(oneMarked == true)
                    break
                displayBoard[6] = userMark
                trueBoard[0][0] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                oneMarked = true
            break
            case "2":
                if(twoMarked == true)
                    break
                displayBoard[7] = userMark
                trueBoard[0][1] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                twoMarked = true
            break
            case "3":
                if(threeMarked == true)
                    break
                displayBoard[8] = userMark
                trueBoard[0][2] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                threeMarked = true
            break
            case "4":
                if(fourMarked == true)
                    break
                displayBoard[11] = userMark
                trueBoard[1][0] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                fourMarked = true
            break
            case "5":
                if(fiveMarked == true)
                    break
                displayBoard[12] = userMark
                trueBoard[1][1] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                fiveMarked = true
            break
            case "6":
                if(sixMarked == true)
                    break
                displayBoard[13] = userMark
                trueBoard[1][2] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                sixMarked = true
            break
            case "7":
                if(sevenMarked == true)
                    break
                displayBoard[16] = userMark
                trueBoard[2][0] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                sevenMarked = true
            break
            case "8":
                if(eightMarked == true)
                    break
                displayBoard[17] = userMark
                trueBoard[2][1] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                eightMarked = true
            break
            case "9":
                if(nineMarked == true)
                    break
                displayBoard[18] = userMark
                trueBoard[2][2] = userMark
                msg.reply("Board:\n" + displayBoard.join(" ") + "\n ")
                nineMarked = true
            break
            default:
                msg.reply("Bruh, I just said reply with !ttt <1-9> with 1 being the top left and 9 being the bottom right")
            break
        }
        checkWin(trueBoard, msg)
    }
}
