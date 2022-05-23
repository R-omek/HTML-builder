const fs = require('fs');

fs.stat("./03-files-in-folder/secret-folder", (error, stats) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log("Stats object for: example_directory.txt");
      console.log(stats);
    }
  });




    

       
