var request = require("request");

request('http://uiprogrammer', function(err, response) {
    
    if(!err)
    {
        
        request('http://google.com', function(err, response){
            
        });
        
    }
    
})