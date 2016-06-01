function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    
    this.getCar = function() {
        return this;
    }
}

var c1 = new Car();
c1.getCar();