function Person() {
    
    this.create = function(name) {
        this.name = name;
    }
    
    this.address = {
        address1: "6500 Dublin Blvd",
        city: "Dublin"
    }
    
}


Person.prototype.fullName = function(){
    return this.firstName + ":" + this.lastName;
}

var p = new Person();
p.firstName = "UI";
p.lastName = "Programming";

console.log(p.fullName());
