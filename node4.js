var Person = require("./Module1");
var person = require("./Module2");
var p3 = require("./Module3");

var p1 = new Person('UI', 'ui@wbl.com', '555-555-5555');
var p2 = person('QA', 'qa@wbl.com', '555-555-5589');
p3.setDetails('Java', 'java@wbl.com', '555-555-5525');

console.log(p1.getDetails());
console.log(p2.getDetails());
console.log(p3.getDetails());