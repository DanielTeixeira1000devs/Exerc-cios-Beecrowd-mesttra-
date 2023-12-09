const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valores = lines

for(let indice = 0; indice < valores.length; indice++){

    let [primeiroValor, segundoValor] = valores[indice].split(" ")

    primeiroValor = parseInt(primeiroValor)
    segundoValor = parseInt(segundoValor)

    if(primeiroValor == segundoValor){

        break;

    }else if(primeiroValor < segundoValor){

        console.log("Crescente")

    }else if(primeiroValor > segundoValor){

        console.log("Decrescente")

    }

}