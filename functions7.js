/*function fn(a){
    console.log(a);
}*/

/*var a = 10;
fn(10);*/
/*var fn2 = function() {
    
}
fn(fn2);*/


function callback(fn){
    fn();
}

function print() {
    console.log('Hello World!!!');
}


callback(print);


function sendEmail(fromEmail, toEmail, message, fn){
    //sendemail
    fn();
}