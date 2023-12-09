const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valorAleatorio = parseFloat(lines[0]);

for(let indice = 1; indice <= valorAleatorio; indice++){
    if(indice % 2 == 0){

        console.log(`${indice}^2 = ${indice * indice}`)

    }

}