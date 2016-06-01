function Animal() {
    this.eat = function() {
        console.log('I am eating');
    }
}

function Bird() {
    Animal.call(this);
    
    this.fly = function() {
        console.log('I am flying');
    }
}

//Bird.prototype = new Animal();
//console.log(Bird.prototype.constructor);

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

var b1 = new Bird();
//console.log(b1.constructor.prototype.constructor);
b1.eat();
b1.fly();