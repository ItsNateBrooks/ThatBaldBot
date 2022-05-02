const gif = require("./commands/gif.js")
const rps = require("./commands/rps.js")
const ttt = require("./commands/ttt.js")
const gifs = ["boi", "oof", "xqc", "valheim"]

const commands = {rps, gif, ttt}
const commandsArr = ["rps", "gif", "ttt"]

function arrayContains(arr, values) {
    return values.every(value => {
      return arr.includes(value);
    });
  }

module.exports = function (msg){
    if(msg.author.bot) return;
    let tokens = msg.content.toLowerCase().split(" ")
    
    if(arrayContains(gifs, tokens) ){
        commands.gif(msg, tokens)
    }

    let command = tokens.shift()

    if(command.charAt(0) === "!" && commandsArr.includes(command.substring(1))){
        command = command.substring(1);
        commands[command](msg, tokens)
    } 
}