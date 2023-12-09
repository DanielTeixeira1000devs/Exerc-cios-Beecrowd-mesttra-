const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valores = lines
let qtdeCasos = valores.shift()

for(let indice = 0; indice < qtdeCasos; indice++){

    let [dividendo, divisor] = valores[indice].split(" ")

    dividendo = parseInt(dividendo)
    divisor = parseInt(divisor)

    let divisaoEfetuada = (dividendo / divisor).toFixed(1)

    if(divisor == 0){

        console.log("divisao impossivel")

    }else{

        console.log(divisaoEfetuada)

    }

}