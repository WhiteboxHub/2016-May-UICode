function Car() {
    
    this.make = "Toyota";
    
}

/*console.log(Car.prototype);

console.log(Car.prototype.constructor);*/

Car.prototype.mpg = 20;

var c1 = new Car();
console.log(c1.mpg);

//console.log(c1.constructor);
