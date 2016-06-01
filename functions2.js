/*


function add(a,b) {
    return a+b;
}

var division;

*/
console.log(add(2,3));
console.log(add(5,0));
console.log(add(-2,-3));

function add(a,b) {
    return a+b;
}

var division = function(a,b) {
    return a/b;
}


var subtract = function sub(a,b) {
    return a - b;
}

console.log(subtract(10,4));


var factorial = function fact(a) {
    if(a <= 1) return 1;
    
    return a * fact(a-1);
}

console.log(factorial(5));

console.log(division(10,5));
console.log(division(100,50));
console.log(division(-10,-5));

