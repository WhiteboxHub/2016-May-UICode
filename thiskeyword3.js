var obj = {
    name: 'UI',
    print: function(){
        console.log(this.name);
    }
}

function doSomething() {
    console.log(this.name);
}

//doSomething();

//doSomething.call(obj);


obj.print.call(global);

//HARD BINDING