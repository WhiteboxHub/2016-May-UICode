var mysql = require('mysql');
mysql.connect(connectionString, function(err, conn){
    
    conn.createStatement(sql, function(err, results){
       
       for(var r in results)
       {
           
       }
        
    });
    
});


/*var jdbc = new Driver();

driver.getConnection();

connection.getStatement()

statement.execute();*/