console.log(1);
console.log(2);
setTimeout(function() {
    console.log(3);
}, 1000);
console.log(4);
setTimeout(function() {
    console.log(5);
}, 500);
setTimeout(function() {
    console.log(6);
}, 2000);
setTimeout(function() {
    console.log(7);
}, 0);
console.log(8);