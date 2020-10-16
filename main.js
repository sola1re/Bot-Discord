const Discord = require('discord.js');
const client = new Discord.Client();


const cheerio = require('cheerio');
const request = require('request');
// first is to change the format to the one that we want
// second is a request package


var servers = {};

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
    
    }else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    
    }else if (command === 'davinki'){
        client.commands.get('davinki').execute(message, args);
    
    }else if (command === 'react'){
        message.react('😄');
    
    }else if (command === 'fruits'){
        client.commands.get('fruits').execute(message, args);

    }else if (command === 'play'){
        client.commands.get('play').execute(message, args);

    }else if (command === 'embed'){
        message.channel.send('https://test.rauf.workers.dev/?author=very+epic');

    }else if (command === 'image'){
        client.commands.get('image').execute(message, args);

    }else if (command === 'sum'){
        client.commands.get('sum').execute(message, args);
    
    }

});

client.login(BOT_TOKEN);

//   {}
