const { GuildMember } = require("discord.js");

module.exports = {
    name: 'mod',
    description: "command to give a mod role",
    execute(message, args){
        
        
        
        message.channel.send('NO YOU CANT SAY THE N-WORD because you do not have the n-word pass, let me change that');
        message.member.roles.add('761972132900765696').catch(console.error);
    }
}

// you can also use message.member.roles.remove() to remove someone's role
