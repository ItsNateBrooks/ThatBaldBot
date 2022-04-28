const gif = require("./commands/gif.js")
const rps = require("./commands/rps.js")
const gifs = ["boi", "oof", "xqc", "valheim"]

const commands = {rps, gif}

function multipleExist(arr, values) {
    return values.every(value => {
      return arr.includes(value);
    });
  }

module.exports = function (msg){
    if(msg.author.bot) return;
    let tokens = msg.content.toLowerCase().split(" ")
    
    if(multipleExist(gifs, tokens) ){
        commands.gif(msg, tokens)
    }

    let command = tokens.shift()

    if(command.charAt(0) === "!"){
        command = command.substring(1);
        commands[command](msg, tokens)
    } 

}