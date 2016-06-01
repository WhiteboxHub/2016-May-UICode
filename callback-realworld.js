var request = require('request');

console.log('About to start request');

request('http://uiprogrammer.com', function(err, response, body){
    console.log('Response came back');
    
    console.log(response);
    console.log(body);
    
    console.log('Done with callback...');
});

console.log('I am not waiting for response');

console.log('I can do more ...without waiting');