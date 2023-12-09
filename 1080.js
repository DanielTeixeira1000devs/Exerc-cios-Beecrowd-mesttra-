const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let array = lines
let valorMaior 

for(let indice = 0; indice < 100; indice++){

    let valores = lines

    if(parseInt(valores[indice]) > valorMaior){

        valorMaior = parseInt(valores[indice])

    }else if(valorMaior == undefined){

        valorMaior = parseInt(valores[indice])

    }

}console.log(valorMaior)
valorMaior = valorMaior.toString()
console.log(array.indexOf(valorMaior) + 1)