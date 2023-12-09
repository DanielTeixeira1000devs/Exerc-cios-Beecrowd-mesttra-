const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valores = [lines]

for(let indice = 1; indice < lines.length; indice++){

        let [nota1, nota2, nota3] = lines[indice].split(" ")

        let media = ((((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10).toFixed(1))

        if(nota1 == undefined || nota2 == undefined || nota3 == undefined){

        }else{

        console.log(media)

        }

}