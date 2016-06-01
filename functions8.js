/*function fn1() {
    
}

var fn2 = function() {
    
}

(function() {
    console.log('Hello');
}());*/

function Car() 
{
    this.make = "Toyota";
    this.model = "Camry";
    this.getDetails = function() {
        console.log(this.make + ":" + this.model);
    }
}



var c = new Car();
c.getDetails();
