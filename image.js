const request = require("request");

module.exports = {
    name: 'image',
    description: "random image",
    execute(message, args){

        function image(message){
            
            var options = {
                url: "http://results.dogpile.com/ser?qc=images&q=" + "cursed images",
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
        
        
        
            };
        
        }
        
            request(options, function(error, response, responseBody){
                if(error){
                    return;
                }

                $ = cheerio.load(responseBody);

                var links = $(".image a.link"); 
                //to get an image not something else (cheerio)
                
                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                //puts all the image into an array that we can manipulate

                console.log(urls);
                if (!url.length){
                    return;
                }

                message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
                //sends a random image that was stored in the array we created

            });

        }
       


        
}
