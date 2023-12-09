const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [codPeca1, qtdaPeca1, valorUnitpeca1] = lines[0].split(" ");
let [codPeca2, qtdaPeca2, valorUnitpeca2] = lines[1].split(" ");
let totalpagar = (qtdaPeca1 * valorUnitpeca1) + (qtdaPeca2 * valorUnitpeca2)

console.log("VALOR A PAGAR: R$", totalpagar.toFixed(2))