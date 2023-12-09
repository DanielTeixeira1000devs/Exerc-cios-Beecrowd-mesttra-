const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let raioEsfera = parseFloat(lines[0]);

volumeEsfera =  ((4/3.0) * 3.14159) * (raioEsfera ** 3)

console.log("VOLUME =", volumeEsfera.toFixed(3))