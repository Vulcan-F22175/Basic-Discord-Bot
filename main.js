const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    console.log('Raiden Is Online...')
});

client.login('OTQzMjAwNDk3MTAyMzYwNjY2.Ygvl6g.CgMcauo2WISoZLQymP_Mn7GVfqg');