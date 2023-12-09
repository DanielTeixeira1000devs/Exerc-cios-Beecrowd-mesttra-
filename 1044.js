const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [valorA, valorB] = lines[0].split(" ");

valorA = parseInt(valorA)
valorB = parseInt(valorB)

if(valorB % valorA == 0 || valorA % valorB == 0){

    console.log("Sao Multiplos")

}else{

    console.log("Nao sao Multiplos")

}