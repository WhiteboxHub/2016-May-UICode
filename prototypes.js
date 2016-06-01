function fn1() {
    console.log(1);
}

var fn2 = function(){
    console.log(2);
}

fn1.prototype.name = 'UI';
fn1.prototype.something = 'Programming';

console.log(fn1.prototype);
console.log(fn2.prototype);