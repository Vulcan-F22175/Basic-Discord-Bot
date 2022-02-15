const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    console.log('Raiden Is Online...')
});
// Add Your Bot token between the two apostrophes below
client.login('');