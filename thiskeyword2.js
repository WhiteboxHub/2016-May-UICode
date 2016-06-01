global.name = 'UI';

var obj = {
    name: 'UI Programmer',
    print: function() {
        console.log(this.name);
    }
}

var obj1 = {
    name: 'QA Engineer'
}


/*obj1.print = obj.print;

obj1.print();*/

var fn1 = obj.print;

fn1();

//Explicit Binding