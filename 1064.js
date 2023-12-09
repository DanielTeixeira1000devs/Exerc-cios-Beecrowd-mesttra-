const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let nota1 = Number(lines[0]);
let nota2 = Number(lines[1]);
let nota3 = Number(lines[2]);
let nota4 = Number(lines[3]);
let nota5 = Number(lines[4]);
let nota6 = Number(lines[5]);

let numerosPositivos = 0

for(let indice = 0; indice < lines.length; indice++){
    if(lines[indice] > 0){

        numerosPositivos++

    }

}console.log(`${numerosPositivos} valores positivos`)

let soma = 0

for(let contagem = 0; contagem < lines.length; contagem++){
    if(lines[contagem] > 0){

        soma += Number(lines[contagem])

    }

}console.log((soma / numerosPositivos).toFixed(1))
