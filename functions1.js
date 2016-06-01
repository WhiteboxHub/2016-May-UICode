function fn1() {
    return "Hello World!!!";
}
/*console.log(typeof(fn1));
fn1 = 20;
console.log(typeof(fn1));*/

var message = fn1();
console.log(typeof(message));
console.log(message);

function fn2() {
    console.log('Hello World!!!');
}
var message2 = fn2();
console.log(message2);

//fn2 = 20;

var message3 = fn2();


var a = true;
a = 10;
//a();