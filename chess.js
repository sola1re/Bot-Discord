module.exports = {
    name: 'chess',
    description: "to play chess",
    execute(message, args){
        
        message.channel.send("A B C D E F G H");
        message.channel.send(" 1 :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: \n 2 :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: \n 3 :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: \n 4 :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: \n 5 :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: \n 6 :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: \n 7 :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: \n 8 :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square: :brown_square: :white_large_square:");
        
        message.channel.send("Ok, player one, what peice do you want to move?");
        
    }
        
}
