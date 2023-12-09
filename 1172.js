const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valores = lines

for(let indice = 0; indice < 10; indice++){

    if(valores[indice] == 0 || valores[indice] < 0){

        valores[indice] = 1

    }

    console.log(`X[${indice}] = ${Number(valores[indice])}`)

}