const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let numeroFunc = parseInt(lines[0]);
let horasTrab = parseInt(lines[1]);
let valorHoraTrab = parseFloat(lines[2]);
let salarioFunc = horasTrab * valorHoraTrab

console.log("NUMBER =", numeroFunc)
console.log("SALARY = U$", salarioFunc.toFixed(2))