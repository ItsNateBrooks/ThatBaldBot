const { Client, Intents } = require('discord.js')
require("dotenv").config()


const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES
    ] 
})

client.once('ready', () => {
    console.log('ThatBaldBot is online!')

})

client.on("messageCreate", (message) => {
    if(message.content.includes("hi")|| message.content.includes("Hi")){
        message.reply("Yous a Bitch")
    }
})




client.login(process.env.TOKEN)