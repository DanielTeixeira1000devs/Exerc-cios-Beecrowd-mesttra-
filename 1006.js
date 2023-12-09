const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let nota1 = parseFloat(lines[0]);
let nota2 = parseFloat(lines[1]);
let nota3 = parseFloat(lines[2]);

let mediaAluno = Number(((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10)

console.log("MEDIA =", mediaAluno.toFixed(1))