const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valorX = parseInt(lines[0]);
let valorY = parseInt(lines[1]);
let contadora = 0

for(indice = valorY + 1; indice < valorX; indice++){

    if(indice % 2 != 0){

        contadora = contadora + indice

    }

}if(contadora != 0){
    
    console.log(contadora)

}else if(contadora == 0){

    console.log(0)

}