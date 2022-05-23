const fs = require('fs')


fs.promises.readdir('./03-files-in-folder/secret-folder', {withFileTypes: true})

.then(filenames => {
    for (let filename of filenames){
        fs.stat(`./03-files-in-folder/secret-folder/${filename.name}`, (error, stats) => {
            if (error) {
              console.log(error);
            }
            else {
                if (filename.isFile() === true) {
                    console.log(`${filename.name.replace('.', ' - ')} - ${stats.size}bt`)
                }
            }
          });
    }
})

.catch(err => {
    console.log(err)
})