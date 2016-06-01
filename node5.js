var fs = require("fs");

fs.readFile('./1.txt', function(err, data){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

fs.readFile('./2.txt', function(err, data){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

fs.readFile('./3.txt', function(err, data){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

fs.readFile('./4.txt', function(err, data){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data.toString());
});

fs.readFile('./5.txt', function(err, data){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data.toString());
});