module.exports = {
    name: 'fruits',
    description: "fruit reaction",
    execute(message, args){
        
        message.react('🍎');
        message.react('🍊');
        message.react('🍇');
        
    }
        
}
