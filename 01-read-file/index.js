const fs = require('fs');
const { stdout } = require('process');

fs.readFile(__dirname + "/text.txt", "utf8", 
            function(error,data){
                if(error) throw error
                stdout.write(data) 
});