const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valorDinheiro = parseInt(lines[0]);
let qtdaNotas100
let qtdaNotas50
let qtdaNotas20
let qtdaNotas10
let qtdaNotas5
let qtdaNotas2
let qtdaNotas1

console.log(valorDinheiro)
console.log(`${calcQtdaNotas100(valorDinheiro)} nota(s) de R$ 100,00`)
console.log(`${calcQtdaNotas50(valorDinheiro, qtdaNotas100)} nota(s) de R$ 50,00`)
console.log(`${calcQtdaNotas20(valorDinheiro, qtdaNotas100, qtdaNotas50)} nota(s) de R$ 20,00`)
console.log(`${calcQtdaNotas10(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20)} nota(s) de R$ 10,00`)
console.log(`${calcQtdaNotas5(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20, qtdaNotas10)} nota(s) de R$ 5,00`)
console.log(`${calcQtdaNotas2(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20, qtdaNotas10, qtdaNotas5)} nota(s) de R$ 2,00`)
console.log(`${calcQtdaNotas1(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20, qtdaNotas10, qtdaNotas5, qtdaNotas2)} nota(s) de R$ 1,00`)

function calcQtdaNotas100(valorDinheiro) {

    return qtdaNotas100 = parseInt(valorDinheiro / 100)

}


function calcQtdaNotas50(valorDinheiro, qtdaNotas100 ) {

    return qtdaNotas50 = parseInt(((valorDinheiro % 100) / 50))

}


function calcQtdaNotas20(valorDinheiro, qtdaNotas100, qtdaNotas50){

    return qtdaNotas20 = parseInt(((valorDinheiro % 100) - 50 * qtdaNotas50) / 20)

}


function calcQtdaNotas10(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20){

    return qtdaNotas10 = parseInt((((valorDinheiro % 100) - 50 * qtdaNotas50) - 20 * qtdaNotas20) / 10)

}


function calcQtdaNotas5(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20, qtdaNotas10){

    return qtdaNotas5 = parseInt(((((valorDinheiro % 100) - 50 * qtdaNotas50) - 20 * qtdaNotas20) - 10 * qtdaNotas10) / 5)

}


function calcQtdaNotas2(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20, qtdaNotas10, qtdaNotas5){

    return qtdaNotas2 = parseInt(((valorDinheiro % 100) - (50 * qtdaNotas50 + 20 * qtdaNotas20 + 10 * qtdaNotas10 + 5 * qtdaNotas5)) / 2)
}


function calcQtdaNotas1(valorDinheiro, qtdaNotas100, qtdaNotas50, qtdaNotas20, qtdaNotas10, qtdaNotas5, qtdaNotas2){

    return qtdaNotas1 = parseInt(((((((valorDinheiro % 100) - 50 * qtdaNotas50) - 20 * qtdaNotas20) - 10 * qtdaNotas10) - 5 * qtdaNotas5) - 2 * qtdaNotas2) / 1)

}
