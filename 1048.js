const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let [salarioFunc] = lines[0].split(" ");

salarioFunc = parseFloat(salarioFunc).toFixed(2)

let salarioReajustado
let valorReajuste

if(salarioFunc <= 400.00){

    salarioReajustado = (salarioFunc * 1.15)
    valorReajuste = salarioReajustado - salarioFunc

    console.log("Novo salario: " + salarioReajustado.toFixed(2))
    console.log("Reajuste ganho: " + valorReajuste.toFixed(2))
    console.log("Em percentual: 15 %")

}else if(salarioFunc > 400.00 && salarioFunc <= 800.00){

    salarioReajustado = (salarioFunc * 1.12)
    valorReajuste = salarioReajustado - salarioFunc

    console.log("Novo salario: " + salarioReajustado.toFixed(2))
    console.log("Reajuste ganho: " + valorReajuste.toFixed(2))
    console.log("Em percentual: 12 %")

}else if(salarioFunc > 800.00 && salarioFunc <= 1200.00){

    salarioReajustado = (salarioFunc * 1.10)
    valorReajuste = salarioReajustado - salarioFunc

    console.log("Novo salario: " + salarioReajustado.toFixed(2))
    console.log("Reajuste ganho: " + valorReajuste.toFixed(2))
    console.log("Em percentual: 10 %")

}else if(salarioFunc > 1200.00 && salarioFunc <= 2000.00){

    salarioReajustado = (salarioFunc * 1.07)
    valorReajuste = salarioReajustado - salarioFunc

    console.log("Novo salario: " + salarioReajustado.toFixed(2))
    console.log("Reajuste ganho: " + valorReajuste.toFixed(2))
    console.log("Em percentual: 7 %")

}else if(salarioFunc > 2000.00){

    salarioReajustado = (salarioFunc * 1.04)
    valorReajuste = salarioReajustado - salarioFunc

    console.log("Novo salario: " + salarioReajustado.toFixed(2))
    console.log("Reajuste ganho: " + valorReajuste.toFixed(2))
    console.log("Em percentual: 4 %")

}