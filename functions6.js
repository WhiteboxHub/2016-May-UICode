var a;

function fn1() {
    
    var a = 11;
    
    var fn2 = function() {
        
        
        console.log(a);
    }

    fn2();
}

a = 20;

fn1();