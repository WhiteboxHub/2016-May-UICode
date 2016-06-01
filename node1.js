var fs = require("fs");
//import java.io.*

//
//File f = new File(path)
//FileReader fr = new FileReader(f);
//BufferedReader br = new BufferedReader(fr);
//while(br.readLine())
//{
//    
//}


fs.readFile('./example.txt', function(err, data){
    if(err) 
        console.log(err);
    
    console.log(data.toString());
    
});

console.log('Continue...');