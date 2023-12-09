const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let nota1 = parseFloat(lines[0]);
let nota2 = parseFloat(lines[1]);

let mediaAluno = Number(((nota1 * 3.5) + (nota2 * 7.5) ) / 11)

console.log("MEDIA =", mediaAluno.toFixed(5))