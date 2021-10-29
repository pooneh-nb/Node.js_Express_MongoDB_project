const fs = require('fs');

// Syncronous read and write
/*
const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avecado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./final/txt/myoutput.txt', textOut);
console.log('File Written!');*/

//Asyncronous read and write

fs.readFile('./final/txt/input.txt', 'utf-8', (err, data) => {
    console.log(data);
})
console.log('Rading file ...');