function add(a){
    return a;
}

function add() {
    var result = 0;
    for(var i in arguments)
    {
        result += arguments[i];
    }
    return result;
}

console.log(add());
console.log(add(2));
console.log(add(2,3));
console.log(add(2,3,3));
console.log(add(2,3,3,3));
console.log(add(2.0,3));
console.log(add(true,3));
console.log(add(2.0,'23'));

/*function name(arguments)
{
    
}*/