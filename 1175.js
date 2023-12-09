const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let vetor = lines
let temporaria1 = []
let temporaria2 = []
let contadora = 0

for(let index = 19; index > 9; index--){

    contadora++
    temporaria1 = vetor[index]
    console.log(`N[${contadora - 1}] = ${temporaria1}`) 

}

for(let indice = 9; indice >= 0; indice--){

    contadora++
    temporaria2 = vetor[indice]
    console.log(`N[${contadora - 1}] = ${temporaria2}`)

}