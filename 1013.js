const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [valor1, valor2, valor3] = lines[0].split(" ");

let valor1Int = parseInt(valor1)
let valor2Int = parseInt(valor2)
let valor3Int = parseInt(valor3)

if(valor1Int >= valor2Int && valor1Int >= valor3Int){

    console.log(valor1Int + " eh o maior")

}else if(valor2Int >= valor1Int && valor2Int >= valor3Int){

    console.log(valor2Int + " eh o maior")

}else if(valor3Int >= valor1Int && valor3Int >= valor2Int){

    console.log(valor3Int + " eh o maior")

}