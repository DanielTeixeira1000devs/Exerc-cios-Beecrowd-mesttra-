const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valor1 = parseInt(lines[0]);
let valor2 = parseInt(lines[1]);
let valor3 = parseInt(lines[2]);
let valor4 = parseInt(lines[3]);

let diferencaProd = (valor1 * valor2) - (valor3 * valor4)

console.log("DIFERENCA =", diferencaProd)
