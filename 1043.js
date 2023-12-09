const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [valorA, valorB, valorC] = lines[0].split(" ");

valorA = parseFloat(valorA)
valorB = parseFloat(valorB)
valorC = parseFloat(valorC)

let perimetroTriangulo = Number(valorA + valorB + valorC)
let areaTrapezio = Number(((valorA + valorB) * valorC) / 2)

if(valorB + valorC > valorA && Math.abs(valorB - valorC) < valorA || valorA + valorB > valorC && Math.abs(valorA - valorB) < valorC || valorA + valorC > valorB && Math.abs(valorA - valorC) < valorB){

    console.log(`Perimetro = ${(perimetroTriangulo).toFixed(1)}`)

}else{

    console.log(`Area = ${(areaTrapezio).toFixed(1)}`)

}