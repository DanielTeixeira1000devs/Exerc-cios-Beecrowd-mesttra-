const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valorN = parseInt(lines[0]);

for(let indice = 1; indice <= 10; indice++){

    console.log(`${indice} x ${valorN} = ${indice * valorN}`)

}