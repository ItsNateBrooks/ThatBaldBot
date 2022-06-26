const fetch = require('node-fetch')
module.exports = async function (msg, args){

    if(args.includes("xqc") || args.includes("valheim")){
        let url = `https://g.tenor.com/v1/search?q=no-one-cares&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url)
        let json = await response.json()
        let index = Math.floor(Math.random() * json.results.length)
        msg.reply(json.results[index].url)
    }
        
    if(args.includes("oof") ){
        msg.reply("https://tenor.com/view/thats-rough-buddy-avatar-the-last-airbender-zuko-gif-17596756")
    }

    if(args.includes("boi") ){
        msg.reply("https://tenor.com/view/spongebob-breath-in-inhale-gif-11964324")
    }
}
