const Discord = require('discord.js');
const client = new Discord.Client();
 
/*
const cheerio = require('cheerio');
const request = require('request');

packages needed to fetch images from google 

-> first is to change the format to the one that we want
-> second is arequest package
*/



const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('GOD is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if(command === 'nigga'){
        client.commands.get('mod').execute(message, args);
    }
});



client.login(Token);

//   {}
