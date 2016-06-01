function Person(name, email, phone)
{
    this.name = name;
    this.email = email;
    this.phone = phone;
    
    this.getDetails = function() {
        return this.name + ":" + this.email + ":" + this.phone;
    }
}


module.exports = Person;

