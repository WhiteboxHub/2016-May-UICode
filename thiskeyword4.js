function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getDetails = function() {
        console.log(this.make + ":" + this.model + ":" + this.year);
    }
}



var v1 = new Vehicle('Toyota', 'Camry', 2000);
console.log(v1.getDetails());

//Function Objects are this.