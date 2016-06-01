function add(a,b){
    return a+b;
}

var c = add(5,3);
console.log(c);


function outer() {
    
    var y = 10;
    
    function inner() {
        console.log(y);
    }
    
    return inner;
}


var fn = outer();
fn();
fn();
fn();


