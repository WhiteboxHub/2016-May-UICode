function outer() {
    
    var y = 10;
    
    function inner(i) {
        y += i;
        console.log(y);
    }
    
    return inner;
}


var fn = outer();
fn(1);
fn(2);
fn(3);