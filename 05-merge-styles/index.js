const fs = require('fs')
const path = require('path')

fs.writeFile(
    path.join(`${__dirname}/project-dist`, 'bundle.css'),
    '',
    (err) => {
        if (err) throw err
    })
fs.promises.readdir(`${__dirname}/styles`)

.then(filenames => {
    for (let filename of filenames){
        if (path.extname(filename) === '.css'){
            fs.readFile(`${__dirname}/styles/${filename}` , "utf8", 
            function(error,data){
                if(error) throw error
                    fs.appendFile(
                        path.join(`${__dirname}/project-dist`, 'bundle.css'),
                        data,
                        err => {
                            if (err) throw err
                        }
                    )            
                });       
        }
    }
})

.catch(err => {
    console.log(err)
})