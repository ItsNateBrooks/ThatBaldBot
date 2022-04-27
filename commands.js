let scoreUsers = 0
let scoreBot = 0
const gif = require("./commands/gif.js")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = async function (msg){
    if(msg.author.bot) return;
    if(msg.content.toLowerCase().includes("xqc") || msg.content.toLowerCase().includes("elden ring")){
        let url = `https://g.tenor.com/v1/search?q=no-one-cares&key=${process.env.TENORKEY}}&limit=8`
        let response = await fetch(url)
        let json = await response.json()
        let index = Math.floor(Math.random() * json.results.length)
        msg.reply(json.results[index].url)
    }
    if(msg.content.toLowerCase().includes("oof") ){
        msg.reply("https://tenor.com/view/thats-rough-buddy-avatar-the-last-airbender-zuko-gif-17596756")
    }
    if(msg.content.toLowerCase().includes("boi") ){
        msg.reply("https://tenor.com/view/spongebob-breath-in-inhale-gif-11964324")
    }
    if(msg.content.toLowerCase().includes("!rps")){

        let rpsBot = getRandomInt(3)
        let rpsBotString = ""
        let rpsUser = 100

        switch (rpsBot){
            case 0:
                rpsBotString = "Rock"
            break
            case 1:
                rpsBotString = "Paper"
            break
            case 2:
                rpsBotString = "Scissors"
            break
        }
  
        if(msg.content.toLowerCase().includes("rock"))
            rpsUser = 0
        if(msg.content.toLowerCase().includes("paper"))
            rpsUser = 1
        if(msg.content.toLowerCase().includes("scissors"))
            rpsUser = 2

        switch (rpsUser){
            case 100:
                msg.reply('Bruh, do you not know how this works? Such a BOZO, anyways, use !rps <Rock, Paper, or Scissors> **COUGH** *literal noob* **COUGH**')
            break
            case rpsBot:
                msg.reply(rpsBotString)
                msg.reply("We for real tied I guess, lets go again...") // \n       Score:\nBot: " + scoreBot +" vs Users: " + scoreUsers
            break
            case rpsBot+1:
                msg.reply(rpsBotString)
                scoreUsers++
                msg.reply("BRO, HOW DID YOU BEAT ME CHEATER!!!1!!!1!!!")//\n       Score:\nBot: " + scoreBot +" vs Users: " + scoreUsers
                
            break
            case rpsBot-2:
                msg.reply(rpsBotString)
                scoreUsers++
                msg.reply("BRO, HOW DID YOU BEAT ME CHEATER!!!1!!!1!!!")//\n       Score:\nBot: " + scoreBot +" vs Users: " + scoreUsers
            break
            case rpsBot-1:
                msg.reply(rpsBotString)
                scoreBot++
                msg.reply("Cuh, I new Id win")//\n       Score:\nBot: " + scoreBot +" vs Users: " + scoreUsers
                break
            break
            case rpsBot+2:
                msg.reply(rpsBotString)
                scoreBot++
                msg.reply("Cuh, I new Id win")//\n       Score:\nBot: " + scoreBot +" vs Users: " + scoreUsers
                break
            break
            default:
                msg.reply('Bruh, do you not know how this works? Such a BOZO, anyways, use !rps <Rock, Paper, or Scissors> **COUGH** *literal noob* **COUGH**')
            break
        
        }

    }
    
}