var EventEmitter = require("events");
const myEmitter = new EventEmitter();
var fs = require("fs");

myEmitter.on('open', function(){
    console.log('Db is opened');
});

myEmitter.on('query', function(){
    console.log('Db is queries');
});

myEmitter.on('close', function(){
    console.log('Db is closed');
});

myEmitter.on('error', function(){
    console.log('Fatal error happened with Db.');
});

fs.readFile('./1.txt', function(err, data){
    if(err) myEmitter.emit('error');
    
    if(data.toString().length > 10) {
        myEmitter.emit('open');
    }
});
