const fs = require('fs')
const path = require('path')
const { mkdir } = require('fs')
const { copyFile, constants } = require('node:fs');


function copyDir() {
    fs.promises.readdir('./04-copy-directory/files')

    .then(filenames => {
        mkdir(`${__dirname}/files-copy`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        for (let filename of filenames){
            function callback(err) {
                 if (err) throw err;
            }

            copyFile(`${__dirname}/files/${filename}`, `${__dirname}/files-copy/${filename}`, callback);
        }
    })

    .catch(err => {
        console.log(err)
    })
}

copyDir()