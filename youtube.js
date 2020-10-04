module.exports = {
    name: 'youtube',
    description: "dis sends tsanium's youtube",
    execute(message, args){

        
        let role = message.guild.roles.cache.find(r => r.name === "Mod")
        
        if (message.member.roles.cache.has('760542505334341712')){
        message.channel.send('https://www.youtube.com/tsanium');
        }else{
            message.channel.send('You cant send this message because you dont have permission');
        }
    }
}

// check by the nam and not by the id: if (message.member.roles.cache.some(r => r.name === "Mod")
