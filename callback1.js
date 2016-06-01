function doSomething(fn) {
    console.log('I am waiting for 1000 milliseconds');
    
    fn();
}

function callback() {
    console.log('Hello World!!!');
}

doSomething(callback);