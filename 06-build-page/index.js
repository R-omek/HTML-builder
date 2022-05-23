const fs = require('fs')
const path = require('path');
const _default = require('style-loader');




function createFolder() {
    fs.mkdir(path.join(__dirname, 'project-dist'), (err) => {
        if (err) throw err;
    })
}
function checkIfFolderExist() {
    fs.access('./06-build-page/project-dist', (err) => {
        err ? createFolder() : 'exist'});
}
function createFile(filename){
    fs.appendFile(
        path.join(`${__dirname}/project-dist`, filename),
        '',
        (err) => {
            if (err) return
        })
}
function bundleStyles(){
    fs.promises.readdir(`${__dirname}/styles`)

    .then(filenames => {
        for (let filename of filenames){
            if (path.extname(filename) === '.css'){
                fs.readFile(`${__dirname}/styles/${filename}` , "utf8", 
                function(error,data){
                    if(error) throw error
                        fs.appendFile(
                            path.join(`${__dirname}/project-dist`, 'style.css'),
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
}
function copyFonts() {
    fs.promises.readdir(`./06-build-page/assets/fonts`)
    
    .then(filenames => {
        fs.mkdir(`${__dirname}/project-dist/assets`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        fs.mkdir(`${__dirname}/project-dist/assets/fonts`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        for (let filename of filenames){
            function callback(err) {
                 if (err) throw err;
            }

            fs.copyFile(`${__dirname}/assets/fonts/${filename}`, `${__dirname}/project-dist/assets/fonts/${filename}`, callback);
        }
    })

    .catch(err => {
        console.log(err)
    })
}
function copyImg() {
    fs.promises.readdir(`./06-build-page/assets/img`)
    
    .then(filenames => {
        fs.mkdir(`${__dirname}/project-dist/assets`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        fs.mkdir(`${__dirname}/project-dist/assets/img`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        for (let filename of filenames){
            function callback(err) {
                 if (err) throw err;
            }

            fs.copyFile(`${__dirname}/assets/img/${filename}`, `${__dirname}/project-dist/assets/img/${filename}`, callback);
        }
    })

    .catch(err => {
        console.log(err)
    })
}
function copySvg() {
    fs.promises.readdir(`./06-build-page/assets/svg`)
    
    .then(filenames => {
        fs.mkdir(`${__dirname}/project-dist/assets`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        fs.mkdir(`${__dirname}/project-dist/assets/svg`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        for (let filename of filenames){
            function callback(err) {
                 if (err) throw err;
            }

            fs.copyFile(`${__dirname}/assets/svg/${filename}`, `${__dirname}/project-dist/assets/svg/${filename}`, callback);
        }
    })

    .catch(err => {
        console.log(err)
    })
}
function copyHtmlTemplates() {
    fs.promises.readdir(`./06-build-page`)
    
    .then(filenames => {
        function callback(err) {
                 if (err) throw err;
            }

        fs.copyFile(`${__dirname}/template.html`, `${__dirname}/project-dist/index.html`, callback);
    })

    .catch(err => {
        console.log(err)
    })
}


checkIfFolderExist()
createFile('index.html')
createFile('style.css')
copyFonts()
copyImg()
copySvg()
copyHtmlTemplates()
bundleStyles()


fs.readFile(`${__dirname}/project-dist/index.html`, (err, data) => {
    if (err) throw err;
    for(const char of data.toString().split(/$\{{header}}/)){
        console.log(char)
    }
})







