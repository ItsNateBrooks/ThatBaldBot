const { Client, Intents } = require('discord.js')
require("dotenv").config()

const fetch = require('node-fetch')


const client = new Client({ 
    intents: [
        "GUILDS", 
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ] 
})

client.once('ready', () => {
    console.log('ThatBaldBot is online!')

})

client.on("message", gotMessage)

async function gotMessage(msg){
    if(msg.content.toLowerCase().includes("xqc") || msg.content.toLowerCase().includes("elden ring")){
        let url = `https://g.tenor.com/v1/search?q=no-one-cares&key=${process.env.TENORKEY}}&limit=8`
        let response = await fetch(url)
        let json = await response.json()
        let index = Math.floor(Math.random() * json.results.length)
        msg.reply(json.results[index].url)
    }
}


client.on("messageCreate", (message) => {
    if(message.content.toLowerCase().includes("oof") ){
        message.reply("https://tenor.com/view/thats-rough-buddy-avatar-the-last-airbender-zuko-gif-17596756")
    }
})




client.login(process.env.TOKEN)