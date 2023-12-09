const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [x1, y1] = lines[0].split(" ");
let [x2, y2] = lines[1].split(" ");

let distancia = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))

console.log(distancia.toFixed(4))