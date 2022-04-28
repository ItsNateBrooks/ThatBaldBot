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

const commandHandler = require("./commands")

client.on("message", commandHandler)

client.login(process.env.TOKEN)