const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let salario = parseFloat(lines[0]);
let valorImpostoRenda
let parteSalarioQuePagaImposto = salario - 2000.00

if(salario <= 2000.00){

    console.log("Isento")

}else if(salario > 2000.00 && salario <= 3000.00){

    valorImpostoRenda = (parteSalarioQuePagaImposto) * 0.08

    console.log("R$ " + valorImpostoRenda.toFixed(2))

}else if(salario > 3.000 && salario <= 4500.00){

    valorImpostoRenda = ((salario - 3000.00) * 0.18) + (salario - (2000.00 + (salario - 3000.00))) * 0.08

    console.log("R$ " + valorImpostoRenda.toFixed(2))

}else if(salario > 4500.00){

    valorImpostoRenda = (1000.00 * 0.08) + ((parteSalarioQuePagaImposto - 2500.00) * 0.28) + (1500.00 * 0.18)

    console.log("R$ " + valorImpostoRenda.toFixed(2))

}