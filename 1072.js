const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valores = [lines];

let contadoraIN = 0
let contadoraOUT = 0

for(let indice = 1; indice < lines.length; indice++){
    if(parseInt(lines[indice]) >= 10 && parseInt(lines[indice]) <= 20){

        contadoraIN++

    }else if(parseInt(lines[indice]) < 10 || parseInt(lines[indice]) > 20){

        contadoraOUT++

    }

}console.log(`${contadoraIN} in`)
console.log(`${contadoraOUT} out`)