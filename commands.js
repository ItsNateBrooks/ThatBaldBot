const gif = require("./commands/gif.js")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function assign_RPS_Score(RPS_String) {
    return RPS_String === ("rock") ? 0 : (RPS_String === ("paper") ? 1 : (RPS_String === ("scissors") ? 2 : 100))
}

module.exports = async function (msg){
    if(msg.author.bot) return;
    let tokens = msg.content.toLowerCase().split(" ")

    if(tokens.includes("xqc") || tokens.includes("elden ring")){
        let url = `https://g.tenor.com/v1/search?q=no-one-cares&key=${process.env.TENORKEY}}&limit=8`
        let response = await fetch(url)
        let json = await response.json()
        let index = Math.floor(Math.random() * json.results.length)
        msg.reply(json.results[index].url)
    }

    if(tokens.includes("oof") ){
        msg.reply("https://tenor.com/view/thats-rough-buddy-avatar-the-last-airbender-zuko-gif-17596756")
    }
    if(tokens.includes("boi") ){
        msg.reply("https://tenor.com/view/spongebob-breath-in-inhale-gif-11964324")
    }
    if(tokens[0] == ("!rps")){

        const rpsArr = ["Rock","Paper","Scissors"];
        let rpsBot = getRandomInt(rpsArr.length)
        let rpsBotString = rpsArr[rpsBot];
        let rpsUser = 100

        rpsUser = assign_RPS_Score(tokens[1]) 
        console.log("UserString: " + tokens[1] + " UserScore :"+rpsUser+ " BotString :"+rpsBotString+ " BotScore :"+rpsBot)      
        
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
    
}