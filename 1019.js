const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let duracaoEventoSegundos = parseInt(lines[0]);

let eventoHoras = parseInt(duracaoEventoSegundos / 3600)
let eventoMinutos = parseInt((duracaoEventoSegundos - (eventoHoras * 3600)) / 60)
let eventoSegundos = parseInt(duracaoEventoSegundos % 60)

console.log(`${eventoHoras}:${eventoMinutos}:${eventoSegundos}`)