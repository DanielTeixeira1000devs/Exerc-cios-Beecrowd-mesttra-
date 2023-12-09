const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let a = parseInt(lines[0]);

let b = parseInt(lines[1]);

let x = Number(a + b)

console.log("X = "+ x)