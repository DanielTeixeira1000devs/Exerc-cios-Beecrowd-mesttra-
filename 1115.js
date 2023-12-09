const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let coordenadas = lines

for(let indice = 0; indice < coordenadas.length; indice++){

    let[x, y] = coordenadas[indice].split(" ")

    x = parseInt(x)
    y = parseInt(y)

    if(x == 0 || y == 0){

        break;

    }else if(x < 0 && y < 0){

        console.log("terceiro")

    }else if(x > 0 && y > 0){

        console.log("primeiro")

    }else if(x > 0 && y < 0){

        console.log("quarto")

    }else if(x < 0 && y > 0){

        console.log("segundo")

    }

}