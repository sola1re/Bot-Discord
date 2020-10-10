module.exports = {
    name: 'youtube',
    description: "this sends tsanium's youtube",
    execute(message, args){

        
        let role = message.guild.roles.cache.find(r => r.name === "Mod")
        
        if (message.member.roles.cache.some(r => r.name === "Mod")){
        message.channel.send('https://www.youtube.com/tsanium');
        }else{
            message.channel.send('You cant send this message because you dont have permission');
        }
    }
}
// you can also use message.member.roles.remove() to remove someone's role
// check by the nam and not by the id: if (message.member.roles.cache.some(r => r.name === "Mod")
