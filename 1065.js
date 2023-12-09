const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valor1 = parseInt(lines[0]);
let valor2 = parseInt(lines[1]);
let valor3 = parseInt(lines[2]);
let valor4 = parseInt(lines[3]);
let valor5 = parseInt(lines[4]);
let valor6 = parseInt(lines[5]);

let numerosPares = 0

for(let indice = 0; indice < lines.length; indice++){
    if(parseInt(lines[indice]) % 2 == 0){

        numerosPares++

    }

}console.log(`${numerosPares} valores pares`)