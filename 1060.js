const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valor1 = Number(lines[0]);
let valor2 = Number(lines[1]);
let valor3 = Number(lines[2]);
let valor4 = Number(lines[3]);
let valor5 = Number(lines[4]);
let valor6 = Number(lines[5]);

let numerosPositivos = 0

for(let indice = 0; indice < lines.length; indice++){
    if(lines[indice] > 0){

        numerosPositivos++

    }

}console.log(`${numerosPositivos} valores positivos`)

