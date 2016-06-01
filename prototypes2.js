var o1 = {};

function getObject() {
    return {
        something: "UIProgramming"
    }
}

var o2 = getObject();

var o3 = new Object();

console.log(o1.constructor.toString());
console.log(o2.constructor.toString());
console.log(o3.constructor.toString());