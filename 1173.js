const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valor = lines
let dobro = parseInt(valor)
console.log(`N[0] = ${dobro}`)

for(let indice = 0; indice < 9; indice++){

    dobro = dobro * 2
    console.log(`N[${indice + 1}] = ${dobro}`)

}