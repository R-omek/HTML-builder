const procces = require('node:process')
const fs = require('fs')
const path = require('path');
const { stdout, stdin } = require('node:process');
const { writeFile, appendFile } = require('node:fs');
const { text } = require('stream/consumers');


process.on('exit', code => {
    if (code === 0) {
        stdout.write('Hello.Write a text\n')
        stdin.on('data', text => {
        })    } else {
        stderr.write(`Что-то пошло не так. Программа завершилась с кодом ${code}`);
    }
});




    

       
