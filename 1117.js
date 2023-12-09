const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let nota = lines
let qtdeNotasValidas = 0
let notaValida = 0

for(let indice = 0; indice < nota.length; indice++){

    if(Number(nota[indice]) < 0 || Number(nota[indice]) > 10){

        console.log("nota invalida")

    }else if(Number(nota[indice]) >= 0 && Number(nota[indice]) <= 10){

        qtdeNotasValidas++
        notaValida += Number(nota[indice])

        if(qtdeNotasValidas == 2){

            console.log(`media = ${(notaValida / 2).toFixed(2)}`)

        }

    }

}