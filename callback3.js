var interval = setInterval(function() {
    console.log('UI Programmer');
}, 1000);


setTimeout(function(){
    clearInterval(interval);
}, 5000);