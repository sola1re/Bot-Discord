module.exports = {
    name: 'play',
    description: "music bot",
    execute(message, args){
        
        if (!args[1]){
    message.channel.send("you need to provide a link");
        }
        if (!message.member.voiceChannel){
            message.channel.send("You must be in a channel to play the bot!");
        }
        
    }
        
    }

