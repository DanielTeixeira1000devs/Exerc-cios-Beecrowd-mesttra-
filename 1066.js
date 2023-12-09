const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valor1 = parseInt(lines[0]);
let valor2 = parseInt(lines[1]);
let valor3 = parseInt(lines[2]);
let valor4 = parseInt(lines[3]);
let valor5 = parseInt(lines[4]);

let valoresPares = 0
let valoresImpares = 0
let valoresPositivos = 0
let valoresNegativos = 0

for(indice = 0; indice < lines.length; indice++){
    if(parseInt(lines[indice]) == 0 || parseInt(lines[indice]) % 2 == 0){

        valoresPares++

    }


}for(index = 0; index < lines.length; index++){
    if((lines[index]) != 0 && parseInt(lines[index]) % 2 != 0){

        valoresImpares++

    }


}for(margem = 0; margem < lines.length; margem++){
    if(parseInt(lines[margem]) > 0){

        valoresPositivos++

    }


}for(trator = 0; trator < lines.length; trator++){
    if(parseInt(lines[trator]) < 0){

        valoresNegativos++

    }


}
console.log(`${valoresPares} valor(es) par(es)`)
console.log(`${valoresImpares} valor(es) impar(es)`)
console.log(`${valoresPositivos} valor(es) positivo(s)`)
console.log(`${valoresNegativos} valor(es) negativo(s)`)