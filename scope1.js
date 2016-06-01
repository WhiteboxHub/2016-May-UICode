var foo ="bar";

function bar() {
    var foo = "baz";
    
    function baz() {
        foo = "bam";
        bam = "yay";
    }
    
    baz();
    console.log(foo);
    console.log(bam);
    
}


//console.log(foo);
bar();
//console.log(foo);
//console.log(bam);
