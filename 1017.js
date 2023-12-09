const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let tempoGastoViagem = parseInt(lines[0]);
let velocidadeMediaVeiculo = parseInt(lines[1]);
let qtdaLitrosComb = distanciaPercorrida(velocidadeMediaVeiculo,tempoGastoViagem) / 12

console.log(qtdaLitrosComb.toFixed(3))

function distanciaPercorrida(velocidadeMediaVeiculo, tempoGastoViagem){

     return velocidadeMediaVeiculo * tempoGastoViagem

}