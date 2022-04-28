function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = function (msg, args){

    const rpsArr = ["Rock","Paper","Scissors"];
    let rpsBot = getRandomInt(rpsArr.length)
    let rpsBotString = rpsArr[rpsBot];
    let rpsUser = 100
    
    rpsUser = args[0] === ("rock") ? 0 : (args[0] === ("paper") ? 1 : (args[0] === ("scissors") ? 2 : 100))     
    
    switch (rpsUser){
        case rpsBot:
            msg.reply(rpsBotString+"\nWe for real tied I guess, lets go again...")
        break
        case rpsBot+1:
        case rpsBot-2:
            msg.reply(rpsBotString+"\nBRO, HOW DID YOU BEAT ME CHEATER!!!1!!!1!!!")
        break
        case rpsBot-1:
        case rpsBot+2:
            msg.reply(rpsBotString+"\nCuh, I new Id win")
        break
        default:
            msg.reply("Bruh, do you not know how this works? Such a BOZO, anyways, use !rps <Rock, Paper, or Scissors> **COUGH** *literal noob* **COUGH**")
        break
    
    }
}

