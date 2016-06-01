function Animal() {
    this.eat = function() {
        console.log('I am eating');
    }
}

function Bird() {
    this.fly = function() {
        console.log('I am flying');
    }
}

Bird.prototype = new Animal();

var b1 = new Bird();
b1.eat();
b1.fly();