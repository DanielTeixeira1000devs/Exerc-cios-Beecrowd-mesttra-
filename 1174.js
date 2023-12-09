const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valores = lines
let vetor = []

for(let indice = 0; indice < 100; indice++){

    if((valores[indice]) <= 10){
    vetor = (valores[indice])
    vetor = Number(vetor)
    console.log(`A[${indice}] = ${(vetor).toFixed(1)}`)

    }

}