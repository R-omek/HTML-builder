const procces = require('node:process')
const fs = require('fs')
const path = require('path');
const { stdout, stdin } = require('node:process');
const { writeFile, appendFile } = require('node:fs');


writeFile(
    path.join(__dirname, 'sometext.txt'),
    '',
    (err) => {
        if (err) throw err
    })
stdout.write('Hello, my friend.\nWrite a text to see a magic\n')
stdin.on('data', text => {
    let arrText = text.toString().split('').slice(0, -2)
    if(arrText.join('') === 'exit'){
        console.log('Good luck!')
        procces.exit();
    } else {
        appendFile(
            path.join(__dirname, 'sometext.txt'),
            text,
            err => {
                if (err) throw err
            }
        )
    }
})


process.stdin.resume();

process.on('SIGINT', () => {
    console.log('Good luck!')
    procces.exit();
});

