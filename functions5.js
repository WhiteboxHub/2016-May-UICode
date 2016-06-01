var fn1 = function() {

}

var fn2 = function() {
    return 10;
}

var fn3 = function() {
    return '';
}

var fn4 = function() {
    return 10.2;
}

var fn5 = function() {
    return null;
}

var fn6 = function() {
    return false;
}

var fn7 = function() {
    return [];
}

var fn8 = function() {
    return {
        name: 'UI',
        designation: 'Programmer',
        skills: ['Javascript', 'Angular.js', 'Node.js']
    };
}


var person = fn8();
console.log(person.name);
console.log(person.skills[2]);