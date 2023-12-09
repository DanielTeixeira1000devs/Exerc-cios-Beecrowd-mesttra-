const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let DDD = parseInt(lines[0]);

if(DDD != 61 && DDD != 71 && DDD != 11 && DDD != 21 && DDD != 32 && DDD != 19 && DDD != 27 && DDD != 31){

    console.log("DDD nao cadastrado")

}else{

switch(DDD){

    case 61:

    console.log("Brasilia")
    break;

    case 71:

    console.log("Salvador")
    break;

    case 11:

    console.log("Sao Paulo")
    break;

    case 21:

    console.log("Rio de Janeiro")
    break;

    case 32:

    console.log("Juiz de Fora")
    break;

    case 19:

    console.log("Campinas")
    break;

    case 27:

    console.log("Vitoria")
    break;

    case 31:

    console.log("Belo Horizonte")
    break;
}
}