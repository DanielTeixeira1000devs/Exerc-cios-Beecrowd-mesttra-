const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valoresMN = lines
let soma = 0
let sequencia = ""

for(let indice = 0; indice < valoresMN.length; indice++){

    let [primeiroValor, segundoValor] = (valoresMN[indice]).split(" ")

    primeiroValor = parseInt(primeiroValor)
    segundoValor = parseInt(segundoValor)

    if(primeiroValor < segundoValor){

        soma += primeiroValor
        sequencia += primeiroValor + " "

        while(primeiroValor < segundoValor && primeiroValor > 0 && segundoValor > 0){

            primeiroValor++
            soma += primeiroValor
            sequencia += primeiroValor + " "

        }

    }else if(primeiroValor > segundoValor && primeiroValor > 0 && segundoValor > 0){

        soma += segundoValor
        sequencia += segundoValor + " "

        while(segundoValor < primeiroValor){

            segundoValor++
            soma += segundoValor
            sequencia += segundoValor + " "

        }

    }else if(primeiroValor == segundoValor && primeiroValor > 0 && segundoValor > 0){

        soma += primeiroValor
        console.log(primeiroValor)

    }else if(primeiroValor <= 0 || segundoValor <= 0){

        

    }

    if(soma > 0){

        console.log(`${sequencia}Sum=${soma}`)

    }

    soma = 0
    sequencia = ""
}