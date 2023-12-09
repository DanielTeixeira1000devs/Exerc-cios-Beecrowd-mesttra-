const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valorX = parseInt(lines[0]);

let contagem = 0

for(let indice = 0; indice < valorX; indice++){

    contagem++

    if(contagem % 2 != 0){

    console.log(contagem)

    }

}