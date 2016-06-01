var EventEmitter = require("events");
var fs = require("fs");

var myEmitter = new EventEmitter();
var currentIndex = 1;

myEmitter.on("runNext", readFile);
readFile();

function readFile() {
    var path = './' + currentIndex + '.txt';
    fs.readFile(path, function(err, data){
    if(err)
    {
        console.log(err);
        return;
    }
    
    console.log(data.toString());
    currentIndex = currentIndex+1;
    myEmitter.emit("runNext");
});
}

