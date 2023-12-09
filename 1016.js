const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let distancia = parseInt(lines[0]);
let tempoGasto = (distancia / 30) * 60

console.log(`${tempoGasto} minutos`)