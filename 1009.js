const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let nomeVendedor = (lines[0]);
let salarioFixo = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);
let ComissaoVendas = totalVendas * 0.15
let salarioFinal = salarioFixo + ComissaoVendas

console.log("TOTAL =", salarioFinal.toFixed(2))